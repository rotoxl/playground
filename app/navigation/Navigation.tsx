import { HomeScreen } from '@app/screens/HomeScreen/HomeScreen';
import { LocalizationScreen } from '@app/screens/LocalizationScreen/LocalizationScreen';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeName } from 'react-native';

import { navigationRef } from './constants';
import { useNavigationStateListener } from './hooks/useNavigationStateListener';
import { RouteParamsList } from './routes';

export const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const navigationStateListener = useNavigationStateListener();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      onStateChange={navigationStateListener}>
      <RootNavigator />
    </NavigationContainer>
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
    </Stack.Navigator>
  );
};
