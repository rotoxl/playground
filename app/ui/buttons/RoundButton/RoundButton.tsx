import { buildTestID } from '@app/testing/buildTestID';
import { TestProps } from '@app/testing/testProps';
import { colors } from '@app/themes/themes';
import { ColorValue, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type RoundButtonProps = {
  backgroundColor?: ColorValue;
  borderColor?: ColorValue;
  onPress?: () => void;
  isPressed?: boolean;
  children?: React.ReactNode;
} & TestProps;

export const RoundButton = ({
  onPress,
  backgroundColor = colors.synbad,
  borderColor,
  isPressed = false,
  children,
  testID,
}: RoundButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable onPress={onPress} testID={testID}>
      <View
        style={[
          styles.buttonRound,
          {
            backgroundColor,
            borderColor: borderColor ?? backgroundColor,
          },
          isPressed && styles.buttonPressed,
        ]}
        testID={buildTestID(testID, 'view')}>
        {children}
      </View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  buttonRound: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    overflow: 'hidden',
  },
  buttonPressed: {
    borderColor: 'silver',
  },
  text: {},
  textMargin: {
    marginTop: 20,
    fontSize: 20,
  },
}));
