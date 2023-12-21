import { MockComponent } from '@app/testing/MockComponent';
import { colors } from '@app/themes/themes';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';

import { RoundButton } from '../RoundButton';

jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => ({
  __esModule: true,
  default: MockComponent,
}));
const onPressMock = jest.fn();

describe('RoundButton', () => {
  test('renders button with text', () => {
    const { getByTestId } = render(
      <RoundButton testID="test-button">
        <Text style={{ color: 'white', fontSize: 20 }} testID="test-innerText">
          AB
        </Text>
      </RoundButton>,
    );

    expect(getByTestId('test-innerText')).toBeTruthy();
    expect(getByTestId('test-button-view')).toHaveStyle({
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      overflow: 'hidden',

      backgroundColor: colors.synbad, //default color
      borderColor: colors.synbad,
    });
  });

  test('renders button with text and icon', () => {
    const { getByTestId } = render(
      <RoundButton testID="test-button" backgroundColor={colors.burntSienna}>
        <MIcon name="linkedin" size={20} color="white" testID="test-innerIcon" />
      </RoundButton>,
    );
    expect(getByTestId('test-innerIcon')).toBeTruthy();
  });

  test('renders button backgroundColor and borderColor', () => {
    const { getByTestId } = render(
      <RoundButton
        testID="test-button"
        onPress={onPressMock}
        backgroundColor="red"
        borderColor="orange">
        <Text>My button</Text>
      </RoundButton>,
    );

    expect(getByTestId('test-button-view')).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'orange',
    });
  });

  test('renders different borderColor when isPressed', () => {
    const { getByTestId } = render(
      <RoundButton
        testID="test-button"
        onPress={onPressMock}
        backgroundColor="red"
        borderColor="orange"
        isPressed>
        <Text>My button</Text>
      </RoundButton>,
    );

    expect(getByTestId('test-button-view')).toHaveStyle({
      backgroundColor: 'red',
      borderColor: 'silver',
    });
  });

  test('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <RoundButton testID="test-button" onPress={onPressMock}>
        Test
      </RoundButton>,
    );
    const button = getByTestId('test-button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
