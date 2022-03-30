import { Currency } from '../types/types';

export const classNames = (
  ...classNames: Array<string | undefined>
): string => {
  return classNames
    .filter((className) => !!className)
    .reduce((prev, curr) => {
      return (prev as string).concat(` ${curr}`);
    }, '') as string;
};

export function numberSeparator(numb: number) {
  return new Intl.NumberFormat('en-US').format(numb);
}

export const currencyFormat = (
  number: number,
  locale: keyof typeof Currency
) => {
  return new Intl.NumberFormat(Currency[locale], {
    style: 'currency',
    currency: locale,
    maximumFractionDigits: 4,
  }).format(number);
};
