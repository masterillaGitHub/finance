import {isNumber} from "@/helpers/validators.js";

export function requiredRule(value) {
    if (value) return true

    return 'Поле не може бути пустим.'
}

export function numberRule(value) {
    if (isNumber(value)) return true

    return 'Значення повинно бути числом.'
}
