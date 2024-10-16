import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ernesto Avilés',
  description: 'Frontend Developer Portfolio',
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
