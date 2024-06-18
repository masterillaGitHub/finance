import {isNotEmpty, isNumber, isNumberInString} from "@/helpers/validators/index.js";

export function required(value) {
    if (isNotEmpty(value)) return true

    return 'Поле не може бути пустим.'
}

export function requiredZeroPossible(value) {
    if (isNotEmpty(value) || value === 0 || value === '0') return true

    return 'Поле не може бути пустим.'
}

export function integer(value) {
    if (isNumber(value)) return true

    return 'Значення повинно бути цілим числом.'
}

export function number(value) {
    if (isNumberInString(value)) return true

    return 'Значення повинно бути числом.'
}
