import { FormattedMessage } from 'react-intl';
import { Text } from 'react-native';

export const getSkillList = (list: string[], limit = 2) => {
  const commaSeparatedList = list.slice(0, limit).join(', ');
  const extraSkills = list.length - limit;

  return (
    <Text>
      {extraSkills > 0 ? (
        <>
          {commaSeparatedList}
          {', '}
          <FormattedMessage id="role.skills.more" values={{ number: extraSkills }} />
        </>
      ) : (
        commaSeparatedList
      )}
    </Text>
  );
};
