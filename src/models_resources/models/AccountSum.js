import Model from "@/models_resources/models/Model";
import Currency from "@/models_resources/models/Currency.js";


export default class AccountSum extends Model
{
    _storageName = 'account_sums';

    get currency() {
        return this.hasOne(Currency, 'currency')
    }
}
