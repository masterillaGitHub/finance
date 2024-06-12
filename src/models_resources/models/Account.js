import Model from "@/models_resources/models/Model";
import AccountSum from "@/models_resources/models/AccountSum.js";
import {arrayObjectsSum} from "@/helpers/functions.js";


export default class Account extends Model
{
    _resourceName = 'accounts';
    _storageName = 'accounts';

    get sums() {
        return this.hasMany(AccountSum, 'sums')
    }

    getSum() {
        return arrayObjectsSum(this.sums, 'balance')
    }
}
