import ansiColors from 'ansi-colors';
import { useCallback } from 'react';

import { navigationRef } from '../constants';
import { isRouteKey } from '../isRouteKey';

export const useNavigationStateListener = () => {
  const navigationStateLogger = useCallback(() => {
    const currentRouteNameString = navigationRef.current?.getCurrentRoute()?.name;

    if (currentRouteNameString !== undefined) {
      const rootState = navigationRef.current?.getRootState();
      const currentState = rootState?.routes[rootState.index];

      const currentRouteName = isRouteKey(currentRouteNameString, currentState)
        ? currentRouteNameString
        : undefined;

      let log = ansiColors.cyan('[NAV] ');
      log += ansiColors.yellow(currentRouteName ?? '???');

      // eslint-disable-next-line no-console
      console.log(log);
    }
  }, []);

  return navigationStateLogger;
};
