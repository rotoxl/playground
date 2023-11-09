import { StackActions, useNavigation as useNavigationNative } from '@react-navigation/native';
import { useCallback } from 'react';

import { RouteKeys, RouteParamsList, StackNavigation } from '../routes';

export const useNavigation = () => {
  const navigationMain = useNavigationNative<StackNavigation>();

  const navigateMain = useCallback(
    <T extends keyof RouteParamsList>(screenName: RouteKeys, params?: RouteParamsList[T]) => {
      const action = StackActions.push(screenName, params);
      navigationMain.dispatch(action);
    },
    [navigationMain],
  );

  return { navigateMain };
};
