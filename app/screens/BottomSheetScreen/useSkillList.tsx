import { useIntl } from 'react-intl';

export const useSkillList = () => {
  const intl = useIntl();

  const getSkillList = (list: string[], limit = 2) => {
    const commaSeparatedList = list.slice(0, limit).join(', ');
    const extraSkills = list.length - limit;

    const more = intl.formatMessage(
      {
        id: 'role.skills.more',
      },
      { number: extraSkills },
    );

    return extraSkills > 0 ? `${commaSeparatedList}, ${more}` : commaSeparatedList;
  };
  return { getSkillList };
};
