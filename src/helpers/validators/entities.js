import AccountSum from "@/models_resources/models/AccountSum.js";
import Currency from "@/models_resources/models/Currency.js";
import Transaction from "@/models_resources/models/Transaction.js";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import Tag from "@/models_resources/models/Tag.js";

export function isAccountCategoryValid(value) {
    return value instanceof AccountCategory
}

export function validateAccountCategoryItems(items) {
    return items.every(isAccountCategoryValid)
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
    return value instanceof Tag
}

export function validateTagItems(items) {
    return items.every(isTagValid)
}
