import {MODEL_UPDATE_ALL, MODEL_UPDATE_ENTITY} from "@/constants";
import ApiResource from '@/models_resources/ModelApiResource'
import ModelStore from '@/models_resources/ModelStore'
import _ from "lodash";
import pluralize from 'pluralize'
import fillModels from "@/models_resources/store_models/fill_models";

const RELATION_ARRAY = 'array'
const RELATION_OBJECT = 'object'

export default class Model
{
    relationships = {}
    exists = false
    _baseUrl = '/api/v2'
    _resourceName = null
    #lastSyncIds = []
    _storageName = null
    // _relations = [] // TODO: Need realization params with, for loaded all relationships like as with: ['category, 'group']
    _primaryKey = 'id'
    #apiResource = null

    constructor() {

    }

    instance() {
        return new this.constructor()
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

    static all(data) {
        return (new this()).all(data)
    }

    static find(id, params) {
        return (new this()).find(id, params)
    }

    static findIn(ids, params) {
        return (new this()).findIn(ids, params)
    }

    // Getters

    apiResource() {
        return this.#apiResource
    }

    urlResource() {
        return this._baseUrl + '/' + this.resourceName()
    }

    resourceName() {
        return this._resourceName ?? pluralize(_.kebabCase(this.constructor.name))
    }

    storageName() {
        return this._storageName ?? pluralize(_.snakeCase(this.constructor.name))
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
        return ModelStore.make(this).setParams(params).find(id)
    }

    findIn(ids, params = {}) {
        return ModelStore.make(this).setParams(params).findIn(ids)
    }

    createLocal() {
        return ModelStore.make(this).create()
    }

    updateLocal() {
        ModelStore.make(this).update()
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

        try {
            const response = await this.query().setParams(urlParams).create()

            console.log('model create response', response)

            store.removeById(modelId)

            return response.data.data
        } catch (e) {
            console.log('removeById', modelId)
            store.removeById(modelId)

            console.error('Error: ' + e)
        }

        return modelId
    }

    async update(params = {}) {
        const store = ModelStore.make(this)

        const tempEntity = store.find(this.getId())

        store.update()

        try {
            const response = await this.query().setParams(params).update()
            console.log('model update response', response)

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
        return !field.startsWith('_') && !field.startsWith('#')
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

    hasOne(model, fieldName) {
        if (!this.relationships.hasOwnProperty(fieldName)) {
            return null
        }

        return model.find(this.relationships[fieldName]) ?? null
    }

    hasMany(model, fieldName) {
        if (!this.relationships.hasOwnProperty(fieldName)) {
            return []
        }

        return model.findIn(this.relationships[fieldName]) ?? []
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

    // TODO: method need for relation 'with'
    _convertModelToId(model) {
        return model.getId()
    }
}


