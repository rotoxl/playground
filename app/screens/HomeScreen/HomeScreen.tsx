import { Language } from '@app/i18n/constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up HomeScreen.tsx to start working on your app! {Language.EN}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
