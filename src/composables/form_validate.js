
export function useFormValidate(form) {
  const validate = async () => {
    const {valid} = await form.value.validate()

    return valid
  }

  const resetValidation = () => form.value.resetValidation()

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
