import { Platform } from 'react-native';

export interface TestProps {
  testID?: string;
}

export const getTestProps = ({ testID }: TestProps) => {
  if (!testID) {
    return {};
  }

  if (Platform.OS === 'ios') {
    return {
      testID,
      accessible: false,
    };
  }

  return {
    accessible: true,
    accessibilityLabel: testID,
  };
};
