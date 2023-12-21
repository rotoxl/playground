import {
  SNAP_POINTS_MEDIUM_FULL_HEIGHT,
  SNAP_POINTS_SMALL,
  bottomSheetModalRef,
} from '@app/modal/BottomSheetModal';
import { LinkedInModalContent } from '@app/screens/BottomSheetScreen/components/LinkedInModalContent';
import {
  SignInModalContent,
  SignInModalFooter,
} from '@app/screens/BottomSheetScreen/components/SignInModalContent';
import { reactNativeRole } from '@app/screens/BottomSheetScreen/mocks';
import { useCallback } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const { width } = Dimensions.get('window');

export const BottomSheetScreen = () => {
  const { styles } = useStyles(stylesheet);

  const Card = useCallback(
    ({ title, text, onPress }: { title: string; text?: string; onPress: () => void }) => (
      <Pressable onPress={onPress} style={styles.item}>
        <View>
          <Text style={styles.item_title}>{title}</Text>
          <Text style={styles.item_text}>{text}</Text>
        </View>
      </Pressable>
    ),
    [],
  );

  const handleOpenLinkedInModal = useCallback(() => {
    const ModalContent = () => <LinkedInModalContent role={reactNativeRole} />;

    bottomSheetModalRef.current?.open({
      content: <ModalContent />,
      title: reactNativeRole.roleInfo.title,
      snapPoints: SNAP_POINTS_MEDIUM_FULL_HEIGHT,
    });
  }, []);

  const handleOpenSmallModal = useCallback(() => {
    bottomSheetModalRef.current?.open({
      content: <SignInModalContent />,
      footer: <SignInModalFooter />,
      snapPoints: SNAP_POINTS_SMALL,
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Card
        title="Bottom Sheet"
        text="LinkedIn Style bottom sheet"
        onPress={handleOpenLinkedInModal}
      />
      <Card
        title="Bottom Sheet"
        text="Small bottom sheet, Sign in dialog"
        onPress={handleOpenSmallModal}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => {
  const CARD_WIDTH = (width - 3 * theme.margins.lg) / 2;

  return {
    rootContainer: {
      flex: 1,
      backgroundColor: theme.colors.window,
      padding: theme.margins.lg,
      flexDirection: 'row',
      gap: theme.margins.lg,
      flexWrap: 'wrap',
    },
    item: {
      height: 90,
      width: CARD_WIDTH,
      backgroundColor: theme.colors.mineralGreen,
      padding: theme.margins.lg,
      alignItems: 'flex-start',
      borderRadius: theme.borderRadius.sm,
    },
    item_title: {
      ...theme.fonts.headline3,
      color: theme.colors.white,
    },
    item_text: {
      ...theme.fonts.body,
      color: theme.colors.synbad,
    },
  };
});
