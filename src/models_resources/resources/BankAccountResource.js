import ApiResource from './ApiResource.js'

export default class BankAccountResource extends ApiResource
{
    getResource() {
        return 'bank-accounts';
    }

    static updateTransactions(bankId) {
        return (new this()).updateTransactions(bankId)
    }

    async updateTransactions(bankId) {
        return await this.post(this.getPath() + '/update-transactions', {bankId})
    }
}


