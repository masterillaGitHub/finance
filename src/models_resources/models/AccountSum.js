import Model from "@/models_resources/models/Model";
import Currency from "@/models_resources/models/Currency.js";
import Account from "@/models_resources/models/Account.js";
import {useAppStore} from "@/stores/app.store.js";


export default class AccountSum extends Model
{
    _resourceName = 'account-sums';

    getBalanceInMainCurrency() {
        const app = useAppStore()
        const currencyAlphabeticCode = this.currency.alphabetic_code.toLowerCase()

        if (currencyAlphabeticCode === app.currency.main) {
            return this.balance
        }

        const currencyExchangeRate = app.currency.exchangeRates[currencyAlphabeticCode]

        // TODO: Потрібно оновити при додаванні інших валют щоб динамічно оцінювати напрямок конвертації валюти.
        // чи потрібно множити чи ділити
        return this.balance * currencyExchangeRate
    }

    // Relation
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
