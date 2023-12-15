import { Step } from '@app/themes/themes';
import { RoundButton } from '@app/ui/buttons/RoundButton/RoundButton';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UnistylesRuntime, createStyleSheet, useStyles } from 'react-native-unistyles';

export const UnistylesScreen = () => {
  const { styles, theme } = useStyles(stylesheet);
  const themeName = UnistylesRuntime.themeName;

  const marginVariants = Object.keys(theme.margins).map((breakpoint) => {
    const variant = theme.margins[breakpoint as unknown as Step];
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
    <SafeAreaView style={styles.window}>
      {marginVariants}
      <View style={styles.toolbar}>
        <Text testID="currentTheme" style={styles.themeName}>
          {themeName}
        </Text>
        <RoundButton
          testID="changeTheme-light"
          onPress={() => UnistylesRuntime.setTheme('light')}
          isPressed={themeName === 'light'}>
          <View style={[styles.buttonRound, styles.buttonLight]} />
        </RoundButton>

        <RoundButton
          testID="changeTheme-dark"
          onPress={() => UnistylesRuntime.setTheme('dark')}
          isPressed={themeName === 'dark'}>
          <View style={[styles.buttonRound, styles.buttonDark]} />
        </RoundButton>
      </View>
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  window: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.window,
  },
  box: {
    border: theme.colors.typography,
    backgroundColor: theme.colors.background,
    paddingVertical: theme.margins.lg,
    margin: theme.margins.md,
    borderRadius: theme.margins.sm,
  },
  boxText: {
    color: theme.colors.typography,
  },
  row: {},
  toolbar: {
    flexDirection: 'row',
    position: 'absolute',
    right: 30,
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeName: {
    color: theme.colors.typography,
    fontSize: 20,
    marginRight: 10,
  },
  buttonRound: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
  },
  buttonLight: {
    backgroundColor: 'white',
    borderColor: 'black',
  },
  buttonDark: {
    backgroundColor: 'black',
    borderColor: 'white',
  },
}));
