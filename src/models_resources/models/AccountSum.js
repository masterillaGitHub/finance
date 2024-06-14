import Model from "@/models_resources/models/Model";
import Currency from "@/models_resources/models/Currency.js";
import Account from "@/models_resources/models/Account.js";


export default class AccountSum extends Model
{
    _resourceName = 'account-sums';

    get currency() {
        return this.hasOne('currency', Currency )
    }

    set currency(id) {
        return this.belongsTo('currency', id)
    }

    get account() {
        this.hasOne('account', Account)
    }

    set account(val) {
        this.belongsTo('account', val, Account, 'sums')
    }
}
