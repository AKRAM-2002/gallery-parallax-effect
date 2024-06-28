import type { Metadata } from "next";
import { Manrope }from 'next/font/google'

import "./globals.css";


export const metadata: Metadata = {
  title: 'My Gallery Website',
  description: '',
}

const font = Manrope(
  {
    subsets: ['latin'],
    weight: ['400', '500', '600']
  }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
