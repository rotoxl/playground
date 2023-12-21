import { SignInModalContent } from '@app/screens/BottomSheetScreen/components/SignInModalContent';
import { render } from '@testing-library/react-native';

describe('SignInModalContent', () => {
  it('should render content', () => {
    const { getByText, getByTestId } = render(<SignInModalContent />);

    expect(getByText('signin.title')).toBeTruthy();
    expect(getByTestId('footer')).toBeTruthy();

    expect(getByTestId('signInGoogle')).toBeTruthy();
    expect(getByTestId('signInOthers')).toBeTruthy();

    expect(getByText('signin.disclaimer')).toBeTruthy();
  });
});
