import Model from "@/models_resources/models/Model";
import Transaction from "@/models_resources/models/Transaction.js";


export default class TransactionCategory extends Model
{
    _resourceName = 'transaction-categories';

    get children() {
        return this.hasMany('children', TransactionCategory)
    }

    get transactions() {
        return this.hasMany('transactions', Transaction)
    }

    childrenCount() {
        return this.children.length
    }

    isChildren() {
        return this.childrenCount() > 0
    }
}
