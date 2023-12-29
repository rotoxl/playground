import { useCustomSafeArea } from '@app/ui/layout/useCustomSafeArea';
import { renderHook } from '@testing-library/react-native';

const mockMarginXL = 20;
const mockSafeAreaIPhoneSE = { bottom: 0, top: 0 };
const mockSafeAreaIPhone16 = { bottom: 40, top: 10 };

let mockSafeArea = mockSafeAreaIPhoneSE;

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => mockSafeArea,
}));

jest.mock('react-native-unistyles', () => ({
  useStyles: () => ({ theme: { margins: { xl: mockMarginXL } } }),
}));

describe('useCustomSafeArea', () => {
  it('should return custom margins when bottom is 0', () => {
    mockSafeArea = mockSafeAreaIPhoneSE;
    const { result } = renderHook(() => useCustomSafeArea());
    expect(result.current).toEqual({ bottom: mockMarginXL, top: mockMarginXL });
  });

  it('should return safe area insets when bottom is not 0', () => {
    mockSafeArea = mockSafeAreaIPhone16;
    const { result } = renderHook(() => useCustomSafeArea());
    expect(result.current).toEqual({ bottom: 40, top: 10 });
  });
});
