import { FormattedNumber } from 'react-intl';

type Props = {
  value: number;
  currencyCode: string;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  minimumFractionDigits?: number;
};

export const FormattedMoney = ({
  value,
  currencyCode,
  currencyDisplay = 'narrowSymbol',
  minimumFractionDigits = 2,
}: Props) => {
  return (
    <FormattedNumber
      value={value}
      currency={currencyCode}
      style="currency"
      currencyDisplay={currencyDisplay}
      minimumFractionDigits={minimumFractionDigits}
    />
  );
};
