import Model from "@/models_resources/models/Model";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {arrayObjectsSum} from "@/helpers/functions.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";
import Currency from "@/models_resources/models/Currency.js";
import {ACCOUNT_TYPE_EXTERNAL, ACCOUNT_TYPE_INTERNAL, ACCOUNT_TYPES} from "@/helpers/constants.js";


export default class Account extends Model
{
    _resourceName = 'accounts';

    icon = 'mdi-help'
    place_type = ACCOUNT_TYPE_INTERNAL

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

    getSum() {
        if (this.place_type === ACCOUNT_TYPE_EXTERNAL) {
            return 0
        }

        return arrayObjectsSum(this.sums, 'balance')
    }

    getSumInMineCurrency() {
        if (this.place_type === ACCOUNT_TYPE_EXTERNAL) {
            return 0
        }

        return this.sums.reduce((acc, sum) => acc + sum.getBalanceInMainCurrency(), 0)
    }
}
