import { useCallback } from 'react';
import Snackbar from 'react-native-snackbar';

export const useSnackbar = () => {
  const showSnackbar = useCallback((text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_SHORT,
    });
  }, []);

  const showSnackbarOkButton = useCallback((text: string) => {
    Snackbar.show({
      text,
      duration: Snackbar.LENGTH_INDEFINITE,
      numberOfLines: 3,
      action: {
        text: 'OK',
        textColor: 'green',
        onPress: Snackbar.dismiss,
      },
    });
  }, []);

  return { showSnackbar, showSnackbarOkButton };
};
