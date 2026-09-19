import { FONTS, PALETTE, RADII } from '../constants'

const toKebabCase = (value: string) =>
  value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

const colorVariables = Object.fromEntries(
  Object.entries(PALETTE).map(([name, value]) => [`--color-${toKebabCase(name)}`, value]),
)

export const cssVariables = {
  ':root': {
    ...colorVariables,
    '--font-serif': FONTS.serif,
    '--font-sans': FONTS.sans,
    '--radius-card': `${RADII.card}px`,
    '--radius-tile': `${RADII.tile}px`,
    '--radius-pill': `${RADII.pill}px`,
  },
}
