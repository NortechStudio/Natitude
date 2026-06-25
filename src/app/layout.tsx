import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import './globals.css'; // Your global Tailwind styles reference

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100 antialiased">
      <body>
        {/* Main Application Container Frame */}
        <main className="max-w-md mx-auto min-h-screen px-4 pt-4 pb-24">
          {children}
        </main>

        {/* Persistent Bottom Ergonomic Navigation Control System */}
        <NavigationBar />
      </body>
    </html>
  );
}