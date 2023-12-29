import { renderHook } from '@testing-library/react-native';
import Snackbar from 'react-native-snackbar';

import { useSnackbar } from '../useSnackbar';

jest.mock('react-native-snackbar', () => ({
  show: jest.fn(),
  LENGTH_INDEFINITE: 'indefinite',
  dismiss: jest.fn(),
}));

describe('useSnackbar', () => {
  it('should show a snackbar', () => {
    const { result } = renderHook(() => useSnackbar());

    result.current.showSnackbar('Test message');

    expect(Snackbar.show).toHaveBeenCalledWith({
      text: 'Test message',
      duration: Snackbar.LENGTH_INDEFINITE,
    });
  });

  it('should show a snackbar with OK button', () => {
    const { result } = renderHook(() => useSnackbar());

    result.current.showSnackbarOkButton('Test message');

    expect(Snackbar.show).toHaveBeenCalledWith({
      text: 'Test message',
      duration: Snackbar.LENGTH_INDEFINITE,
      numberOfLines: 3,
      action: {
        text: 'OK',
        textColor: 'green',
        onPress: Snackbar.dismiss,
      },
    });
  });
});
