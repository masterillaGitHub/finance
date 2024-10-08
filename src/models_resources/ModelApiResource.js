
// import ApiResource from "@masterilla/api-resource"
import ApiResource from "@/models_resources/resources/ApiResourceBase.js"
import {fillIds, fillModels} from "@/models_resources/store_models/fill_models";
import {MODEL_UPDATE_ALL, MODEL_UPDATE_ENTITY} from "@/helpers/constants.js";

export default class ModelApiResource {

    #model = null
    #urlParams = {}
    #response = {}
    #meta = {}
    #updateMode = MODEL_UPDATE_ALL
    #updateModes = {}
    #storageNames = {}

    constructor() {
        this.api = new ApiResource()
    }

    static make(model) {
        const instance = new this()
        instance.setModel(model)

        return instance
    }

    getResponse() {
        return this.#response
    }

    getMeta(){
        return this.#meta
    }

    getResourceUrl(url = null) {
        return !!url ? this.#model.urlResource() + url : this.#model.urlResource()
    }

    getStorageNames() {
        let storageNames = {}

        if (this.#model) {
            storageNames[this.#model.includeName()] = this.#model.storageName()
        }

        return {...storageNames, ...this.#storageNames}
    }

    setModel(model) {
        this.#model = model

        return this
    }

    setUpdateMode(val) {
        this.#updateMode = val

        return this
    }

    setParams(params) {
        this.#urlParams = params

        return this
    }

    setUpdateModes(obj) {
        this.#updateModes = obj

        return this
    }

    setStorageNames(names) {
        this.#storageNames = names

        return this
    }

    async get(url = null) {
        this.api.params(this.#urlParams)

        this.#response = await this.api.query(this.getResourceUrl(url))
        this.#meta = this.#response.data?.meta

        this.#fillResponseData(this.#response.data, this.#updateMode)

        return this.#response
    }

    async create() {
        const url = this.#model.urlResource()
        const data = this.#model.toObject()
        console.log('api create resource', url, data)

        this.api.params(this.#urlParams)

        this.#response = await this.api.post(url, data)
        this.#meta = this.#response.data?.meta

        this.#fillResponseData(this.#response.data, MODEL_UPDATE_ENTITY)

        return this.#response
    }

    async update() {
        const url = this.#model.urlResource() + '/' + this.#model.getId()
        const data = this.#model.toObject()
        console.log('api update resource', url, data)

        this.api.params(this.#urlParams)

        this.#response = await this.api.patch(url, data)
        this.#meta = this.#response.data.meta

        this.#fillResponseData(this.#response.data, MODEL_UPDATE_ENTITY)

        return this.#response
    }

    async destroy() {
        const url = this.#model.urlResource() + '/' + this.#model.getId()

        console.log('api destroy resource', url)
        this.#response = await this.api.delete(url)
        this.#meta = this.#response.data.meta

        return this.#response
    }

    #fillResponseData(data, updateMode) {
        fillIds(this.#model.storageName(), data.data, updateMode)

        fillModels(
            this.#addServerMarkerInCollections(data.included),
            updateMode,
            this.getStorageNames(),
            this.#updateModes
        )
    }

    #addServerMarkerInCollections(included) {
        for (const [includeName, collection] of Object.entries(included)) {
            included[includeName] = this.#addServerMarkerInCollection(collection)
        }

        return included
    }

    #addServerMarkerInCollection(collection) {
        for (const [entityId, entity] of Object.entries(collection)) {
            entity.exists = true

            collection[entityId] = entity
        }

        return collection
    }
}
