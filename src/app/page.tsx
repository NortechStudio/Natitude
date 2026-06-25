import React from 'react';
import { Compass, Zap, Shield, Bookmark, User, ArrowUpRight, Flame } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050506] text-[#f4f4f5] pb-24 font-sans selection:bg-[#ff1493] selection:text-black">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[350px] bg-gradient-to-b from-[#0f172a] via-[#050506] to-transparent -z-10 opacity-80" />
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-[#0f172a]/80 bg-[#050506]/70 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff1493] animate-pulse" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-[#ccff00]">.</span>
          </span>
        </div>
        <button className="text-xs font-semibold bg-[#0f172a] border border-[#ff1493]/30 text-[#f4f4f5] px-3 py-1.5 rounded-full flex items-center gap-1 active:scale-95 transition-transform">
          Live Status <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
        </button>
      </header>

      {/* Main Container */}
      <main className="max-w-md mx-auto px-5 pt-8 space-y-8">
        
        {/* Premium Hero Title */}
        <section className="space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#0f172a] px-3 py-1 rounded-full border border-zinc-800">
            <Flame className="w-3.5 h-3.5 text-[#ff1493]" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">Next-Gen Alpine System</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none">
            Explore Raw <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ccff00]">
              Wilderness.
            </span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-xs">
            A premium cyber-nature interface for tracking high-altitude coordinates, route data, and private expeditions.
          </p>
        </section>

        {/* High-Impact CTA Button */}
        <button className="w-full bg-[#ff1493] text-[#050506] font-black uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,20,147,0.25)] active:scale-[0.98] transition-transform duration-100">
          Initialize Expedition
          <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </button>

        {/* System Feeds / Track Cards */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">Active Modules</h2>
          
          <div className="space-y-3">
            {/* Core Card 1 */}
            <div className="group relative bg-[#0f172a] border border-zinc-800/60 p-5 rounded-2xl flex items-start justify-between hover:border-[#ff1493]/40 transition-colors">
              <div className="space-y-1">
                <h3 className="font-bold text-base flex items-center gap-2">
                  Primary Core Feed
                </h3>
                <p className="text-xs text-zinc-400">Queries and arrays telemetry posts.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20">
                READY
              </span>
            </div>

            {/* Core Card 2 */}
            <div className="group relative bg-[#0f172a] border border-zinc-800/60 p-5 rounded-2xl flex items-start justify-between hover:border-[#ccff00]/40 transition-colors">
              <div className="space-y-1">
                <h3 className="font-bold text-base">Discovery & Explore</h3>
                <p className="text-xs text-zinc-400">Search engine framework matrix node.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20">
                READY
              </span>
            </div>

            {/* Core Card 3 */}
            <div className="group relative bg-[#0f172a] border border-zinc-800/60 p-5 rounded-2xl flex items-start justify-between hover:border-[#ff1493]/40 transition-colors">
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#f4f4f5] group-hover:text-[#ff1493] transition-colors">The Clubhouse / Tribe</h3>
                <p className="text-xs text-zinc-400">Secure digital authorization perimeter wall.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ff1493]/10 text-[#ff1493] px-2 py-0.5 rounded border border-[#ff1493]/20">
                SECURE
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Floating Mobile Dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-[#050506]/80 backdrop-blur-lg border-t border-[#0f172a] px-6 py-4 flex justify-between items-center">
        <button className="flex flex-col items-center gap-1 text-[#ccff00]">
          <Zap className="w-5 h-5 stroke-[2.5]" />
          <span className="text-[10px] font-bold tracking-tight">Feed</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] transition-colors">
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] transition-colors">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] font-medium">Tribe</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] transition-colors">
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] font-medium">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>

    </div>
  );
}