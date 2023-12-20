import { ReactNode } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const ModalFooter = ({ children }: { children: ReactNode }) => {
  const { styles } = useStyles(stylesheet);
  const { bottom } = useSafeAreaInsets();

  return <View style={[styles.container, { bottom }]}>{children}</View>;
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.window,
    paddingHorizontal: theme.margins.lg,
  },
}));
