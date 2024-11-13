import Model from "@/models_resources/models/Model";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import Account from "@/models_resources/models/Account.js";
import TransactionType from "@/models_resources/models/TransactionType.js";
import Currency from "@/models_resources/models/Currency.js";
import {TRANSACTION_CATEGORY_ID_INITIAL} from "@/helpers/constants.js";
import TransactionTag from "@/models_resources/models/TransactionTag.js";


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

    get transfer_transaction() {
        return this.hasOne('transfer_transaction', Transaction)
    }

    get type () {
        return this.hasOne('type', TransactionType)
    }

    get category() {
        return this.hasOne('category', TransactionCategory)
    }

    get tags() {
        return this.hasMany('tags', TransactionTag)
    }

    set currency(id) {
        this.belongsTo('currency', id)
    }

    set type(id) {
        this.belongsTo('type', id)
    }

    set account(id) {
        this.belongsTo('account', id)
    }

    set transfer_transaction(id) {
        this.belongsTo('transfer_transaction', id)
    }

    set category(id) {
        this.belongsTo('category', id)
    }

    // TODO: Check 'belongsTo' with collection and if not, create 'belongsToMany'
    set tags(ids) {
        this.belongsTo('tags', ids)
    }
}
