import Model from "@/models_resources/models/Model";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {arrayObjectsSum} from "@/helpers/functions.js";
import AccountCategory from "@/models_resources/models/AccountCategory.js";


export default class Account extends Model
{
    _resourceName = 'accounts';

    get sums() {
        return this.hasMany('sums', AccountSum)
    }

    get category() {
        return this.hasOne('category', AccountCategory)
    }

    set category(id) {
        this.belongsTo('category', id, AccountCategory, 'accounts')
    }

    set currency(id) {
        this.belongsTo('currency', id)
    }

    getSum() {
        return arrayObjectsSum(this.sums, 'balance')
    }
}
