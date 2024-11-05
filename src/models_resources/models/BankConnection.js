import Model from "@/models_resources/models/Model";


export default class BankConnection extends Model
{
    _resourceName = 'bank-connections';

    set bank(val) {
        this.belongsTo('bank', val)
    }
}
