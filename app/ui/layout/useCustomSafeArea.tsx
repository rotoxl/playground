import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

export const useCustomSafeArea = () => {
  const { bottom, top } = useSafeAreaInsets();
  const { theme } = useStyles();

  if (bottom === 0) {
    return { bottom: theme.margins.xl, top: theme.margins.xl };
  } else {
    return { bottom, top };
  }
};
