import { useNavigation } from '@app/navigation/hooks/useNavigation';
import { RouteKeys } from '@app/navigation/routes';
import { ScreenFooter } from '@app/ui/layout/ScreenFooter';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import * as Application from 'expo-application';
import { useCallback } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type CaseType = {
  title: string;
  subtitle: string;
  screenName: RouteKeys;
};

export const HomeScreen = () => {
  const { navigateMain } = useNavigation();
  const { styles, theme } = useStyles(stylesheet);

  const cases = [
    {
      title: 'Localization',
      subtitle: 'Internationalization and localization, number and date formatting.',
      screenName: 'LocalizationScreen',
    },
    {
      title: 'Unistyles',
      subtitle: 'Breakpoints, colors, typography, spacing and more.',
      screenName: 'UnistylesScreen',
    },
    {
      title: 'BottomSheet',
      subtitle: 'LinkedIn style bottom sheet.',
      screenName: 'BottomSheetScreen',
    },
    {
      title: 'Snackbar',
      subtitle: 'Snackbar that should sit on top of everything.',
      screenName: 'SnackbarScreen',
    },
    {
      title: 'Updates',
      subtitle: 'OTA updates via EAS.',
      screenName: 'UpdateScreen',
    },
  ] satisfies CaseType[];

  const handleNavigateCase = useCallback(
    (screenName: RouteKeys) => () => {
      navigateMain(screenName);
    },
    [],
  );

  const listItems = cases.map((item) => (
    <Pressable key={item.title} testID={item.title} onPress={handleNavigateCase(item.screenName)}>
      <View style={styles.itemContainer}>
        <View style={styles.fullScreen}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {item.subtitle}
          </Text>
        </View>

        <MIcon name="chevron-right" size={25} color={theme.colors.typography_terciary} />
      </View>
    </Pressable>
  ));

  return (
    <View style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.fullScreen}>{listItems}</ScrollView>
      <ScreenFooter>
        <Text style={styles.versionNumber}>
          Version {Application.nativeApplicationVersion} - update 15
        </Text>
      </ScreenFooter>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  fullScreen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.window,
  },
  itemContainer: {
    minHeight: 60,
    backgroundColor: theme.colors.background,

    marginHorizontal: theme.margins.lg,
    marginTop: theme.margins.lg,

    paddingVertical: theme.margins.lg,
    paddingLeft: theme.margins.xl,
    paddingRight: theme.margins.lg,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: theme.colors.typography_main,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.typography_secondary,
  },
  versionNumber: {
    fontSize: 12,
    color: theme.colors.typography_terciary,
    textAlign: 'center',
  },
}));
