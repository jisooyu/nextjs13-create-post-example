"use client";
import './globals.css'
import Provider from '@/components/Provider';
import AppBar from '@/components/AppBar';

export default function RootLayout({ children } ) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AppBar />
          <div className={"h-screen "}>{children}</div>
        </Provider>
      </body>
    </html>
  );
}