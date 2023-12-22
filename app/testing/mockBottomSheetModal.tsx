/* istanbul ignore file */

const mockOpenModal = jest.fn();
const mockCloseModal = jest.fn();

jest.mock('@app/modal/BottomSheetModal', () => {
  const { SNAP_POINTS_DYNAMIC, SNAP_POINTS_MEDIUM_FULL_HEIGHT } = jest.requireActual(
    '@app/modal/BottomSheetModal',
  );
  return {
    SNAP_POINTS_DYNAMIC,
    SNAP_POINTS_MEDIUM_FULL_HEIGHT,
    bottomSheetModalRef: {
      current: {
        open: (params: any) => mockOpenModal(params),
        close: () => mockCloseModal(),
      },
    },
  };
});

export const mockBottomSheetModal = () => {
  return {
    mockOpenModal,
    mockCloseModal,
  };
};
