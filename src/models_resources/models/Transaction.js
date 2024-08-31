import Model from "@/models_resources/models/Model";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import Account from "@/models_resources/models/Account.js";
import TransactionType from "@/models_resources/models/TransactionType.js";
import Currency from "@/models_resources/models/Currency.js";
import {TRANSACTION_CATEGORY_ID_INITIAL} from "@/helpers/constants.js";


export default class Transaction extends Model
{
    _resourceName = 'transactions';

    isInitial() {
        return this.category.id === TRANSACTION_CATEGORY_ID_INITIAL;
    }

    // Relations
    get account() {
        return this.hasOne('account', Account)
    }

    get currency() {
        return this.hasOne('currency', Currency)
    }

    get to_currency() {
        return this.hasOne('to_currency', Currency)
    }

    get to_account() {
        return this.hasOne('to_account', Account)
    }

    get type () {
        return this.hasOne('type', TransactionType)
    }

    get category() {
        return this.hasOne('category', TransactionCategory)
    }

    set currency(id) {
        this.belongsTo('currency', id)
    }

    set to_currency(id) {
        this.belongsTo('to_currency', id)
    }

    set type(id) {
        this.belongsTo('type', id)
    }

    set account(id) {
        this.belongsTo('account', id)
    }

    set to_account(id) {
        this.belongsTo('to_account', id)
    }

    set category(id) {
        this.belongsTo('category', id)
    }
}
