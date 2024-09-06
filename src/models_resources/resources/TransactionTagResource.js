import ApiResource from './ApiResource.js'

export default class TransactionCategoryResource extends ApiResource
{
    getResource() {
        return 'transaction-tags';
    }

    static setSorting(orderNumbers) {
        return (new this()).setSorting(orderNumbers)
    }

    async setSorting(orderNumbers) {
        return await this.post(this.getPath() + '/set-sorting', {orderNumbers})
    }
}


