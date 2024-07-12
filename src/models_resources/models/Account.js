import Model from "@/models_resources/models/Model";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {arrayObjectsSum} from "@/helpers/functions.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import Currency from "@/models_resources/models/Currency.js";


export default class Account extends Model
{
    _resourceName = 'accounts';

    get sums() {
        return this.hasMany('sums', AccountSum)
    }

    set sums(id) {
        this.belongsTo('sums', id)
    }

    get category() {
        return this.hasOne('category', AccountCategory)
    }

    set category(id) {
        this.belongsTo('category', id, AccountCategory, 'accounts')
    }

    get currency() {
        return this.hasOne('currency', Currency)
    }

    set currency(id) {
        this.belongsTo('currency', id)
    }

    getIcon() {
        return this.icon ?? 'mdi-help'
    }

    getSum() {
        return arrayObjectsSum(this.sums, 'balance')
    }

    getSumInMineCurrency() {
        return this.sums.reduce((a, b) => {
            return parseInt(a,10) + parseInt(b.getBalanceInMainCurrency(), 10)
        }, 0)
    }
}
