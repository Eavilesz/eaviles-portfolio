import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherselect';
import { routing } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => {
        return (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        );
      })}
    </LocaleSwitcherSelect>
  );
}
