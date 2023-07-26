import './globals.css';
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Images Library Preview',
  description: 'A simple demo'
}

const manRope = Manrope({
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`m-0 p-0 box-border ${manRope.className}`}>
        {children}
      </body>
    </html>
  );
}
