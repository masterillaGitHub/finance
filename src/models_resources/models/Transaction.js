import Model from "@/models_resources/models/Model";


export default class Transaction extends Model
{
    _resourceName = 'transactions';

    set currency(id) {
        this.belongsTo('currency', id)
    }

    set type(id) {
        this.belongsTo('type', id)
    }

    set account(id) {
        this.belongsTo('account', id)
    }

    set category(id) {
        this.belongsTo('category', id)
    }
}
