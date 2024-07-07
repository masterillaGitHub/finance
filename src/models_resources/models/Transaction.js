import Model from "@/models_resources/models/Model";
import TransactionCategory from "@/models_resources/models/TransactionCategory.js";
import Account from "@/models_resources/models/Account.js";


export default class Transaction extends Model
{
    _resourceName = 'transactions';

    get account() {
        return this.hasOne('account', Account)
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
