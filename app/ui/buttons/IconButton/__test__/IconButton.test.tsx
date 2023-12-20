import { MockComponent } from '@app/testing/MockComponent';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';

import { IconButton } from '../IconButton';

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => ({
  __esModule: true,
  default: MockComponent,
}));

describe('IconButton', () => {
  test('renders button with text', () => {
    const { getByTestId } = render(
      <IconButton testID="test-button">
        <Text>My button</Text>
      </IconButton>,
    );

    expect(getByTestId('test-button-view')).toHaveStyle({
      alignItems: 'center',
      borderRadius: 12,
      borderWidth: 1,
      flexDirection: 'row',
      gap: 8,
      height: 36,
      justifyContent: 'center',
      paddingHorizontal: 8,

      backgroundColor: undefined,
      borderColor: undefined,
    });
  });

  test('renders button with text and icon', () => {
    const { getByTestId } = render(
      <IconButton testID="test-button">
        <MIcon name="linkedin" size={20} color="white" testID="test-innerIcon" />
        <Text testID="test-innerText">My button</Text>
      </IconButton>,
    );
    expect(getByTestId('test-innerIcon')).toBeTruthy();
    expect(getByTestId('test-innerText')).toBeTruthy();
  });

  test('renders button backgroundColor and borderColor', () => {
    const { getByTestId } = render(
      <IconButton testID="test-button" backgroundColor="red" borderColor="orange">
        <Text>My button</Text>
      </IconButton>,
    );

    expect(getByTestId('test-button-view')).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'orange',
    });
  });

  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <IconButton testID="test-button" onPress={onPressMock}>
        Test
      </IconButton>,
    );
    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
