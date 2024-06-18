import Model from "@/models_resources/models/Model";
import Account from '@/models_resources/models/Account.js'
import {ACCOUNT_CATEGORY_ICONS, STORAGE_NAME_ACCOUNT_CATEGORIES_INDEX} from "@/helpers/constants.js";


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

    storageIndex() {
        return this.setStorageName(STORAGE_NAME_ACCOUNT_CATEGORIES_INDEX)
    }

    static async loadMainPage() {
        return await this.query().get('/main-page')
    }

    async loadMainPage() {
        return await this.query().get('/main-page')
    }
}
