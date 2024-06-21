import Model from "@/models_resources/models/Model";
import {CURRENCY_ICONS} from "@/helpers/constants.js";


export default class Currency extends Model
{
    _resourceName = 'currencies'


    get icon() {
        return CURRENCY_ICONS.find(icon => icon.id === this.id)?.icon ?? null
    }
}
