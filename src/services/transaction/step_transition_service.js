
import {isEmpty, isNull} from "@/helpers/validators/index.js";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";
import empty from "@/helpers/validators/empty.js";

export const STEP_CLOSED = null
export const STEP_TYPE = 'type'
export const STEP_ACCOUNT = 'account'
export const STEP_CATEGORY = 'category'
export const STEP_DATE = 'date'
export const STEP_TAG = 'tag'
export const STEP_ENROLLMENT_ACCOUNT = 'enrollment_account'
export const STEP_ENROLLMENT_AMOUNT = 'enrollment_amount'

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
        case STEP_ENROLLMENT_ACCOUNT:
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
    else if (store.typeId === TYPE_ID_TRANSFER && empty(store.accountTransferId)) {
        store.openStep = STEP_ENROLLMENT_ACCOUNT
    }
    else if (store.typeId === TYPE_ID_TRANSFER && empty(store.enrollmentAmount)) {
        store.openStep = STEP_ENROLLMENT_AMOUNT
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
        store.openStep = STEP_ENROLLMENT_ACCOUNT
    }
    else if (store.typeId === TYPE_ID_TRANSFER && empty(store.enrollmentAmount)) {
        store.openStep = STEP_ENROLLMENT_AMOUNT
    }
    else {
        store.openStep = STEP_CLOSED
    }
}

function doneEnrollmentAccountHandle(store) {

    if (store.typeId === TYPE_ID_TRANSFER && empty(store.enrollmentAmount)) {
        store.openStep = STEP_ENROLLMENT_AMOUNT
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
