export type TabScreenType<RouteParams> = {
  screen?: keyof RouteParams;
  params?: RouteParams[keyof RouteParams];
};

export type StackScreenType<RouteParams> = {
  screen?: keyof RouteParams;
  params?: RouteParams[keyof RouteParams];
};
