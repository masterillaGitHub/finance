import ApiResource from '@/models_resources/ModelApiResource'
import ModelStore from '@/models_resources/ModelStore'
import {console} from "vuedraggable/src/util/console.js";
import {replaceInArray} from "@/helpers/functions.js";
import {isArray, isNotArray, isNull} from "@/helpers/validators/index.js";

const RELATION_ARRAY = 'array'
const RELATION_OBJECT = 'object'

export default class Model
{
    relationships = {}
    _dependentRelationships = {}
    exists = false
    _baseUrl = '/api/v1'
    _resourceName = null
    #lastSyncIds = []
    _storageName = null
    _includeName = null
    // _relations = [] // TODO: Need realization params with, for loaded all relationships like as with: ['category, 'group']
    _primaryKey = 'id'
    #apiResource = null

    constructor() {

    }

    instance() {
        return new this.constructor()
    }

    static make() {
        return new this()
    }

    static query() {
        return (new this().query())
    }

    static sync(params = {}) {
        return (new this().sync(params))
    }

    static fill(data) {
        return (new this()).fill(data)
    }

    static createLocal() {
        return (new this()).createLocal()
    }

    static all(data) {
        return (new this()).all(data)
    }

    static find(id, params = {}) {
        return (new this()).find(id, params)
    }

    static findIn(ids, params = {}) {
        return (new this()).findIn(ids, params)
    }
    static findLoaded(params = {}) {
        return (new this()).findLoaded(params)
    }
    static reset() {
        (new this()).reset()
    }

    // Getters

    apiResource() {
        return this.#apiResource
    }

    urlResource() {
        return this._baseUrl + '/' + this.resourceName()
    }

    resourceName() {
        return this._resourceName
    }

    includeName() {
        return this._includeName || this.resourceName().replace('-', '_')
    }

    storageName() {
        return this._storageName || this.includeName()
    }

    relations() {
        return this._relations
    }

    primaryKey() {
        return this._primaryKey
    }

    getId() {
        return this[this._primaryKey] ?? null
    }

    // Setters

    setId(id) {
        this[this._primaryKey] = id

        return this
    }

    setResourceName(value) {
        this._resourceName = value

        return this
    }

    setIncludeName(value) {
        this._includeName = value

        return this
    }

    setStorageName(value) {
        this._storageName = value

        return this
    }

    // --

    fill(data) {
        this._creator(data)

        return this;
    }

