import ApiResource from './ApiResource.js'

export default class AccountResource extends ApiResource
{
    getResource() {
        return 'accounts';
    }

    static balanceTotal() {
        return (new this()).balanceTotal()
    }

    async balanceTotal() {
        return await this.get('/balance-total')
    }
}


