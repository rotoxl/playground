export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export enum Step {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

const fonts = {
  headline1: {
    fontSize: 26,
    lineHeight: 30,
  },
  headline2: {
    fontSize: 22,
    lineHeight: 28,
  },
  headline3: {
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 18,
  },
  button: {
    fontSize: 17,
  },
  small: {
    fontSize: 12,
  },
};

const margins = {
  [Step.sm]: 4,
  [Step.md]: 8,
  [Step.lg]: 12,
  [Step.xl]: 24,
} as const;

// https://chir.ag/projects/name-that-color
const colors = {
  mineralGreen: '#456A53',
  synbad: '#9DD2C6',
  abbey: '#525D5F',
  osloGray: '#8F9296',
  ironStone: '#85513A',
  goldenSand: '#F1C66F',
  burntSienna: '#E77B45',
  portage: '#8891EA',
  rhino: '#393969',
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

export const lightTheme = {
  colors: {
    typography_main: '#000000',
    typography_secondary: '#93979E',
    typography_terciary: '#505154',
    background: '#ffffff',
    window: '#F0F0F0',
    ...colors,
  },
  fonts,
  margins,
  borderRadius: margins,
} as const;

export const darkTheme = {
  colors: {
    typography_main: '#ffffff',
    typography_secondary: '#93979E',
    typography_terciary: '#505154',
    background: '#151818',
    window: '#202525',
    ...colors,
  },
  fonts,
  margins,
  borderRadius: margins,
} as const;
