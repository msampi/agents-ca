export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export class Validator {
  static isRequired(value: string): boolean {
    return value.trim().length > 0
  }

  static isEmail(value: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(value)
  }

  static required(value: string, fieldName: string): string | null {
    if (!Validator.isRequired(value)) {
      return `${fieldName} is required`
    }

    return null
  }

  static email(value: string, fieldName: string): string | null {
    if (!Validator.isEmail(value)) {
      return `${fieldName} must be a valid email`
    }

    return null
  }
}
