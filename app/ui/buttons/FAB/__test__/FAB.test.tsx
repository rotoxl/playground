import { colors, lightTheme } from '@app/themes/themes';
import { render, fireEvent } from '@testing-library/react-native';

import { FAB } from '../FAB';

const onPressMock = jest.fn();

describe('FAB', () => {
  test('renders button with the correct styles', () => {
    const { getByTestId } = render(<FAB testID="fab" icon="linkedin" onPress={onPressMock} />);

    expect(getByTestId('fab')).toBeTruthy();
    expect(getByTestId('fab')).toHaveStyle({
      right: lightTheme.margins.xl,
      marginBottom: lightTheme.margins.sm,
      position: 'absolute',
    });
    expect(getByTestId('fab-button')).toHaveStyle({
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.burntSienna,
    });
  });

  test('renders button backgroundColor and borderColor', () => {
    const { getByTestId } = render(
      <FAB
        testID="fab"
        icon="linkedin"
        onPress={onPressMock}
        backgroundColor="red"
        color="orange"
      />,
    );

    expect(getByTestId('fab-button')).toHaveStyle({ backgroundColor: 'red' });
    expect(getByTestId('fab-icon')).toHaveProp('color', 'orange');
  });

  test('calls onPress when pressed', () => {
    const { getByTestId } = render(
      <FAB
        testID="fab"
        backgroundColor={colors.burntSienna}
        icon="linkedin"
        onPress={onPressMock}
      />,
    );
    fireEvent.press(getByTestId('fab-button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
