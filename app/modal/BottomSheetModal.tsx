import { isJest } from '@app/testing/isJest';
import { useCustomSafeArea } from '@app/ui/layout/useCustomSafeArea';
import MIcon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  BottomSheetBackdrop,
  BottomSheetHandleProps,
  BottomSheetScrollView,
  BottomSheetModal as NativeBottomSheetModal,
} from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, {
  ReactNode,
  createRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type OpenModalHandler = {
  content: ReactNode;
  title?: string;
  snapPoints?: string[];
};
type LocalState = Pick<OpenModalHandler, 'content' | 'title'> & { snapPoints: string[] };

export type ModalHandler = {
  open: ({ content, snapPoints, title }: OpenModalHandler) => void;
  close: () => void;
};

export const bottomSheetModalRef = createRef<ModalHandler>();

export const SNAP_POINTS_DYNAMIC = ['CONTENT_HEIGHT'];
export const SNAP_POINTS_MEDIUM = ['65%'];
export const SNAP_POINTS_MEDIUM_FULL_HEIGHT = [...SNAP_POINTS_MEDIUM, '100%'];

export const BottomSheetModal = () => {
  const [modalData, setModalData] = useState<LocalState>({
    content: <></>,
    title: undefined,
    snapPoints: SNAP_POINTS_MEDIUM,
  });
  const [index, setIndex] = useState(0);
  const internalRef = useRef<NativeBottomSheetModal>(null);

  const { styles, theme } = useStyles(stylesheet);
  const { top } = useCustomSafeArea();

  useImperativeHandle(
    bottomSheetModalRef,
    () => ({
      open: ({ content, snapPoints = SNAP_POINTS_MEDIUM, title }: OpenModalHandler) => {
        setModalData({ content, snapPoints, title });
        setIndex(0);
        internalRef.current?.present?.();
      },
      close: () => {
        internalRef.current?.close?.();
      },
    }),
    [],
  );

  const isIndexFullScreen = (index: number) => {
    return modalData.snapPoints[index] === '100%';
  };

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.7}
        enableTouchThrough={false}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        style={styles.backDrop}
      />
    ),
    [],
  );

  const renderHandleOrToolbar = ({ animatedIndex }: BottomSheetHandleProps) => {
    return isIndexFullScreen(index) ? (
      <View style={[styles.toolbar, { marginTop: top }]}>
        <Pressable
          onPress={() => internalRef.current?.close?.()}
          style={styles.toolbarCloseButton}
          testID="buttonClose">
          <MIcon name="close" size={24} color={theme.colors.typography_terciary} />
        </Pressable>
        <Text style={styles.toolbarTitle}>{modalData.title}</Text>
      </View>
    ) : (
      <>
        <View style={styles.handle} />
        <Text style={styles.modalContentTitle} numberOfLines={1}>
          {modalData.title}
        </Text>
      </>
    );
  };

  const isContentDynamic = modalData.snapPoints?.includes('CONTENT_HEIGHT');
  /* istanbul ignore else */
  if (isJest) {
    const lastIndex = modalData.snapPoints?.length - 1;
    // @ts-ignore
    const handle = renderHandleOrToolbar({ animatedIndex: lastIndex });
    // @ts-ignore
    const backdrop = renderBackdrop({ animatedIndex: lastIndex });
    return (
      <View>
        {handle}
        {backdrop}
        {modalData.content}
      </View>
    );
  }
  /* istanbul ignore next */
  return (
    <NativeBottomSheetModal
      ref={internalRef}
      index={index}
      onChange={setIndex}
      snapPoints={isContentDynamic ? [] : modalData.snapPoints}
      enableDynamicSizing={isContentDynamic}
      backgroundStyle={styles.modalBackground}
      backdropComponent={renderBackdrop}
      handleComponent={renderHandleOrToolbar}
      style={styles.modal}
      onAnimate={(_fromIndex, toIndex) => setIndex(toIndex)}>
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        {modalData.content}
      </BottomSheetScrollView>
    </NativeBottomSheetModal>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.black,
  },
  modal: {
    flex: 1,
  },
  modalBackground: {
    backgroundColor: theme.colors.window,
  },
  handle: {
    backgroundColor: theme.colors.typography_terciary,
    height: 4,
    width: 30,
    borderRadius: theme.margins.xl,
    alignSelf: 'center',
    marginVertical: theme.margins.lg,
  },
  toolbar: {
    height: 38,
    width: '100%',

    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomColor: theme.colors.rhino,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: theme.margins.sm,
  },
  toolbarCloseButton: {
    position: 'absolute',
    left: theme.margins.lg,
    paddingBottom: theme.margins.sm,
  },
  toolbarTitle: {
    ...theme.fonts.headline3,
    color: theme.colors.typography_main,
    paddingHorizontal: theme.margins.lg,
  },

  modalContentTitle: {
    ...theme.fonts.headline2,
    color: theme.colors.typography_main,
    paddingHorizontal: theme.margins.lg,
    borderBottomColor: theme.colors.window,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
}));
