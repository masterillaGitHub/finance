
export function useFieldValidate(fieldRef) {

  const validate = async () => {
    const errorMessages = await fieldRef.value.validate()
    return errorMessages.length === 0
  }

  const resetValidation = () => fieldRef.value.resetValidation()

  const check = async () => {
    resetValidation()

    return await validate()
  }

  return {
    validate,
    resetValidation,
    check,
  }
}