    toObject() {
        const fields = Object.getOwnPropertyNames(this)

        return fields.reduce((classAsObj, field) => {
            if (this.isFieldAttribute(field)) {
                classAsObj[field] = this[field]
            }

            return classAsObj
        }, {})
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this)
    }

    query() {
        return ApiResource.make(this)
    }

    async sync(params = {}) {
        this.#apiResource = this.query()

        const response = await this.#apiResource.setParams(params).get()

        console.log('sync response', response)

        this.#lastSyncIds = response.data.data

        return response.data.data
    }

    all(params = {}) {
        return ModelStore.make(this).setParams(params).all()
    }

    find(id, params = {}) {
        return ModelStore.make(this).setParams(params).find(id) ?? null
    }

    findIn(ids, params = {}) {
        return ModelStore.make(this).setParams(params).findIn(ids)
    }

    findLoaded(params = {}) {
        return ModelStore.make(this).setParams(params).findLoaded()
    }

    reset() {
        ModelStore.make(this).reset()
    }

    createLocal() {
        const modelId = ModelStore.make(this).create()
        this._updateDependentRelationships(modelId)

        return modelId
    }

    updateLocal() {
        ModelStore.make(this).update()
    }

    destroyLocal() {
        const store = ModelStore.make(this).remove()
    }

    copyToStorage(storageName) {
        ModelStore.make(this).copyToStorage(storageName)
    }

    moveToStorage(storageName) {
        ModelStore.make(this).moveToStorage(storageName)
    }

    save(params = {}) {
        if (this.exists) {
            return this.update(params)
        }

        return this.create(params)
    }

    /**
     * Warning. For correct work method 'create' need use with replaceInArray method.
     * When back response need replace new id on old id
     * Id for entity need create outside this method
     */
    async create(urlParams = {}) {
        const store = ModelStore.make(this)

        const modelId = store.create()
        this._updateDependentRelationships(modelId)

        try {
            const response = await this.query()
                .setParams(urlParams)
                .create()

            this._updateDependentRelationships(response.data.data, modelId)

            console.log('model create response', response)

            store.removeById(modelId)

            return response.data.data
        } catch (e) {
            console.log('removeById', modelId)
            store.removeById(modelId)

            console.error('Error: ' + e)
        }
    }

    async update(params = {}) {
        const store = ModelStore.make(this)

        const tempEntity = store.find(this.getId())

        store.update()

        try {
            const response = await this.query().setParams(params).update()
            console.log('model update response', response)

            // TODO: Need check for work.
            // this._updateDependentRelationships(response.data.data)

            return response.data.data
        }
        catch (e) {
            ModelStore.make(tempEntity).update()

            console.error('Error: ' + e)
        }

        return tempEntity.getId()
    }

    async destroy() {
        const store = ModelStore.make(this)

        const tempEntity = store.find(this.getId())

        store.remove()

        try {
            const response = await this.query().destroy()
            console.log('model update response', response)

            return this.getId()
        } catch (e) {
            ModelStore.make(tempEntity).update()

            console.error('Error: ' + e)
        }
    }

    isFieldAttribute(field) {
        return this.isPublicField(field)
    }

    isPublicField(field) {
        return !field.startsWith('_') && !field.startsWith('#')
    }


    /* Relation Block */

    hasOne(fieldName, model) {
        if (!this.relationships.hasOwnProperty(fieldName)) {
            return null
        }

        return model.find(this.relationships[fieldName]) ?? null
    }

    hasMany(fieldName, model) {
        if (!this.relationships.hasOwnProperty(fieldName)) {
            return []
        }

        return model.findIn(this.relationships[fieldName]) ?? []
    }

    belongsTo(fieldName, entityId, model = null, localRelationName = null, localStorageName = null) {
        this.putRelation(fieldName, entityId)

        if (isNull(model)) {
            return
        }

        const entity = model.find(entityId)
        localRelationName = localRelationName || this.storageName()

        this._dependentRelationships[fieldName] = {
            relationEntity: entity,
            localRelationName,
            localStorageName
        }
    }

    hasRelation(name) {
        return !!this.getRelation(name)
    }

    setRelation(name, value) {
        this._checkAndCreateRelationshipsField()

        this.relationships[name] = value
    }

    addRelation(name, value) {
        this._checkAndCreateRelationshipsField()

        if (!this.relationships.hasOwnProperty(name)) {
            this.relationships[name] = []
        }

        this.relationships[name].push(value)
    }

    getRelation(name) {
        return this.relationships[name] ?? null
    }

    removeRelation(name) {
        delete this.relationships[name]

        this._checkAndDeleteRelationshipsField()
    }

    removeRelationValue(name, value) {
        const relation = this.getRelation(name)

        if (isNull(relation) || isNotArray(relation)) {
            return
        }

        const idx = relation.indexOf(value)

        delete this.relationships[name][idx]
    }

    // TODO: method need for relation 'with'
    isFieldRelation(field) {
        const typeRelations = Array.isArray(this._relations) ? RELATION_ARRAY : RELATION_OBJECT

        return typeRelations === RELATION_ARRAY
            ? this._relations.includes(field)
            : this._relations.hasOwnProperty(field)
    }

    // TODO: method need for relation 'with'
    isFieldModel(field) {
        return this[field] instanceof Model
    }

    // TODO: method need for relation 'with'
    _convertModelToId(model) {
        return model.getId()
    }

    _creator(data) {
        data = data || {}

        for (let [field, value] of Object.entries(data)) {
            this[field] = value
        }
    }

    _checkAndCreateRelationshipsField() {
        if (!this.hasOwnProperty('relationships')) {
            this.relationships = {}
        }
    }
    _checkAndDeleteRelationshipsField() {
        if (Object.entries(this.relationships).length === 0) {
            delete this.relationships
        }
    }

    _updateDependentRelationships(entityId, replaceId = null) {
        const list = Object.entries(this._dependentRelationships)

        for (let [fieldName, {relationEntity, localRelationName}] of list) {

            if (isNull(replaceId)) {
                relationEntity.putRelation(localRelationName, entityId)
            }
            else if (replaceId !== 0) {
                relationEntity.replaceRelation(localRelationName, entityId, replaceId)
            }
            else {
                relationEntity.deleteRelation(localRelationName, entityId)
            }

            relationEntity.updateLocal()
        }
    }

    deleteRelation(relationName, value = null) {
        const relation = this[relationName] // call to exactly relation method

        if (isArray(relation)) {
            if (isNull(value)) {
                throw Error('Delete Relation: no value specified')
            }

            this.removeRelationValue(relationName, value)
        }
        else {
            this.removeRelation(relationName)
        }
    }

    replaceRelation(relationName, newValue, oldValue) {
        const relation = this[relationName] // call to exactly relation method

        if (isArray(relation)) {
            const relations = this.getRelation(relationName)
            this.setRelation(relationName, replaceInArray(relations, oldValue, newValue))
        }
        else {
            this.setRelation(relationName, newValue)
        }
    }

    putRelation(relationName, value) {
        const relation = this[relationName] // call to exactly relation method

        if (isArray(relation)) {
            this.addRelation(relationName, value)
        }
        else {
            this.setRelation(relationName, value)
        }
    }
}


