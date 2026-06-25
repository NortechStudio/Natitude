import React from 'react';
import './globals.css'; // Your global Tailwind styles reference

// Thoroughly documented root layout frame
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#050506] text-[#f4f4f5] antialiased">
      {/* 
        The body tag is set to w-full and min-h-screen so the application 
        can expand fully to fill any screen size (laptop, monitor, or mobile phone).
      */}
      <body className="min-h-screen w-full m-0 p-0 overflow-x-hidden">
        
        {/* 
          REMOVED max-w-md and mx-auto. 
          Now, the content inside {children} has complete freedom to expand full-width on desktop 
          or snap into a grid layout as defined inside individual page components.
        */}
        {children}

      </body>
    </html>
  );
} // <--- This was the missing closing brace causing the build error!