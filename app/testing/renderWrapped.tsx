/* istanbul ignore file */

import { I18nProvider } from '@app/i18n/I18nProvider';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RenderOptions, render } from '@testing-library/react-native';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DefaultWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <I18nProvider>{children}</I18nProvider>
    </SafeAreaProvider>
  );
};

export const BottomSheetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <BottomSheetModalProvider>
          <BottomSheetModal>
            <I18nProvider>{children}</I18nProvider>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export const renderWrapped = (
  component: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderOptions | undefined,
) => render(component, { wrapper: DefaultWrapper, ...options });
