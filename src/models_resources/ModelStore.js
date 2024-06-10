import {deepCopy, uniqId} from "@/functions";
import store from '@/store/index'

/**
 * Warning. Ініціація store обов'язково за межами класу.
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
        const entities = store.getters[`models/getAll`](this._moduleName())

        return this._handlerEntities(entities)
    }

    find(id) {
        const entity = store.getters[`models/getById`](this._moduleName(), id)

        return entity ? this._handlerEntities([entity])[0] : null
    }

    findIn(ids) {
        const entities = store.getters[`models/getByIds`](this._moduleName(), ids)

        const res = this._handlerEntities(entities)

        return res
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
        store.commit(`models/removeById`, {
            modelName: this._moduleName(),
            id
        })
    }

    _storeCommit() {
        const data = deepCopy(this.model.toObject())

        store.commit(`models/updateById`, {
            modelName: this._moduleName(),
            id: this.model.getId(),
            data
        })
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

    _moduleName() {
        const moduleName = this.model.storageName()

        if (!moduleName) {
            throw new Error('Is not founded store module name')
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
        return this.model.instance().fill(entity)
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
