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

    get parent() {
        return this.hasOne('parent', TransactionCategory)
    }

    set parent(id) {
        return this.belongsTo('parent', id)
    }

    set type(id) {
        this.belongsTo('type', id)
    }

    childrenCount() {
        return this.children.length
    }

    isChildren() {
        return this.childrenCount() > 0
    }
}
