"use client";

import React from 'react';
import { 
  ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2, 
  MapPin, Activity, ShieldAlert, SlidersHorizontal, Image, Wifi,
  Compass, Shield, Bookmark, User
} from 'lucide-react';

export default function LiveFeedTab() {
  return (
    <div className="w-full min-h-screen bg-slate-black text-quartz-pure pb-24 md:pb-12 relative font-sans antialiased">
      
      {/* GLOBAL HEADER INNER-FRAME */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-slate-black/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-3 rounded-full bg-pink-neon shadow-[0_0_12px_#ff1493]" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-electric-moss">.</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-quartz-muted">
          <button type="button" className="text-electric-moss flex items-center gap-2 border-b-2 border-electric-moss pb-1 cursor-pointer bg-transparent">
            Live Feed
          </button>
          <button type="button" className="hover:text-pink-neon flex items-center gap-2 pb-1 transition-colors cursor-pointer bg-transparent">
            <Compass className="w-4 h-4" /> Discovery
          </button>
          <button type="button" className="hover:text-pink-neon flex items-center gap-2 pb-1 transition-colors cursor-pointer bg-transparent">
            <Shield className="w-4 h-4" /> Member Clan
          </button>
          <button type="button" className="hover:text-pink-neon flex items-center gap-2 pb-1 transition-colors cursor-pointer bg-transparent">
            <Bookmark className="w-4 h-4" /> Bookmarks
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 bg-navy-surface border border-zinc-800/80 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-moss" />
            Node-Alpha Connected
          </div>
          <button type="button" className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
            <User className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* BACKGROUND ATMOSPHERIC GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-navy-surface/40 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* SUB-HEADER FILTERS CONTROLS */}
      <div className="w-full border-b border-zinc-900 bg-slate-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2 min-w-max">
            <button type="button" className="bg-pink-neon/10 text-pink-neon border border-pink-neon/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full cursor-pointer">
              Global Stream
            </button>
            <button type="button" className="text-quartz-muted hover:text-quartz-pure text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full cursor-pointer bg-transparent">
              My Clan
            </button>
            <button type="button" className="text-quartz-muted hover:text-electric-moss text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1 cursor-pointer bg-transparent">
              <ShieldAlert className="w-3.5 h-3.5" /> Alerts
            </button>
          </div>
          <button type="button" className="text-quartz-muted hover:text-quartz-pure flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer min-w-max bg-transparent">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Config
          </button>
        </div>
      </div>

      {/* CORE CONTENT LAYOUT GRID */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* PANEL LEFT: TELEMETRY MANIFEST */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-24">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-navy-surface px-3 py-1 rounded-full border border-zinc-800/80">
              <Flame className="w-3.5 h-3.5 text-pink-neon" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-quartz-muted">Node Cluster Alpha</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight uppercase italic leading-[0.9]">
              Live <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-neon to-electric-moss">
                Telemetry.
              </span>
            </h1>
            <p className="text-xs lg:text-sm text-quartz-muted max-w-sm leading-relaxed">
              Real-time tactical entries, encrypted satellite check-ins, and emergency track beacons broadcast directly from the field.
            </p>
          </div>

          <div className="bg-navy-surface/40 border border-zinc-900 p-4 rounded-2xl grid grid-cols-2 gap-3">
            <div className="bg-slate-black/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-quartz-muted uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3 h-3 text-pink-neon" /> Position</span>
              <p className="text-xs font-mono font-bold text-zinc-200">46.5402° N, 10.9811° E</p>
            </div>
            <div className="bg-slate-black/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-quartz-muted uppercase tracking-widest flex items-center gap-1"><Activity className="w-3 h-3 text-electric-moss" /> Network</span>
              <p className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-1"><Wifi className="w-3 h-3 text-electric-moss" /> SAT-LINK 99%</p>
            </div>
          </div>

          <div className="bg-navy-surface/80 border border-zinc-800/60 rounded-2xl p-4 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-quartz-muted">Compose Broadcast</span>
              <div className="w-2 h-2 rounded-full bg-electric-moss" />
            </div>
            <textarea 
              placeholder="Transmit coordinate updates or safety logs..." 
              className="w-full bg-slate-black border border-zinc-900 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none resize-none h-24 font-medium"
            />
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <button type="button" className="p-2 bg-slate-black border border-zinc-900 rounded-lg text-quartz-muted hover:text-pink-neon transition-colors">
                  <Image className="w-4 h-4" />
                </button>
                <button type="button" className="p-2 bg-slate-black border border-zinc-900 rounded-lg text-quartz-muted hover:text-electric-moss transition-colors">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
              <button type="button" className="bg-pink-neon text-slate-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,20,147,0.2)] hover:brightness-110">
                Transmit Packet <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </section>

        {/* PANEL RIGHT: STREAM CARDS FEED */}
        <section className="space-y-4 md:col-span-7 w-full">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-electric-moss flex items-center gap-2">
              <Radio className="w-4 h-4 text-pink-neon" /> Live System Telemetry Stream
            </h2>
            <span className="text-[10px] font-mono text-quartz-muted uppercase tracking-widest">PACKETS: OPTIMAL</span>
          </div>

          <div className="space-y-4 w-full">
            <div className="bg-navy-surface/70 border border-zinc-800/40 p-6 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-xs text-electric-moss italic">AX</div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-100 tracking-tight">Alex_Nortech</h3>
                    <p className="text-[10px] font-mono text-quartz-muted">Altitude: 2,430m • 12m ago</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold bg-electric-moss/10 text-electric-moss px-2 py-0.5 rounded border border-electric-moss/20 tracking-widest uppercase">TRAIL BEACON</span>
              </div>
              <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-medium">
                Base camp architecture successfully deployed. Next.js 15 layout structures are routing cleanly across local grid structures. Preparing high-altitude survey data loops now.
              </p>
              <div className="flex items-center gap-6 pt-3 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                <button type="button" className="flex items-center gap-1.5 hover:text-pink-neon transition-colors bg-transparent"><Heart className="w-4 h-4" /> 24</button>
                <button type="button" className="flex items-center gap-1.5 hover:text-electric-moss transition-colors bg-transparent"><MessageSquare className="w-4 h-4" /> 8</button>
                <button type="button" className="flex items-center gap-1.5 hover:text-white transition-colors ml-auto bg-transparent"><Share2 className="w-4 h-4" /> Route Path</button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* MOBILE BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-black/90 backdrop-blur-xl border-t border-zinc-900 px-6 py-4 flex justify-between items-center">
        <button type="button" className="flex flex-col items-center gap-1 text-electric-moss bg-transparent">
          <span className="text-[10px] font-bold tracking-tight">Feed</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent">
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Explore</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] font-medium">Clan</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent">
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] font-medium">Saved</span>
        </button>
      </nav>

    </div>
  );
}