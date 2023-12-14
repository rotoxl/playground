import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  HomeScreen: undefined;
  LocalizationScreen: undefined;
  UnistylesScreen: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RouteParamsList>;

export type RouteParamsList = object & HomeStackParamsList;
export type RouteKeys = keyof RouteParamsList;
