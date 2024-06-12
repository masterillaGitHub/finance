import Model from "@/models_resources/models/Model";
import Account from '@/models_resources/models/Account.js'
import {arrayObjectsSum} from "@/helpers/functions.js";


export default class AccountCategory extends Model
{
    _resourceName = 'account-categories';
    _storageName = 'account_categories';

    get accounts() {
        return this.hasMany(Account, 'accounts')
    }

    getSum() {
        return this.accounts.reduce((acc, account) => account.getSum() + acc, 0)
    }
}
