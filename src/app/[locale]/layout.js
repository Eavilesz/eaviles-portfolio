import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ernesto Avilés',
  description: 'Frontend Developer Portfolio',
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-blue-900 via-teal-800 to-green-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
