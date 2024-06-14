export function requiredRule(value) {
    if (value) return true

    return 'Поле не може бути пустим.'
}
