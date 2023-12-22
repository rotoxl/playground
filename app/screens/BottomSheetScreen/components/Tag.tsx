import { buildTestID } from '@app/testing/buildTestID';
import { TestProps } from '@app/testing/testProps';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type TagProps = {
  text: string;
} & TestProps;

export const Tag = ({ text, testID }: TagProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.text_content} testID={buildTestID(testID, 'text')}>
        {text}
      </Text>
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
