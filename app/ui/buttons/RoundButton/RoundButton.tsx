import { Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type RoundButtonProps = {
  onPress: () => void;
  isPressed: boolean;
  children: React.ReactNode;
  testID?: string;
};

export const RoundButton = ({ onPress, isPressed, children, testID }: RoundButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable onPress={onPress} testID={testID}>
      <View style={[styles.buttonRound, isPressed && styles.buttonPressed]}>{children}</View>
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
    marginRight: 10,
    borderColor: 'white',
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
