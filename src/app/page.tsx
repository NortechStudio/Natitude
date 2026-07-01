"use client";

import React, { useState } from 'react';
import { ArrowUpRight, Ticket, GlassWater, ChevronDown, Sparkles, MapPin, Radio, Eye } from 'lucide-react';

export default function OverhauledClubSite() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-pink-500 selection:text-black antialiased">
      
      {/* 1. IMMERSIVE STICKY HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-6 lg:px-16 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          {/* CLICKABLE LOGO */}
          <a 
            href="/" 
            className="text-xl font-black tracking-widest uppercase italic bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent hover:brightness-125 transition-all decoration-none"
          >
            NATITUDE<span className="text-pink-500">.</span>SIGMA
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400">
          <a href="#lineup" className="hover:text-white transition-colors">The Lineup</a>
          <a href="#vip" className="hover:text-white transition-colors">VIP Architecture</a>
          <a href="#experience" className="hover:text-white transition-colors">The Club</a>
        </nav>
        
        <a href="#vip" className="hidden sm:flex items-center gap-2 border border-white/20 hover:border-pink-500 hover:bg-pink-500 hover:text-black transition-all px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
          Secure Entry
        </a>
      </header>
      {/* 2. CINEMATIC HERO LAYER */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 lg:px-16 pb-24 overflow-hidden">
        {/* Deep Ambient Atmosphere Backdrop */}
        <div className="absolute inset-0 bg-cover bg-center z-0 scale-105 filter brightness-[0.3] contrast-125 transition-all duration-1000" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1800')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505]/80 z-10" />

        <div className="relative z-20 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] backdrop-blur-md text-pink-400">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
            Tonight // Peak System Engaged
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic">
            DEEP CONCTRETE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-pink-500 to-violet-800">AUDIO MATRIX</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl font-medium tracking-wide leading-relaxed">
            Experience absolute sensory dominance. Powered by a custom-tuned, four-point audiophile array and live spatial laser topography.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#lineup" className="bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-pink-500 hover:text-black transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
              Buy GA Passes <Ticket className="w-4 h-4 text-black" />
            </a>
            <a href="#vip" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 transition-all">
              Reserve VIP Bottle Space <GlassWater className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <ChevronDown className="w-5 h-5 text-zinc-500" />
        </div>
      </section>

      {/* 3. SCROLLING TELEMETRY TICKER */}
      <section className="w-full bg-[#0a0a0a] border-y border-white/5 py-4 overflow-hidden">
        <div className="flex items-center gap-12 text-[11px] font-mono tracking-[0.2em] text-zinc-500 whitespace-nowrap animate-marquee">
          <span>[DOOR CAP: 74%]</span>
          <span className="text-pink-500">•</span>
          <span>[LINE WAIT: 8 MINS]</span>
          <span className="text-pink-500">•</span>
          <span>[MAIN ROOM: AMELIE LENS ON AT 01:00]</span>
          <span className="text-pink-500">•</span>
          <span>[VIP MEZZANINE BOOTHS: 2 REMAINING]</span>
        </div>
      </section>

      {/* 4. HEAVY GRID RESIDENCY LINEUP */}
      <section id="lineup" className="max-w-7xl mx-auto px-6 lg:px-16 py-32 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">Roster Sequence</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">UPCOMING SONIC TRANSITS</h2>
          </div>
          <p className="text-xs text-zinc-500 max-w-xs font-medium">
            Strict curated dark-wave, progressive industrial, and structural techno configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-700"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1000')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20 space-y-2">
              <span className="text-[10px] font-mono text-pink-500 font-bold tracking-widest">FRIDAY / JULY 03</span>
              <h3 className="text-2xl font-black uppercase tracking-tight">CODE_X : HYPEROBJECT</h3>
              <p className="text-xs text-zinc-400 max-w-sm">4-Hour extended transit soundscapes. Deep room sub-frequencies.</p>
              <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold text-white flex items-center gap-1">Claim Entry Pass <ArrowUpRight className="w-4 h-4 text-pink-500" /></span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-700"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20 space-y-2">
              <span className="text-[10px] font-mono text-violet-400 font-bold tracking-widest">SATURDAY / JULY 04</span>
              <h3 className="text-2xl font-black uppercase tracking-tight">AMELIE LENS // RESIDENCY</h3>
              <p className="text-xs text-zinc-400 max-w-sm">Minimalist driving arrangements inside the core laser warehouse.</p>
              <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold text-white flex items-center gap-1">Claim Entry Pass <ArrowUpRight className="w-4 h-4 text-violet-400" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELITE VIP ARCHITECTURE SECTOR */}
      <section id="vip" className="w-full bg-[#0a0a0a] border-t border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">High-Tier Allocation</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">VIP TABLE LANDSCAPES</h2>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
              Do not wait in structural lines. Allocating a private landscape opens priority underground tunnel entry, customized high-end mixology configurations, and immediate proximity to the visual arrays.
            </p>
            
            <div className="space-y-4">
              <div onClick={() => setSelectedTable('MEZZANINE')} 
                   className={`p-5 rounded-2xl border transition-all cursor-pointer ${selectedTable === 'MEZZANINE' ? 'bg-white text-black border-white' : 'bg-[#0d0d0d] border-white/5 text-white hover:border-white/20'}`}>
                <div className="flex justify-between font-black uppercase text-xs tracking-wider">
                  <span>Tier 02 // Mezzanine Flight Deck</span>
                  <span className={selectedTable === 'MEZZANINE' ? 'text-pink-600' : 'text-pink-500'}>$1,500 Min</span>
                </div>
              </div>

              <div onClick={() => setSelectedTable('STAGELONG')} 
                   className={`p-5 rounded-2xl border transition-all cursor-pointer ${selectedTable === 'STAGELONG' ? 'bg-white text-black border-white' : 'bg-[#0d0d0d] border-white/5 text-white hover:border-white/20'}`}>
                <div className="flex justify-between font-black uppercase text-xs tracking-wider">
                  <span>Tier 01 // Frontline Deck (Decks Adjacent)</span>
                  <span className={selectedTable === 'STAGELONG' ? 'text-pink-600' : 'text-pink-500'}>$3,500 Min</span>
                </div>
              </div>
            </div>

            {selectedTable && (
              <button type="button" className="w-full bg-pink-500 text-black text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-[0_10px_30px_rgba(255,20,147,0.3)] hover:brightness-110 transition-all">
                Submit Reservation for {selectedTable} Sector
              </button>
            )}
          </div>

          {/* RIGHT VISUAL PLACEHOLDER FOR THE FLOORPLAN */}
          <div className="lg:col-span-7 bg-[#0d0d0d] border border-white/5 rounded-3xl aspect-video p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-pink-500/10 to-transparent opacity-50" />
            <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1"><Radio className="w-3.5 h-3.5 text-pink-500" /> AUDIO-VISUAL RADAR ROOM SCAN</span>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold">Spatial Map Stable</span>
            </div>
            
            {/* Mock Visual Map Graphing */}
            <div className="h-32 flex items-center justify-center relative z-10">
              <div className="text-center space-y-1">
                <p className="text-xs font-mono font-bold text-zinc-400">[ INTERACTIVE FLOOR DIALS ]</p>
                <p className="text-[10px] font-mono text-zinc-600">Select a tier package left to light up tactical seating sectors.</p>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 p-4 rounded-xl text-zinc-500 text-[10px] font-mono tracking-wider relative z-10">
              STATION_METRIC: SOUND REVERBERATION OPTIMIZED FOR SECTOR GROUPS 01-12.
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-12 text-center text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
        © 2026 NATITUDE.SIGMA // IMMERSIVE AMBIENT LABS. ALL RIGHTS CONTROLLED.
      </footer>

    </div>
  );
}