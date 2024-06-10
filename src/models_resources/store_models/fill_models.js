import {MODEL_UPDATE_ALL, MODEL_UPDATE_ENTITY, MODEL_UPDATE_FIELD} from "@/constants";
import store from '@/store/index'

export default function fillModels(included, updateMode, storageNames = {}, updateModes = {}) {

    for (let [modelName, collection] of Object.entries(included)) {
        let uMode = updateModes.hasOwnProperty(modelName)
            ? updateModes[modelName]
            : updateMode

        if (storageNames.hasOwnProperty(modelName)) {
            modelName = storageNames[modelName]
        }

        updateStorage(uMode, modelName, collection)
    }
}

function updateStorage(updateMode, modelName, collection) {
    switch (updateMode) {
        case MODEL_UPDATE_ALL:
            setCollection(modelName, collection)
            break
        case MODEL_UPDATE_ENTITY:
            updateEntity(modelName, collection)
            break
        case MODEL_UPDATE_FIELD:
            updateField(modelName, collection)
            break
    }
}

function setCollection(modelName, collection) {
    store.commit(`models/setCollection`, {modelName, collection})
}

function updateEntity(modelName, collection) {
    setCollection(modelName, Object.assign({}, {...getCollection(modelName), ...collection}))
}

function updateField(modelName, collection) {
    console.log('fillModels update Field')
    const oldCollection = {...getCollection(modelName)}

    for (const entityId in collection) {
        const oldEntity = {...oldCollection[entityId]} ?? {}
        oldCollection[entityId] = Object.assign(oldEntity, collection[entityId])
    }

    setCollection(modelName, oldCollection)
}

function getCollection(modelName) {
    return store.getters[`models/getAll`](modelName)
}

