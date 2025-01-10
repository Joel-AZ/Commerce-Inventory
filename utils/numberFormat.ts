export const numberFormatGuaranies = (value: number) => {
  return 'Gs. ' + new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(value)
}

export const numberFormatWithDecimals = (value: number) => {
  return `${new Intl.NumberFormat('es-ES', { maximumFractionDigits: 2 }).format(value)}%`
}

export const numberFormat = (value: number) => {
  return new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(value)
}

export function formatUSD (num: number) {
  return (
    Number(num).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  )
}

export function parseUSD (text: string) {
  return Number(text.replace(/,/g, ''))
}
