import Model from "@/models_resources/models/Model";
import Account from '@/models_resources/models/Account.js'
import {ACCOUNT_CATEGORY_ICONS} from "@/helpers/constants.js";


export default class AccountCategory extends Model
{
    _resourceName = 'account-categories';


    get accounts() {
        return this.hasMany('accounts', Account)
    }

    get icon() {
        return ACCOUNT_CATEGORY_ICONS.find(icon => icon.id === this.id)?.icon ?? null
    }

    getSum() {
        return this.accounts.reduce((acc, account) => account.getSum() + acc, 0)
    }

    static async loadMainPage() {
        return await this.query().get('/main-page')
    }

    static async loadTransactionPage() {
        return await this.query().get('/transaction-page')
    }

    async loadMainPage() {
        return await this.query().get('/main-page')
    }
}
