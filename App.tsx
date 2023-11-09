import { I18nProvider } from '@app/i18n/I18nProvider';
import { Navigation } from '@app/navigation/Navigation';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const colorScheme = useColorScheme();

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <StatusBar />
      <I18nProvider>
        <Navigation colorScheme={colorScheme} />
      </I18nProvider>
    </SafeAreaProvider>
  );
}
