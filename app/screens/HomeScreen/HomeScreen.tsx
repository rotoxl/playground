import { useNavigation } from '@app/navigation/hooks/useNavigation';
import { RouteKeys } from '@app/navigation/routes';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

type CaseType = {
  title: string;
  subtitle: string;
  screenName: RouteKeys;
};

export const HomeScreen = () => {
  const { navigateMain } = useNavigation();
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

        <MIcon name="chevron-right" size={25} />
      </View>
    </Pressable>
  ));

  return (
    <SafeAreaView style={styles.fullScreen}>
      <StatusBar style="auto" />
      <View style={styles.rootContainer}>
        <ScrollView contentContainerStyle={styles.fullScreen}>{listItems}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  itemContainer: {
    minHeight: 60,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
  },
});
