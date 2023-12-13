/* istanbul ignore file */

import { ReactNode, createContext, useContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, Language } from './constants';
import enMessages from '../../locales/en.json';
import esMessages from '../../locales/es.json';

type ContextType = {
  locale: string;
  setLocale: (locale: Language) => void;
};

const I18NContext = createContext<ContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});

const messages = {
  [Language.EN]: enMessages,
  [Language.ES]: esMessages,
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const i18nValue = {
    locale,
    setLocale,
  };

  return (
    <I18NContext.Provider value={i18nValue}>
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={DEFAULT_LOCALE}>
        {children}
      </IntlProvider>
    </I18NContext.Provider>
  );
};

export const useI18nLocale = () => {
  return useContext(I18NContext);
};
