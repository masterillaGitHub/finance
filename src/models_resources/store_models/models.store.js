import { defineStore } from 'pinia'

export const useModelsStore = defineStore('models', {
    state: () => ({
        models: {},
        loadedIds: {},
    }),
    getters: {
        getAll: state =>
            (modelName, raw = false) => getAllEntities(state, modelName, raw),
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
            checkLoadedIds(this, modelName)
            this.loadedIds[modelName] = ids
        },
        addLoadedId(modelName, id) {
            checkLoadedIds(this, modelName)
            this.loadedIds[modelName].push(id)
        },
        removeLoadedId(modelName, id) {
            checkLoadedIds(this, modelName)

            const idx = this.loadedIds.indexOf(id)
            delete this.loadedIds[idx]
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

function checkLoadedIds(store, modelName) {
    if (typeof store.loadedIds[modelName] === 'undefined') {
        store.loadedIds[modelName] = []
    }
}

function getLoadedIds(state, modelName) {
    return state.loadedIds[modelName] ?? []
}

function getAllEntities(state, modelName, raw = false) {
    const entities = state.models[modelName]

    if (raw) {
        return entities ?? {}
    }

    return entities ? Object.values(entities) : []
}

function getEntities(state, modelName, ids) {
    return ids.map(id => getEntity(state, modelName, id))
        .filter(x => x)
}

function getEntity(state, modelName, id) {
    let models = state.models[modelName] ?? null

    return models ? models[id] : null
}
