import AccountSum from "@/models_resources/models/AccountSum.js";
import Currency from "@/models_resources/models/Currency.js";

export function isAccountSumValid(value) {
    return value instanceof AccountSum
}

export function validateAccountSumItems(items) {
    return items.every(isAccountSumValid)
}

export function isCurrencyValid(value) {
    return value instanceof Currency
}

export function validateCurrencyItems(items) {
    return items.every(isCurrencyValid)
}
