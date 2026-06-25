import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Natitude Operational Portal',
  description: 'Premium High-Altitude Telemetry Interface',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-black text-quartz-pure antialiased selection:bg-pink-neon selection:text-slate-black">
      {/* This is the global structural frame. 
        It stays completely clean so that your individual pages can render inside it.
      */}
      <body className="min-h-screen w-full m-0 p-0 overflow-x-hidden bg-slate-black">
        {children}
      </body>
    </html>
  );
}