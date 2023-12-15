export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

enum Step {
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg',
  'xl' = 'xl',
}

const margins = {
  [Step.sm]: 4,
  [Step.md]: 8,
  [Step.lg]: 12,
  [Step.xl]: 24,
} as const;

export const lightTheme = {
  colors: {
    typography: '#000000',
    background: '#ffffff',
    window: '#F0F0F0',
  },
  margins,
  borderRadius: margins,
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#151818',
    window: '#202525',
  },
  margins,
  borderRadius: margins,
} as const;
