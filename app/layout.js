"use client";
import './globals.css'
import Provider from '@/components/Provider';
import AppBar from '@/components/AppBar';

export default function RootLayout({ children } ) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <AppBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}