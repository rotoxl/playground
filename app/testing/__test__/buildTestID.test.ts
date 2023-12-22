import { buildTestID } from '../buildTestID';

describe('buildTestID', () => {
  describe('success cases', () => {
    const scenarios: [Parameters<typeof buildTestID>, ReturnType<typeof buildTestID>][] = [
      [['', undefined], undefined],
      [[undefined, 'postfix'], undefined],
      [['string', undefined], 'string'],
      [['string', 'postfix'], 'string-postfix'],
      [['string', 'postfix-index'], 'string-postfix-index'],
      [['UpAndDown', 'Down123Up'], 'UpAndDown-Down123Up'],
      [['Wise', '(former Transferwise)'], 'Wise-_former_Transferwise_'],
      [['string', 'postfix_index'], 'string-postfix_index'],
      [['string?asd', 'postfix'], 'string_asd-postfix'],
      [['string space', 'asd'], 'string_space-asd'],
    ];

    it.each(scenarios)('parameters "%s", should result into "%s"', (options, result) => {
      expect(buildTestID(...options)).toBe(result);
    });
  });
});
