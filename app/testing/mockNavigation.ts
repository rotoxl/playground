const mockNavigate = jest.fn();
const mockGoback = jest.fn();
const mockReset = jest.fn();
const mockDispatch = jest.fn();
const mockStackActionsPush = jest.fn();
const mockReplace = jest.fn();
const mockStackActions = {
  push: mockStackActionsPush,
};

let mockParams = {};
const mockUseRoute = () => ({
  params: mockParams,
});

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
    goBack: mockGoback,
    reset: mockReset,
    dispatch: mockDispatch,
    replace: mockReplace,
  }),
  useRoute: mockUseRoute,
  useFocusEffect: jest.fn(),
  useIsFocused: jest.fn(),
  StackActions: mockStackActions,
}));

const mockSetRouteParams = (newParams: object) => {
  mockParams = newParams;
};

export const mockNavigation = () => {
  return {
    mockNavigate,
    mockGoback,
    mockReset,
    mockSetRouteParams,
    mockDispatch,
    mockStackActionsPush,
    mockReplace,
  };
};
