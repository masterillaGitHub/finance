import ApiResource from './ApiResource.js'

export default class BankManagerResource extends ApiResource
{
    getResource() {
        return 'bank-manager';
    }

    static getAccounts(bankId) {
        return (new this()).getAccounts(bankId)
    }

    async getAccounts(bankId) {
        return await this.params({bankId}).get('/get-accounts')
    }
}


