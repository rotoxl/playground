import { render, fireEvent } from '@testing-library/react-native';

import { TextLink } from '../TextLink';

const onPressMock = jest.fn();

describe('TextLink', () => {
  test('renders correctly', () => {
    const { getByText } = render(<TextLink content="Test content" testID="test-link" />);
    expect(getByText('Test content')).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <TextLink content="Test content" onPress={onPressMock} testID="test-link" />,
    );

    const link = getByTestId('test-link');
    fireEvent.press(link);
    expect(onPressMock).toHaveBeenCalled();
  });
});
