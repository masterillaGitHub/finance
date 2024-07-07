
import {isEmpty, isNull} from "@/helpers/validators/index.js";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";

export const STEP_CLOSED = null
export const STEP_TYPE = 'type'
export const STEP_ACCOUNT = 'account'
export const STEP_CATEGORY = 'category'
export const STEP_DATE = 'date'
export const STEP_TAG = 'tag'
export const STEP_TO_ACCOUNT = 'to_account'
export const STEP_TO_AMOUNT = 'to_amount'

export function nextStep(store) {
    switch (store.openStep) {
        case STEP_TYPE:
            doneTypeHandle(store)
            break
        case STEP_ACCOUNT:
            doneAccountHandle(store)
            break
        case STEP_CATEGORY:
            doneCategoryHandle(store)
            break
        case STEP_TO_ACCOUNT:
            doneEnrollmentAccountHandle(store)
            break
        default:
            store.openStep = STEP_CLOSED
    }
}

function doneTypeHandle(store) {
    if (isNull(store.accountId)) {
        store.openStep = STEP_ACCOUNT
    }
    else if (store.typeId !== TYPE_ID_TRANSFER && isNull(store.categoryId)) {
        store.openStep = STEP_CATEGORY
    }
    else if (store.typeId === TYPE_ID_TRANSFER && isEmpty(store.accountTransferId)) {
        store.openStep = STEP_TO_ACCOUNT
    }
    else if (store.typeId === TYPE_ID_TRANSFER && isEmpty(store.toAmount)) {
        store.openStep = STEP_TO_AMOUNT
    }
    else {
        store.openStep = STEP_CLOSED
    }

}

function doneAccountHandle(store) {
    if (store.typeId !== TYPE_ID_TRANSFER && isNull(store.categoryId)) {
        store.openStep = STEP_CATEGORY
    }
    else if (store.typeId === TYPE_ID_TRANSFER && isNull(store.accountTransferId)) {
        store.openStep = STEP_TO_ACCOUNT
    }
    else if (store.typeId === TYPE_ID_TRANSFER && isEmpty(store.toAmount)) {
        store.openStep = STEP_TO_AMOUNT
    }
    else {
        store.openStep = STEP_CLOSED
    }
}

function doneEnrollmentAccountHandle(store) {
    if (store.typeId === TYPE_ID_TRANSFER && isEmpty(store.toAmount)) {
        store.openStep = STEP_TO_AMOUNT
    }
    else if (isEmpty(store.tags)){
        store.openStep = STEP_TAG
    }
    else {
        store.openStep = STEP_CLOSED
    }
}

function doneCategoryHandle(store) {
    if (isEmpty(store.tags)){
        store.openStep = STEP_TAG
    }
    else {
        store.openStep = STEP_CLOSED
    }


}
