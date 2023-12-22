import { BottomSheetScreen } from '@app/screens/BottomSheetScreen/BottomSheetScreen';
import { HomeScreen } from '@app/screens/HomeScreen/HomeScreen';
import { LocalizationScreen } from '@app/screens/LocalizationScreen/LocalizationScreen';
import { UnistylesScreen } from '@app/screens/UnistylesScreen/UnistylesScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';
import { UnistylesTheme } from 'react-native-unistyles/lib/typescript/src/types';

import { navigationRef } from './constants';
import { useNavigationStateListener } from './hooks/useNavigationStateListener';
import { RouteParamsList } from './routes';

export const Navigation = () => {
  useStyles(); //necessary to trigger re-render at navigation level
  const navigationStateListener = useNavigationStateListener();

  const themeName = UnistylesRuntime.themeName;
  const isDarkTheme = themeName === 'dark';

  return (
    <>
      <StatusBar style={!isDarkTheme ? 'dark' : 'light'} />
      <NavigationContainer
        ref={navigationRef}
        theme={isDarkTheme ? DarkTheme : DefaultTheme}
        onStateChange={navigationStateListener}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

const Stack = createNativeStackNavigator<RouteParamsList>();

export const RootNavigator = () => {
  const { theme } = useStyles();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Awesome experiments',
          ...screenOptions(theme),
        }}
      />
      <Stack.Screen
        name="LocalizationScreen"
        component={LocalizationScreen}
        options={{
          title: 'Localization experiment',
          ...screenOptions(theme),
        }}
      />
      <Stack.Screen
        name="UnistylesScreen"
        component={UnistylesScreen}
        options={{
          title: 'Unistyles experiment',
          ...screenOptions(theme),
        }}
      />
      <Stack.Screen
        name="BottomSheetScreen"
        component={BottomSheetScreen}
        options={{
          title: 'BottomSheet experiment',
          ...screenOptions(theme),
        }}
      />
    </Stack.Navigator>
  );
};

const screenOptions = (theme: UnistylesTheme) =>
  ({
    headerTintColor: theme.colors.typography_terciary,
    headerBackTitleVisible: false,
  }) satisfies NativeStackNavigationOptions;
