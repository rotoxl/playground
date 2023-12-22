import { SignInModalContent } from '@app/screens/BottomSheetScreen/components/SignInModalContent';
import { fireEvent, render } from '@testing-library/react-native';
import { AlertButton, Alert } from 'react-native';

const mockAlert = jest.fn();
jest
  .spyOn(Alert, 'alert')
  .mockImplementation((title: string, message?: string, buttons?: AlertButton[]) =>
    mockAlert(title, message, buttons),
  );

jest.mock('@app/ui/text/TextLink', () => ({
  TextLink: (p: any) => p.content,
}));

describe('SignInModalContent', () => {
  it('should render content', () => {
    const { getByText, getByTestId } = render(<SignInModalContent />);

    expect(getByText('signin.title')).toBeTruthy();
    expect(getByTestId('footer')).toBeTruthy();

    expect(getByTestId('signInGoogle')).toBeTruthy();
    expect(getByTestId('signInOthers')).toBeTruthy();

    expect(getByText('signin.disclaimer')).toBeTruthy();
  });

  it('should execute logic onPress', () => {
    const { getByTestId } = render(<SignInModalContent />);

    fireEvent.press(getByTestId('signInGoogle'));
    expect(mockAlert).toHaveBeenCalledWith('Button click', 'Continue with Google', [
      { text: 'OK' },
    ]);
  });
});
