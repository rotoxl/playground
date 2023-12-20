import { Text } from 'react-native';

type TextLinkProps = {
  content: any;
  onPress?: () => void;
};

export const TextLink = ({ content, onPress }: TextLinkProps) => {
  return (
    <Text onPress={onPress} style={{ textDecorationLine: 'underline' }}>
      {content}
    </Text>
  );
};
