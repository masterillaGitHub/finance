import { defineStore } from 'pinia'

export const useModelsStore = defineStore('models', {
    state: () => ({
        models: {},
        loadedIds: {},
    }),
    getters: {
        getAll: state =>
            modelName =>
                state.models[modelName] ?? [],
        getById: state =>
            (modelName, id) =>
                getEntity(state, modelName, id),
        getByIds: state =>
            (modelName, ids) =>
                getEntities(state, modelName, ids),
        getByLoaded: state =>
            modelName =>
                getEntities(state, modelName, getLoadedIds(state, modelName))
    },
    actions: {
        setLoadedIds(modelName, ids) {
            if (typeof this.loadedIds[modelName] === 'undefined') {
                this.loadedIds[modelName] = []
            }

            this.loadedIds[modelName] = ids
        },
        setCollection(modelName, collection) {
            if (typeof this.models[modelName] === 'undefined') {
                this.models[modelName] = {}
            }

            this.models[modelName] = collection
        },
        updateById(modelName, id, data) {
            if (typeof this.models[modelName] === 'undefined') {
                console.info(`create state model [${modelName}]`)
                this.models[modelName] = {}
            }

            const entity = {
                ...this.models[modelName][id],
                ...data
            }
            const collection = {
                ...this.models[modelName],
                [id]: entity
            }
            const models = {
                ...this.models,
                [modelName]: collection
            }

            this.models = models
        },

        removeById(modelName, id) {
            if (typeof this.models[modelName] === 'undefined') {
                console.warn(`Not found state model [${modelName}]`)
                return
            }

            delete this.models[modelName][id]
        },
        reset() {
            this.models = {}
        },
    },
})

function getLoadedIds(state, modelName) {
    return state.loadedIds[modelName] ?? []
}

function getEntities(state, modelName, ids) {
    return ids.map(id => getEntity(state, modelName, id))
        .filter(x => x)
}

function getEntity(state, modelName, id) {
    let models = state.models[modelName] ?? null

    return models ? models[id] : null
}
