export function useCurrencyDecimalConvert() {
  const toDecimal = val => val / 100
  const toInteger = val => val * 100
  const toToggleSymbol = val => val * -1
  const toPlus = val => Math.abs(val)
  const toMinus = val => -Math.abs(val)

  return {
    toDecimal,
    toInteger,
    toToggleSymbol,
    toPlus,
    toMinus,
  }
}
