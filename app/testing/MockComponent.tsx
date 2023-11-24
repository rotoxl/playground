import { ReactNode } from 'react';
import { View } from 'react-native';

export const MockComponent = ({ children, ...props }: { children?: ReactNode }) => (
  <View {...props}>{children}</View>
);
