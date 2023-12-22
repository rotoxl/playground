import { TestProps } from '@app/testing/testProps';
import { Text } from 'react-native';

type TextLinkProps = {
  content: any;
  onPress?: () => void;
} & TestProps;

export const TextLink = ({ content, onPress, testID }: TextLinkProps) => {
  return (
    <Text onPress={onPress} style={{ textDecorationLine: 'underline' }} testID={testID}>
      {content}
    </Text>
  );
};
