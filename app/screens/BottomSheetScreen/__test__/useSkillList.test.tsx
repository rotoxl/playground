import { renderHook } from '@testing-library/react-native';

import { useSkillList } from '../useSkillList';

const mockFormatMessage = jest
  .fn()
  .mockImplementation(({ descriptor, values }: { descriptor: any; values: any }) => {
    return `+${values.number} more`;
  });

jest.mock('react-intl', () => ({
  useIntl: () => ({
    formatMessage: (descriptor: any, values: any) => mockFormatMessage({ descriptor, values }),
  }),
}));

describe('useSkillList', () => {
  const testScenarios: [string[], string][] = [
    [[], ''],
    [['skill1'], 'skill1'],
    [['skill1', 'skill2'], 'skill1, skill2'],
    [['skill1', 'skill2', 'skill3'], 'skill1, skill2, +1 more'],
    [['skill1', 'skill2', 'skill3', 'skill4'], 'skill1, skill2, +2 more'],
  ];

  it.each(testScenarios)('returns correct skill list for %s', (input, expected) => {
    const hook = renderHook(() => useSkillList());
    expect(hook.result.current.getSkillList(input)).toBe(expected);
  });
});
