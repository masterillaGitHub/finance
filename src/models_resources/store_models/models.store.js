import { defineStore } from 'pinia'

export const useModelsStore = defineStore('models', {
    state: () => ({
        models: {},
        activeIds: {},
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
                getEntities(state, modelName, getActiveIds(state, modelName))
    },
    actions: {
        setActiveIds(modelName, ids) {
            checkActiveIds(this, modelName)
            this.activeIds[modelName] = ids
        },
        addActiveIds(modelName, ids) {
            ids.forEach(id => this.addActiveId(modelName, id))
        },
        addActiveId(modelName, id) {
            checkActiveIds(this, modelName)
            this.activeIds[modelName].push(id)
        },
        removeActiveIds(modelName, ids) {
            ids.forEach(id => this.removeLoadedId(modelName, id))
        },
        removeLoadedId(modelName, id) {
            checkActiveIds(this, modelName)

            const idx = this.activeIds.indexOf(id)
            delete this.activeIds[idx]
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
        reset(modelName) {
            if (typeof this.models[modelName] !== 'undefined') {
                this.models[modelName] = {}
            }

            if (typeof this.activeIds[modelName] !== 'undefined') {
                this.activeIds[modelName] = []
            }
        },
        resetAll() {
            this.models = {}
            this.activeIds = {}
        },
    },
})

function checkActiveIds(store, modelName) {
    if (typeof store.activeIds[modelName] === 'undefined') {
        store.activeIds[modelName] = []
    }
}

function getActiveIds(state, modelName) {
    return state.activeIds[modelName] ?? []
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
