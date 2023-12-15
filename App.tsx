import { I18nProvider } from '@app/i18n/I18nProvider';
import { Navigation } from '@app/navigation/Navigation';
import { setupUnistyles } from '@app/themes/setup';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
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
      <StatusBar />
      <I18nProvider>
        <Navigation />
      </I18nProvider>
    </SafeAreaProvider>
  );
}
