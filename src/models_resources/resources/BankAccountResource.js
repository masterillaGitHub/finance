import ApiResource from './ApiResource.js'

export default class BankAccountResource extends ApiResource
{
    getResource() {
        return 'bank-accounts';
    }
}


