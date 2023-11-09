import enMessages from '../../locales/en.json';

export enum Language {
  EN = 'en',
  ES = 'es',
}
export const DEFAULT_LOCALE = Language.EN;

export enum Currency {
  USD = 'USD',
}
export const DEFAULT_CURRENCY = Currency.USD;

export type TranslationId = keyof typeof enMessages;
