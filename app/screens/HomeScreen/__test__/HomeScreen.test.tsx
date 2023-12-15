import { mockNavigation } from '@app/testing/mockNavigation';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import React from 'react';

import { HomeScreen } from '../HomeScreen'; // adjust this import according to your file structure

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
