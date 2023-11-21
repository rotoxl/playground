import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { MutableRefObject, createRef } from 'react';

import { RouteParamsList } from './routes';

export const navigationRef = createRef<NavigationContainerRefWithCurrent<RouteParamsList>>();

export const isReadyRef: MutableRefObject<boolean | null | undefined> = createRef();
