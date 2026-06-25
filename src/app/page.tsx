import React from 'react';
import { Compass, Zap, Shield, Bookmark, User, ArrowUpRight, Flame, Layers, Radio, Sliders } from 'lucide-react';

export default function Home() {
  return (
    /* 
      BASE INTERFACE CANVAS:
      - Clean midnight background tone.
      - Smooth anti-aliased font rendering for high-DPI retina displays.
    */
    <div className="min-h-screen w-full bg-[#050506] text-[#f4f4f5] pb-24 md:pb-12 font-sans antialiased relative overflow-x-hidden selection:bg-[#ff1493] selection:text-black">
      
      {/* 
        PREMIUM BACKGROUND GRAPHIC LAYER:
        - Creates a rich atmospheric radial glow pouring from the top down.
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#0f172a]/50 via-[#050506]/10 to-transparent -z-10 pointer-events-none" />

      {/* 
        NAVIGATION BAR COMPONENT:
        - Glassmorphic backdrop blurring layer overlaying structural canvas elements.
      */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0f172a]/80 bg-[#050506]/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        
        {/* LOGO ENGINE */}
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-3 rounded-full bg-[#ff1493] shadow-[0_0_12px_#ff1493] animate-pulse" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-[#ccff00]">.</span>
          </span>
        </div>
        
        {/* DESKTOP WORKSPACE NAVIGATION BAR MARGIN */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#" className="text-[#ccff00] flex items-center gap-2 border-b-2 border-[#ccff00] pb-1 transition-all">
            <Zap className="w-4 h-4 stroke-[2.5]" /> Live Feed
          </a>
          <a href="#" className="hover:text-[#ff1493] flex items-center gap-2 pb-1 transition-colors">
            <Compass className="w-4 h-4" /> Discovery
          </a>
          <a href="#" className="hover:text-[#ff1493] flex items-center gap-2 pb-1 transition-colors">
            <Shield className="w-4 h-4" /> Member Clan
          </a>
          <a href="#" className="hover:text-[#ff1493] flex items-center gap-2 pb-1 transition-colors">
            <Bookmark className="w-4 h-4" /> Bookmarks
          </a>
        </nav>

        {/* SYSTEM CONNECTIVITY BLOCK */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 bg-[#0f172a] border border-zinc-800/80 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
            Node-Alpha Connected
          </div>
          <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#ff1493] transition-all cursor-pointer hover:border-zinc-700 active:scale-95">
            <User className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 
        EXPANSIVE DASHBOARD INTERFACE LAYOUT:
        - Adapts from a single tight column frame on mobile directly into a multi-panel workspace canvas on screens over 768px.
      */}
      <main className="w-full max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* 
          PANEL A: BRAND INTEL & CTA INTERACTION ENGINE (5-Columns on wide viewports)
        */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-28">
          
          <div className="inline-flex items-center gap-2 bg-[#0f172a] px-3 py-1 rounded-full border border-zinc-800">
            <Flame className="w-3.5 h-3.5 text-[#ff1493]" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">Next-Gen Alpine System</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.9] uppercase italic">
            Explore Raw <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] via-[#e11d48] to-[#ccff00]">
              Wilderness.
            </span>
          </h1>
          
          <p className="text-sm lg:text-base text-zinc-400 max-w-sm leading-relaxed">
            A premium cyber-nature interface built to route telemetry variables, satellite coordinates, and private tactical expeditions.
          </p>

          {/* HIGH-IMPACT VIBRANT NEON TRIGGER ACTION */}
          <button className="w-full bg-[#ff1493] text-[#050506] font-black uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,20,147,0.2)] hover:shadow-[0_4px_30px_rgba(255,20,147,0.4)] active:scale-[0.98] transition-all duration-150 cursor-pointer group">
            <span>Initialize Expedition</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </section>

        {/* 
          PANEL B: DATA FEED MANAGEMENT & SYSTEM CONTROL NODE (7-Columns on wide viewports)
        */}
        <section className="space-y-6 md:col-span-7 w-full">
          
          {/* CONTROL BAR SECTION TITLE */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] flex items-center gap-2">
              <Layers className="w-4 h-4 stroke-[2]" /> Operational Array Modules
            </h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">Telemetry Set: 03</span>
          </div>
          
          {/* TELEMETRY CARD HUB WRACTION FRAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full">
            
            {/* COMPONENT ELEMENT CARD: 01 */}
            <div className="group bg-[#0f172a] border border-zinc-800/40 p-6 rounded-2xl flex flex-col justify-between gap-6 hover:border-[#ff1493]/30 hover:bg-[#0f172a]/80 transition-all duration-200 shadow-xl cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#ccff00] animate-pulse" />
                    <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">Primary Core Feed</h3>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-xs">Stream real-time environmental array coordinates, telemetry feeds, and live tracking map updates.</p>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20 tracking-wider">
                  ACTIVE
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-medium flex items-center gap-1 group-hover:text-[#ccff00] transition-colors">
                Open live telemetry <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* COMPONENT ELEMENT CARD: 02 */}
            <div className="group bg-[#0f172a] border border-zinc-800/40 p-6 rounded-2xl flex flex-col justify-between gap-6 hover:border-[#ccff00]/30 hover:bg-[#0f172a]/80 transition-all duration-200 shadow-xl cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-zinc-400 group-hover:text-[#ccff00] transition-colors" />
                    <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">Discovery & Explore</h3>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-xs">Query systemic elevation data, route maps, data sets, and weather array matrix configurations.</p>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20 tracking-wider">
                  STANDBY
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-medium flex items-center gap-1 group-hover:text-[#ccff00] transition-colors">
                Initialize matrix query <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* COMPONENT ELEMENT CARD: 03 */}
            <div className="group bg-[#0f172a] border border-zinc-800/40 p-6 rounded-2xl flex flex-col justify-between gap-6 hover:border-[#ff1493]/30 hover:bg-[#0f172a]/80 transition-all duration-200 shadow-xl cursor-pointer sm:col-span-2 md:col-span-1">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-zinc-400 group-hover:text-[#ff1493] transition-colors" />
                    <h3 className="font-bold text-lg text-zinc-100 group-hover:text-[#ff1493] transition-colors">The Clubhouse / Tribe</h3>
                  </div>
                  <p className="text-xs text-zinc-400 max-w-md">Secure identity access perimeter wall managing multi-user secure keys, permissions, and group communications.</p>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#ff1493]/10 text-[#ff1493] px-2 py-0.5 rounded border border-[#ff1493]/20 tracking-wider">
                  ENCRYPTED
                </span>
              </div>
              <div className="text-xs text-zinc-500 font-medium flex items-center gap-1 group-hover:text-[#ff1493] transition-colors">
                Authenticate secure session <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* 
        ERGONOMIC SMARTPHONE FLOATING NAVIGATION SYSTEM:
        - Only activates on small phone viewports; completely non-rendering on desktop layouts.
      */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050506]/90 backdrop-blur-xl border-t border-[#0f172a] px-6 py-4 flex justify-between items-center">
        <button className="flex flex-col items-center gap-1 text-[#ccff00] active:scale-90 transition-transform">
          <Zap className="w-5 h-5 stroke-[2.5]" />
          <span className="text-[10px] font-bold tracking-tight">Feed</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] active:scale-90 transition-all">
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Explore</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] active:scale-90 transition-all">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] font-medium">Tribe</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] active:scale-90 transition-all">
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] font-medium">Saved</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-500 hover:text-[#ff1493] active:scale-90 transition-all">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>

    </div>
  );
}