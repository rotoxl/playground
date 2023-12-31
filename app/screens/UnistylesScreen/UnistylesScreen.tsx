import { isStep } from '@app/themes/utils';
import { RoundButton } from '@app/ui/buttons/RoundButton/RoundButton';
import { View, Text } from 'react-native';
import { UnistylesRuntime, createStyleSheet, useStyles } from 'react-native-unistyles';

export const UnistylesScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  const themeName = UnistylesRuntime.themeName;

  const marginVariants = Object.keys(theme.margins).map((breakpoint) => {
    /* istanbul ignore next */
    const variant = isStep(breakpoint) ? theme.margins[breakpoint] : theme.margins.sm;
    return (
      <View
        testID={breakpoint}
        key={variant}
        style={[
          styles.box,
          {
            paddingHorizontal: variant,
            width: variant * 8,
            height: variant * 9,
          },
        ]}>
        <Text style={[styles.boxText, { fontSize: 2.5 * variant }]}>{breakpoint}</Text>
      </View>
    );
  });

  return (
    <View style={styles.window}>
      {marginVariants}
      <View style={styles.toolbar}>
        <Text testID="currentTheme" style={styles.themeName}>
          {themeName}
        </Text>

        <RoundButton
          testID="changeTheme-light"
          onPress={() => UnistylesRuntime.setTheme('light')}
          backgroundColor="white"
          isPressed={themeName === 'light'}
        />
        <View style={styles.buttonSeparator} />
        <RoundButton
          testID="changeTheme-dark"
          onPress={() => UnistylesRuntime.setTheme('dark')}
          backgroundColor="black"
          isPressed={themeName === 'dark'}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  window: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.window,
  },
  box: {
    border: theme.colors.typography_main,
    backgroundColor: theme.colors.background,
    paddingVertical: theme.margins.lg,
    marginLeft: theme.margins.md,
    marginTop: theme.margins.sm,
    borderRadius: theme.margins.sm,
  },
  boxText: {
    color: theme.colors.typography_main,
  },
  row: {},
  toolbar: {
    position: 'absolute',
    right: 30,
    flexDirection: 'row',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeName: {
    color: theme.colors.typography_main,
    fontSize: 20,
    marginRight: 10,
  },
  buttonSeparator: {
    marginRight: theme.margins.sm,
  },
}));
