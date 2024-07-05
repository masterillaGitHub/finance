import {isNotNull} from "@/helpers/validators/index.js";
import {TYPE_ID_TRANSFER} from "@/helpers/constants.js";

const check = state => {
    const isValid = !!state.isEnabledValidate
    const isAmount = state.amount !== 0
    const isAccount = isNotNull(state.accountId)
    const isCategory = state.typeId === TYPE_ID_TRANSFER
        ? isNotNull(state.accountTransferId)
        : isNotNull(state.categoryId)

    return isValid && isAmount && isAccount && isCategory
}

const amount = state => !state.isEnabledValidate || state.amount !== 0
const account = state => !state.isEnabledValidate || isNotNull(state.accountId)
const accountTransfer = state => !state.isEnabledValidate || isNotNull(state.accountTransferId)
const category = state => !state.isEnabledValidate || isNotNull(state.categoryId)

export default {
    check,
    amount,
    account,
    accountTransfer,
    category
}
