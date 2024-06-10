const state = {
    models: {}
}

const mutations = {
    setCollection: function(state, {modelName, collection}) {
        if (typeof state.models[modelName] === 'undefined') {
            state.models[modelName] = {}
        }

        state.models[modelName] = collection
    },
    updateById: function(state, {modelName, id, data}) {
        if (typeof state.models[modelName] === 'undefined') {
            console.info(`create state model [${modelName}]`)
            state.models[modelName] = {}
        }

        const entity = {
            ...state.models[modelName][id],
            ...data
        }
        const collection = {
            ...state.models[modelName],
            [id]: entity
        }
        const models = {
            ...state.models,
            [modelName]: collection
        }

        state.models = models
    },

    removeById: (state, {modelName, id}) => {
        if (typeof state.models[modelName] === 'undefined') {
            console.warn(`Not found state model [${modelName}]`)
            return
        }

        delete state.models[modelName][id]
    },
    reset: state => {
        state.models = {}
    },
}

const getters = {
    getAll: state => modelName => state.models[modelName] ?? [],
    getById: state => (modelName, id) => getEntity(state, modelName, id),
    getByIds: state => (modelName, ids) => ids.map(id => getEntity(state, modelName, id)).filter(x => x)
}

const getEntity = (state, modelName, id) => {
    let models = state.models[modelName] ?? null

    return models ? models[id] : null
}

const actions = {}

const modules = {}

export default {
    namespaced: true,
    strict: true,
    modules,
    actions,
    getters,
    mutations,
    state
};
