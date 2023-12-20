import { buildTestID } from '@app/testing/buildTestID';
import { TestProps } from '@app/testing/testProps';
import { ColorValue, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type IconButtonProps = {
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  onPress?: () => void;
  children: React.ReactNode;
} & TestProps;

export const IconButton = ({
  backgroundColor,
  borderColor,
  onPress,
  testID,
  children,
}: IconButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable onPress={onPress} testID={testID}>
      <View
        style={[styles.button, { borderColor: borderColor ?? backgroundColor, backgroundColor }]}
        testID={buildTestID(testID, 'view')}>
        {children}
      </View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  button: {
    height: 36,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,

    flexDirection: 'row',
    gap: theme.margins.md,
    paddingHorizontal: theme.margins.md,
  },
}));
