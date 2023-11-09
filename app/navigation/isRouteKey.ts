import { RouteKeys } from './routes';

export type NavBasicState = {
  index?: number;
  routeNames?: string[];
  state?: NavBasicState;
  routes?: NavBasicState[];
  name?: string;
};

export const isRouteKey = (
  name: string,
  currentState: NavBasicState | undefined,
): name is RouteKeys => {
  const isCurrentRoute = !!currentState?.name && name === currentState.name;
  if (isCurrentRoute) {
    return true;
  }

  const inCurrentStack = !!currentState?.state?.routeNames && name in currentState.state.routeNames;
  if (inCurrentStack) {
    return true;
  }

  const nextStack = currentState?.state?.routes
    ? currentState.state.routes[currentState.state.index ?? 0]
    : null;

  return nextStack ? isRouteKey(name, nextStack) : false;
};
