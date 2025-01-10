export function required (value: string) {
  return !!value || 'Este campo es requerido'
}

export function mail (value: string) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return regex.test(value) || 'El correo no es de formato valido '
}

export function password (value: string) {
  const regex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-+=_{}[\]:;"'<>,.?\\|]{8,}$/
  return (regex.test(value) || 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número')
}

export function repeatPassword (value: string, password: string | null) {
  return (value === password) || 'La contraseña no coinciden'
}

export function phoneNumber (value: string) {
  const regex = /^((\+595|0)9([6-9][1-9])\d{6})$/

  return regex.test(value) || 'Debe ingresar un número de teléfono válido'
}

export function maxLength (value: string, size: number) {
  return (value.length <= size) || `Este campo debe tener ${size} caracteres como máximo`
}

export function isUrl (value: string) {
  const regex = /^(https?):\/\/([^\s/$.?#].\S*)*$/

  return regex.test(value) || 'Debe ingresar una url válida'
}
