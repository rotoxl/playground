import { breakpoints, darkTheme, lightTheme } from '@app/themes/themes';
import { UnistylesRegistry } from 'react-native-unistyles';

export type AppBreakpoints = typeof breakpoints;
export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

export const setupUnistyles = () => {
  UnistylesRegistry.addBreakpoints(breakpoints)
    .addThemes({
      light: lightTheme,
      dark: darkTheme,
    })
    .addConfig({
      adaptiveThemes: true,
    });
};
