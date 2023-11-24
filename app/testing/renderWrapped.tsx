import { I18nProvider } from '@app/i18n/I18nProvider';
import { RenderOptions, render } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DefaultWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <I18nProvider>{children}</I18nProvider>
    </SafeAreaProvider>
  );
};

export const renderWrapped = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions | undefined,
) => render(component, { wrapper: DefaultWrapper, ...options });
