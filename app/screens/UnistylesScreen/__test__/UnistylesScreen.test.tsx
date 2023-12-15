import { mockUnistyles } from '@app/testing/mockUnistyles';
import { fireEvent, render } from '@testing-library/react-native';

import { UnistylesScreen } from '../UnistylesScreen';

const { mockGetCurrentTheme, mockSetTheme } = mockUnistyles();

describe('UnistylesScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<UnistylesScreen />);
    expect(getByText('sm')).toBeTruthy();
    expect(getByText('md')).toBeTruthy();
    expect(getByText('lg')).toBeTruthy();
    expect(getByText('xl')).toBeTruthy();
  });

  it('changes theme', async () => {
    const { getByTestId } = render(<UnistylesScreen />);
    const themeName = getByTestId('currentTheme');
    expect(themeName).toHaveTextContent('light');

    fireEvent.press(getByTestId('changeTheme-dark'));
    expect(mockGetCurrentTheme()).toBe('dark');
    expect(mockSetTheme).toHaveBeenCalledWith('dark');

    fireEvent.press(getByTestId('changeTheme-light'));
    expect(mockGetCurrentTheme()).toBe('light');
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
