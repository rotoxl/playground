import { I18nProvider } from '@app/i18n/I18nProvider';
import { BottomSheetModal } from '@app/modal/BottomSheetModal';
import { Navigation } from '@app/navigation/Navigation';
import { setupUnistyles } from '@app/themes/setup';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens();
SplashScreen.preventAutoHideAsync();

export default function App() {
  setupUnistyles();

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView style={StyleSheet.absoluteFill}>
        <StatusBar />
        <I18nProvider>
          <BottomSheetModalProvider>
            <Navigation />
            <BottomSheetModal />
          </BottomSheetModalProvider>
        </I18nProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
