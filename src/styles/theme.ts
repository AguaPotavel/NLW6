export const Theme = {
  primary: '#835afd',
  smothWhite: '#f8f8f8',
  textLight: '#fff',
  lightBorder: '#e2e2e2',
  lightGrey: '#a8a8b3',
  TextAreaBackground: '#fefefe',
  grey: '#737380',
  Inverted: '#29292e',
  mediumGrey: '#dbdcdd',
  highlightedPrimary: '#e559f9',
  googleBackgroundHighlighted: '#ea4335',
  globalBackground: '#f8f8f8',
  globalColor: '#29292e',
  strongTextColor: '#000'
}

export const DarkTheme = {
  primary: '#835afd',
  smothWhite: '#f8f8f8',
  textLight: '#fff',
  lightBorder: '#e2e2e2',
  lightGrey: '#a8a8b3',
  TextAreaBackground: '#fefefe',
  grey: '#737380',
  Inverted: '#29292e',
  mediumGrey: '#dbdcdd',
  highlightedPrimary: '#e559f9',
  googleBackgroundHighlighted: '#ea4335',
  globalBackground: '#232126',
  globalColor: '#29292e',
  strongTextColor: '#fff'
}

export function SelectTheme(isDark: boolean) {
  if (isDark) return DarkTheme
  return Theme
}
