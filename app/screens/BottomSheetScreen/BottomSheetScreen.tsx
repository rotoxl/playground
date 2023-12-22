import {
  SNAP_POINTS_DYNAMIC,
  SNAP_POINTS_MEDIUM_FULL_HEIGHT,
  bottomSheetModalRef,
} from '@app/modal/BottomSheetModal';
import { useCallback } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { LinkedInModalContent } from './components/LinkedInModalContent';
import { SignInModalContent } from './components/SignInModalContent';
import { mockReactNativeRole } from './mocks';

const { width } = Dimensions.get('window');

export const BottomSheetScreen = () => {
  const { styles } = useStyles(stylesheet);

  const Card = useCallback(
    ({
      title,
      text,
      onPress,
      testID,
    }: {
      title: string;
      text?: string;
      onPress: () => void;
      testID?: string;
    }) => (
      <Pressable onPress={onPress} style={styles.item} testID={testID}>
        <View>
          <Text style={styles.item_title}>{title}</Text>
          <Text style={styles.item_text}>{text}</Text>
        </View>
      </Pressable>
    ),
    [],
  );

  const handleOpenLinkedInModal = useCallback(() => {
    bottomSheetModalRef.current?.open({
      content: <LinkedInModalContent role={mockReactNativeRole} testID="linkedInModalContent" />,
      title: mockReactNativeRole.roleInfo.title,
      snapPoints: SNAP_POINTS_MEDIUM_FULL_HEIGHT,
    });
  }, []);

  const handleOpenSmallModal = useCallback(() => {
    bottomSheetModalRef.current?.open({
      content: <SignInModalContent />,
      snapPoints: SNAP_POINTS_DYNAMIC,
    });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Card
        title="Bottom Sheet"
        text="fixedHeight+fullScreen bottom sheet"
        testID="test1"
        onPress={handleOpenLinkedInModal}
      />
      <Card
        title="Bottom Sheet"
        text="Dynamic height bottom sheet, Sign in dialog"
        testID="test2"
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
