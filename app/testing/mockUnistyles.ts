import { lightTheme as mockLightTheme, darkTheme as mockDarkTheme } from '@app/themes/themes';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';

let mockCurrentTheme = 'light';
const mockSetTheme = (theme: 'light' | 'dark') => {
  mockCurrentTheme = theme;
};

jest.mock('react-native-unistyles', () => {
  let interceptedStyleSheet: Record<string, any> = {};

  return {
    createStyleSheet: (callback: (theme: any) => UnistylesTheme) => {
      const isLightTheme = mockCurrentTheme === 'light';
      interceptedStyleSheet = callback(isLightTheme ? mockLightTheme : mockDarkTheme);
    },
    useStyles: () => {
      return {
        styles: interceptedStyleSheet,
        theme: mockCurrentTheme,
      };
    },
    UnistylesRuntime: {
      setTheme: mockSetTheme,
    },
  };
});

export const mockUnistyles = () => ({
  mockSetTheme,
});
