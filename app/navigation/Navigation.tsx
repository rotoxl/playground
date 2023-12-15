import { HomeScreen } from '@app/screens/HomeScreen/HomeScreen';
import { LocalizationScreen } from '@app/screens/LocalizationScreen/LocalizationScreen';
import { UnistylesScreen } from '@app/screens/UnistylesScreen/UnistylesScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

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

const Stack = createStackNavigator<RouteParamsList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Awesome experiments',
        }}
      />
      <Stack.Screen
        name="LocalizationScreen"
        component={LocalizationScreen}
        options={{
          title: 'Localization experiment',
        }}
      />
      <Stack.Screen
        name="UnistylesScreen"
        component={UnistylesScreen}
        options={{
          title: 'Unistyles experiment',
        }}
      />
    </Stack.Navigator>
  );
};
