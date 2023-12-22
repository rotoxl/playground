import isEmpty from 'lodash/isEmpty';

const illegals = /[^a-z0-9-]/gi;

export const buildTestID = (testID: string | undefined, postfix: string | undefined) => {
  if (testID === undefined || isEmpty(testID)) {
    return undefined;
  }

  const result = postfix === undefined ? testID : `${testID}-${postfix}`;
  return result.replace(illegals, '_');
};
