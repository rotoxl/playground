import { useNavigation } from '@app/navigation/hooks/useNavigation';
import { RouteKeys } from '@app/navigation/routes';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useCallback } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
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
  ] satisfies CaseType[];

  const handleNavigateCase = useCallback(
    (screenName: RouteKeys) => () => {
      navigateMain(screenName);
    },
    [],
  );

  const listItems = cases.map((item) => (
    <Pressable key={item.title} onPress={handleNavigateCase(item.screenName)}>
      <View style={styles.itemContainer}>
        <View style={styles.fullScreen}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {item.subtitle}
          </Text>
        </View>

        <MIcon name="chevron-right" size={25} color={theme.colors.typography} />
      </View>
    </Pressable>
  ));

  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.rootContainer}>
        <ScrollView contentContainerStyle={styles.fullScreen}>{listItems}</ScrollView>
      </View>
    </SafeAreaView>
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
    color: theme.colors.typography,
  },
  subtitle: {
    fontSize: 14,
    color: theme.colors.typography,
  },
}));
