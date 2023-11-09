import { useNavigation } from '@app/navigation/hooks/useNavigation';
import { RouteKeys } from '@app/navigation/routes';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

type CaseType = {
  title: string;
  screenName: RouteKeys;
};

export const HomeScreen = () => {
  const { navigateMain } = useNavigation();
  const cases = [
    {
      title: 'Localization',
      screenName: 'LocalizationScreen',
    },
  ] satisfies CaseType[];

  const handleNavigateCase = useCallback(
    (screenName: RouteKeys) => () => {
      navigateMain(screenName);
    },
    [],
  );

  const listItems = cases.map((item) => (
    <Pressable key={item.title} onPress={handleNavigateCase(item.screenName)} style={styles.square}>
      <Text>{item.title}</Text>
    </Pressable>
  ));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>{listItems}</ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: 'silver',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
