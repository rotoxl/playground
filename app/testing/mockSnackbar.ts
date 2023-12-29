const mockShowSnackbar = jest.fn();

jest.mock('@app/snackbar/useSnackbar', () => ({
  useSnackbar: () => ({
    showSnackbar: mockShowSnackbar,
    showSnackbarOkButton: mockShowSnackbar,
  }),
}));

export const mockUseSnackbar = () => {
  return { mockShowSnackbar };
};
