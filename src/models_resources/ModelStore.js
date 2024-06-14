import {deepCopy, uniqId} from "@/helpers/functions.js";
import {useModelsStore} from "@/models_resources/store_models/models.store.js";

/**
 * Використання Model в блоці computed в компоненті створює циклічний виклик та призводить до помилки
 */
export default class ModelApiResource
{
    model = null
    params = {}

    constructor() {
        this.params = this._getDefaultParams()
    }

    static make(model) {
        const instance = new this()
        instance.setModel(model)

        return instance
    }

    setModel(value) {
        this.model = value

        return this
    }

    setParams(params) {
        this.params = {...this.params, ...params}

        return this
    }

    all() {
        const models = useModelsStore()
        const entities = models.getAll(this._storageName())

        return this._handlerEntities(entities)
    }

    find(id) {
        const models = useModelsStore()
        const entity = models.getById(this._storageName(), id)

        return entity ? this._handlerEntities([entity])[0] : null
    }

    findIn(ids) {
        const models = useModelsStore()
        const entities = models.getByIds(this._storageName(), ids)

        const res = this._handlerEntities(entities)

        return res
    }

    findLoaded() {
        const models = useModelsStore()
        const entities = models.getByLoaded(this._storageName())

        const res = this._handlerEntities(entities)

        return res
    }

    copyToStorage(storageName) {
        const models = useModelsStore()
        const entity = models.getById(this._storageName(), this.model.id)

        models.updateById(storageName, this.model.id, entity)
    }

    moveToStorage(storageName) {
        this.copyToStorage(storageName)

        this._storeRemoveById(this.model.id)
    }

    update(){
        this._storeCommit()
    }

    create() {
        if (!this.model.getId()) {
            this.model.setId(uniqId())
        }

        this._storeCommit()

        return this.model.getId()
    }

    remove() {
        this._storeRemoveById(this.model.getId())
    }

    removeById(id) {
        this._storeRemoveById(id)
    }

    _storeRemoveById(id) {
        const models = useModelsStore()
        models.removeById(this._storageName(), id)
    }

    _storeCommit() {
        const models = useModelsStore()

        const data = deepCopy(this.model.toObject())
        models.updateById(this._storageName(), this.model.getId(), data)
    }

    _getDefaultParams() {
        return {
            model: true,
            copy: true,
            deepCopy: true,
            with: []
        }
    }

    _isFieldRelation(field) {
        return this.model.isFieldRelation(field)
    }

    _getRelation(fieldName) {
        return this.model.relations()[fieldName] ?? null
    }

    _storageName() {
        const moduleName = this.model.storageName()

        if (!moduleName) {
            throw new Error('Is not founded storage name')
        }

        return moduleName
    }

    _handlerEntities(entities) {
        if (!Array.isArray(entities)) {
            throw Error('Is not correct ids')
        }

        if (!entities.length) {
            return []
        }

        if (this._isCopy()) {
            entities = entities.map(entity => this._copyObj(entity))
        }

        // TODO: need realization on future. This method not correct working
        if (this._isWithRelations()) {
            entities = entities.map(entity => this._completeRelations(entity))
        }

        if (this._isModel()) {
            entities = entities.map(entity => this._completeModel(entity))
        }

        return entities
    }

    _completeRelations(entity) {
        if (!entity) {
            return null
        }

        for (let [field, value] of Object.entries(entity)) {

            if (this._isFieldRelation(field) && !!value) {
                const isArray = Array.isArray(value)

                const relationValue = isArray
                    ? this._getRelation(field).findIn(value, this.params)
                    : this._getRelation(field).find(value, this.params)

                entity[field] = relationValue
            }
        }

        return entity
    }

    _completeModel(entity){
        return this.model.clone().fill(entity)
    }

    _isWithRelations() {
        return this.params.hasOwnProperty('with') && this.params.with.length > 0
    }

    _isModel() {
        return this.params.hasOwnProperty('model') && this.params.model === true
    }

    _isCopy() {
        return this.params.hasOwnProperty('copy') && this.params.copy === true
    }

    _isDeepCopy() {
        return this.params.hasOwnProperty('deepCopy') && this.params.deepCopy === true
    }

    _copyObj(obj) {
        if (!obj) {
            return obj
        }

        return this._isDeepCopy() ? deepCopy(obj) : {...obj}
    }
}
