import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  HomeScreen: undefined;
  LocalizationScreen: undefined;
  UnistylesScreen: undefined;
  BottomSheetScreen: undefined;
  SnackbarScreen: undefined;
  UpdateScreen: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RouteParamsList>;

export type RouteParamsList = object & HomeStackParamsList;
export type RouteKeys = keyof RouteParamsList;
