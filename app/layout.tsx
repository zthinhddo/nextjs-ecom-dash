import { CustomDrawer, CustomAppBar } from '@/shared';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import * as React from 'react';
import { NavigationMenuProvider } from './context';
import './globals.css';
import { Box, CssBaseline } from '@mui/material';
import MainComponenet from '@/shared/components/MainComponent';

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
      <body className={manRope.className}>
        <NavigationMenuProvider>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <CustomAppBar />
            <CustomDrawer />
          </Box>
          <MainComponenet>
            {children}
          </MainComponenet>
        </NavigationMenuProvider>
      </body>
    </html>
  );
}
