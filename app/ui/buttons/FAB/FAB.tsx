import { colors } from '@app/themes/themes';
import { useCustomSafeArea } from '@app/ui/layout/useCustomSafeArea';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';
import { ColorValue, NativeEventEmitter, NativeModules, Pressable, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  icon: keyof (typeof MIcon)['glyphMap'];
  onPress: () => void;
  color?: ColorValue;
  backgroundColor?: ColorValue;
};

export const FAB = ({
  icon,
  onPress,
  color = colors.white,
  backgroundColor = colors.burntSienna,
}: Props) => {
  const { styles } = useStyles(stylesheet);
  const { bottom } = useCustomSafeArea();

  //TODO subscription to events doesn't work: we should move the FAB up when a snackbar is shown
  // useEffect(() => {
  //   const subscription = new NativeEventEmitter(NativeModules.RNSnackbar).addListener(
  //     'onSnackbarVisibility',
  //     (event) => {
  //       console.log('RNSnackbar', event);
  //     },
  //   );
  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  return (
    <View style={[styles.container, { bottom }]}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={onPress} testID="fab">
        <MIcon name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    right: theme.margins.xl,
    marginBottom: theme.margins.sm,
    position: 'absolute',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
