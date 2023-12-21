import { mockNavigation } from '@app/testing/mockNavigation';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { HomeScreen } from '../HomeScreen';

const { mockStackActionsPush } = mockNavigation();

describe('HomeScreen', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    expect(getByTestId('Localization')).toBeTruthy();
    expect(getByTestId('Unistyles')).toBeTruthy();
  });

  test('navigates on press', async () => {
    const { getByTestId } = render(<HomeScreen />);
    const button = getByTestId('Localization');
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockStackActionsPush).toHaveBeenCalledWith('LocalizationScreen', undefined);
    });
  });
});
