import isEmpty from 'lodash/isEmpty';

const illegals = /[^a-z0-9-]/gi;

export const buildTestID = (testID: string | undefined, postfix: string | undefined) => {
  if (isEmpty(testID)) {
    return undefined;
  }

  const result = postfix === undefined ? testID : `${testID}-${postfix}`;
  if (result === undefined) {
    return undefined;
  }

  return result.replace(illegals, '_');
};
