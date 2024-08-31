import Model from "@/models_resources/models/Model";
import {CURRENCIES} from "@/helpers/constants.js";


export default class Currency extends Model
{
    _resourceName = 'currencies'


    get icon() {
        return CURRENCIES.find(icon => icon.id === this.id)?.icon ?? null
    }
}
