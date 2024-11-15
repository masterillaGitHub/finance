import AccountSum from "@/models_resources/models/AccountSum.js";
import Currency from "@/models_resources/models/Currency.js";
import Transaction from "@/models_resources/models/Transaction.js";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import TransactionTag from "@/models_resources/models/TransactionTag.js";
import Account from "@/models_resources/models/Account.js";

export function isAccountCategoryValid(value) {
    return value instanceof AccountCategory
}

export function validateAccountCategoryItems(items) {
    return items.every(isAccountCategoryValid)
}

export function isAccountValid(value) {
    return value instanceof Account
}

export function validateAccountItems(items) {
    return items.every(isAccountValid)
}

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

export function isTransactionValid(value) {
    return value instanceof Transaction
}

export function validateTransactionItems(items) {
    return items.every(isTransactionValid)
}

export function isTransactionCategoryValid(value) {
    return value instanceof TransactionCategory
}

export function validateTransactionCategoryItems(items) {
    return items.every(isTransactionCategoryValid)
}

export function isTagValid(value) {
    return value instanceof TransactionTag
}

export function validateTagItems(items) {
    return items.every(isTagValid)
}
