'use client';

import clsx from 'clsx';
import { ChangeEvent, ReactNode, useTransition } from 'react';
import { Locale, usePathname, useRouter, routing } from '@/i18n/routing';

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event) {
    const nextLocale = event.target.value;

    startTransition(() => {
      const segments = pathname.split('/');

      if (routing.locales.includes(segments[1])) {
        segments.splice(1, 1);
      }

      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative">
      <label
        className={clsx(
          'relative text-gray-400',
          isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
      >
        <p className="sr-only">{label}</p>
        <select
          className="inline-flex appearance-none bg-transparent pl-2 pr-6"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <span className="pointer-events-none absolute right-1 top-[-7px]">
          ⌄
        </span>
      </label>
    </div>
  );
}
