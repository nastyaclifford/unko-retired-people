import type { Metadata } from "next";
import { Inter, Montserrat } from 'next/font/google';
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';


const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Unco Retired People",
  description: "Unco Retired People Project",
  icons: {
    icon: '/favicon.svg', 
  },
};

type Props = {
  children: React.ReactNode;
};


export default async function RootLayout({children}: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className={`${montserrat.className} ${inter.className}`}>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
