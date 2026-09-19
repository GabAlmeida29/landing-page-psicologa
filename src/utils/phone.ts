import { CONFIG } from '../constants'

export const onlyDigits = (value: string) => value.replace(/\D/g, '')

export function formatPhone(value: string) {
  const digits = onlyDigits(value).slice(0, CONFIG.phoneMaxDigits)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export const isValidPhone = (value: string) =>
  CONFIG.phoneValidLengths.includes(onlyDigits(value).length)

export const formatInternationalPhone = (value: string) =>
  formatPhone(onlyDigits(value).slice(CONFIG.countryCodeLength))
