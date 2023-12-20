import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const Tag = ({ text }: { text: string }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text_content}>{text}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.synbad,
    borderRadius: theme.borderRadius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.margins.sm,
  },
  text_content: {
    color: theme.colors.white,
  },
}));
