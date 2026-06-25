import React from 'react';
import Link from 'next/link';
import './globals.css';
import { Compass, Zap, Shield, Bookmark, User } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#050506] text-[#f4f4f5] antialiased">
      <body className="min-h-screen w-full m-0 p-0 overflow-x-hidden pb-24 md:pb-0">
        
        {/* GLOBAL HEADER SYSTEM: Static edge-to-edge across all sub-tabs */}
        <header className="sticky top-0 z-50 w-full border-b border-[#0f172a]/80 bg-[#050506]/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none no-underline text-inherit">
            <div className="w-3 h-3 rounded-full bg-[#ff1493] shadow-[0_0_12px_#ff1493] animate-pulse" />
            <span className="text-xl font-black tracking-tighter uppercase italic">
              NATITUDE<span className="text-[#ccff00]">.</span>
            </span>
          </Link>
          
          {/* DESKTOP ROUTING: Updates path urls seamlessly */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-[#ccff00] flex items-center gap-2 transition-colors">
              <Zap className="w-4 h-4 stroke-[2.5]" /> Live Feed
            </Link>
            <Link href="/discovery" className="hover:text-[#ff1493] flex items-center gap-2 transition-colors">
              <Compass className="w-4 h-4" /> Discovery
            </Link>
            <Link href="/clan" className="hover:text-[#ff1493] flex items-center gap-2 transition-colors">
              <Shield className="w-4 h-4" /> Member Clan
            </Link>
            <Link href="/bookmarks" className="hover:text-[#ff1493] flex items-center gap-2 transition-colors">
              <Bookmark className="w-4 h-4" /> Bookmarks
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-2 bg-[#0f172a] border border-zinc-800/80 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
              Core Node Online
            </div>
            <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#ff1493] transition-all cursor-pointer">
              <User className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* ACTIVE TAB VIEWS INJECTED HERE */}
        {children}

        {/* MOBILE FLOATING NAV BAR: Sticky fixed thumb targets for mobile screens */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050506]/90 backdrop-blur-xl border-t border-[#0f172a] px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex flex-col items-center gap-1 text-[#ccff00]">
            <Zap className="w-5 h-5 stroke-[2.5]" />
            <span className="text-[10px] font-bold tracking-tight">Feed</span>
          </Link>
          <Link href="/discovery" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493]">
            <Compass className="w-5 h-5" />
            <span className="text-[10px] font-medium">Explore</span>
          </Link>
          <Link href="/clan" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493]">
            <Shield className="w-5 h-5" />
            <span className="text-[10px] font-medium">Clan</span>
          </Link>
          <Link href="/bookmarks" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493]">
            <Bookmark className="w-5 h-5" />
            <span className="text-[10px] font-medium">Saved</span>
          </Link>
        </nav>

      </body>
    </html>
  );
}