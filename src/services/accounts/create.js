import {computed, ref} from "vue";
import AccountSum from "@/models_resources/models/AccountSum.js";
import Account from "@/models_resources/models/Account.js";


export const account = ref(new Account())
export const sums = ref([])
export const sumsCount = computed(() => sums.value.length)


export function reset() {
    resetAccount()
    resetAccountSum()

    console.info('account and account sums were reset')
}

export function resetAccount() {
    account.value = new Account()
}

export function resetAccountSum() {
    sums.value = []
}

export function createAccountSum(currencyId) {
    const sum = new AccountSum()
    sum.balance = 0
    sum.currency = currencyId

    sums.value.push(sum)
    console.log('createAccountSum', sums.value)
}

export function updateAccountSum(sum, fields) {
    return Object.assign(sum, fields)
}

export function deleteAccountSum(sum) {
    sums.value.splice(sums.value.indexOf(sum), 1)
}
