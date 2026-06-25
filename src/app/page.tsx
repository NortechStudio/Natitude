import React from 'react';
import { Compass, Zap, Shield, Bookmark, User, ArrowUpRight, Flame } from 'lucide-react';

export default function Home() {
  return (
    /* 
      MASTER WRAPPER: 
      - min-h-screen ensures the background color stretches full vertical height.
      - w-full ensures it stretches completely edge-to-edge on any laptop/PC monitor.
      - pb-24 handles padding on mobile for the floating bar; md:pb-0 removes it for desktop.
    */
    <div className="min-h-screen w-full bg-[#050506] text-[#f4f4f5] pb-24 md:pb-0 font-sans antialiased relative overflow-x-hidden selection:bg-[#ff1493] selection:text-black">
      
      {/* 
        AMBIENT GLOW GRAPHIC: 
        - Maximized using max-w-none so it floods the desktop viewport beautifully with an immersive backdrop gradient.
      */}
      <div className="absolute top-0 left-0 right-0 w-full h-[600px] bg-gradient-to-b from-[#0f172a]/40 via-transparent to-transparent -z-10 pointer-events-none max-w-none" />
      
      {/* 
        UNIVERSAL HEADER: 
        - px-4 on mobile scale, expanding outwards up to px-12 on large screens.
        - w-full keeps the navigation boundary matching the browser edges.
      */}
      <header className="sticky top-0 z-50 w-full border-b border-[#0f172a]/80 bg-[#050506]/80 backdrop-blur-md px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        
        {/* LOGO ASSEMBLY */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff1493] animate-pulse" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-[#ccff00]">.</span>
          </span>
        </div>
        
        {/* DESKTOP DESK NAVIGATION: Hidden entirely on mobile screens, shown from medium devices up */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-bold uppercase tracking-wider text-zinc-400">
          <a href="#" className="text-[#ccff00] flex items-center gap-1.5 transition-opacity hover:opacity-80">
            <Zap className="w-4 h-4 stroke-[2.5]" /> Feed
          </a>
          <a href="#" className="hover:text-[#ff1493] transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> Explore
          </a>
          <a href="#" className="hover:text-[#ff1493] transition-colors flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Tribe
          </a>
          <a href="#" className="hover:text-[#ff1493] transition-colors flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" /> Saved
          </a>
        </nav>

        {/* SYSTEM ACTIONS PANEL */}
        <div className="flex items-center gap-4">
          <button className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#0f172a] border border-[#ff1493]/30 text-[#f4f4f5] px-3 py-1.5 rounded-full flex items-center gap-1.5">
            System Active <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
          </button>
          
          {/* USER DOCK: Desktop shortcut button */}
          <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#ff1493] transition-colors cursor-pointer">
            <User className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 
        RESPONSIVE CONTENT MAIN GRID:
        - Uses container layout rules but drops max-w-md completely.
        - Spans 1 full column on mobile, splitting into 12 columns (`md:grid-cols-12`) on wide displays.
        - Fluid wide-screen limits using max-w-none or max-w-7xl ensures a modern, spacious feel.
      */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* 
          LEFT COMPONENT COLUMN (Hero Block):
          - Consumes 5 structural columns on desktop layout (`md:col-span-5`).
          - Becomes sticky on desktop scrolls (`md:sticky md:top-28`) so it tracks elegantly alongside the right grid.
        */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-28">
          
          {/* PROTOCOL TAG */}
          <div className="inline-flex items-center gap-1.5 bg-[#0f172a] px-3 py-1 rounded-full border border-zinc-800">
            <Flame className="w-3.5 h-3.5 text-[#ff1493]" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">Next-Gen Alpine System</span>
          </div>
          
          {/* BRAND TEXT HEADINGS */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
            Explore Raw <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ccff00]">
              Wilderness.
            </span>
          </h1>
          
          <p className="text-sm lg:text-base text-zinc-400 max-w-md leading-relaxed">
            A premium cyber-nature interface for tracking high-altitude coordinates, route data, and private expeditions.
          </p>

          {/* HIGH-IMPACT PINK NEON CTA */}
          <button className="w-full sm:w-auto sm:px-8 bg-[#ff1493] text-[#050506] font-black uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,20,147,0.15)] active:scale-[0.98] transition-all cursor-pointer hover:brightness-110">
            Initialize Expedition
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </button>
        </section>

        {/* 
          RIGHT COMPONENT COLUMN (Dashboard System Modules):
          - Consumes remaining 7 structural columns on desktop (`md:col-span-7`).
          - Spends layout columns wisely by dividing sub-cards on tablets (`sm:grid-cols-2`) and stacking on laptops.
        */}
        <section className="space-y-4 md:col-span-7 w-full">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#ccff00]">Active Modules</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full">
            
            {/* MODULE ENTRY CARD 1 */}
            <div className="group bg-[#0f172a] border border-zinc-800/60 p-6 rounded-2xl flex items-start justify-between hover:border-[#ff1493]/40 transition-all duration-200">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">Primary Core Feed</h3>
                <p className="text-xs text-zinc-400">Queries and arrays telemetry posts.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20 shrink-0">
                READY
              </span>
            </div>

            {/* MODULE ENTRY CARD 2 */}
            <div className="group bg-[#0f172a] border border-zinc-800/60 p-6 rounded-2xl flex items-start justify-between hover:border-[#ccff00]/40 transition-all duration-200">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-zinc-100 group-hover:text-white transition-colors">Discovery & Explore</h3>
                <p className="text-xs text-zinc-400">Search engine framework matrix node.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20 shrink-0">
                READY
              </span>
            </div>

            {/* MODULE ENTRY CARD 3: Spans multi-columns on small layouts, drops to baseline on laptop grids */}
            <div className="group bg-[#0f172a] border border-zinc-800/60 p-6 rounded-2xl flex items-start justify-between hover:border-[#ff1493]/40 transition-all duration-200 sm:col-span-2 md:col-span-1">
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-zinc-100 group-hover:text-[#ff1493] transition-colors">The Clubhouse / Tribe</h3>
                <p className="text-xs text-zinc-400">Secure digital authorization perimeter wall.</p>
              </div>
              <span className="text-[10px] font-mono font-bold bg-[#ff1493]/10 text-[#ff1493] px-2 py-0.5 rounded border border-[#ff1493]/20 shrink-0">
                SECURE
              </span>
            </div>

          </div>
        </section>

      </main>

      {/* 
        TOUCH TARGET MOBILE FLOATING BAR:
        - Fully hidden on desktop via `md:hidden`.
        - Fixed tracking on smartphone screens for easy thumbs-reach interaction layout.
      */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050506]/90 backdrop-blur-lg border-t border-[#0f172a] px-6 py-4 flex justify-between items-center">
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