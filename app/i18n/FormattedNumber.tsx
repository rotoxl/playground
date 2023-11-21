import { FormattedNumber as FormattedNumberRN } from 'react-intl';

type Props = {
  value: number;
  minimumFractionDigits?: number;
};

export const FormattedNumber = ({ value, minimumFractionDigits }: Props) => {
  const isInteger = Number.isInteger(value);
  const fractionDigits = () => {
    if (minimumFractionDigits === undefined) {
      return isInteger ? 0 : 2;
    } else {
      return minimumFractionDigits;
    }
  };

  return <FormattedNumberRN value={value} minimumFractionDigits={fractionDigits()} />;
};
