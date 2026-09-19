export const firstName = (fullName: string) => fullName.trim().split(/\s+/)[0]

export const stepNumber = (index: number) => String(index + 1).padStart(2, '0')
