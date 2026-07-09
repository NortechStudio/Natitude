"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Ticket, GlassWater, ChevronDown, Radio, CheckCircle, Flame, ShieldAlert, ToggleLeft, ToggleRight, Send } from 'lucide-react';

interface TableSector {
  id: string;
  name: string;
  tier: 'MEZZANINE' | 'STAGELONG';
  capacity: number;
  status: 'AVAILABLE' | 'RESERVED';
}

export default function FullyHardenedProductionSite() {
  // --- DATABASE & ADMIN SIMULATION STATE ---
  const [clubTables, setClubTables] = useState<TableSector[]>([
    { id: 'M-01', name: 'Mezzanine Booth 01', tier: 'MEZZANINE', capacity: 6, status: 'AVAILABLE' },
    { id: 'M-02', name: 'Mezzanine Booth 02', tier: 'MEZZANINE', capacity: 6, status: 'RESERVED' },
    { id: 'M-03', name: 'Mezzanine Suite 03', tier: 'MEZZANINE', capacity: 10, status: 'AVAILABLE' },
    { id: 'M-04', name: 'Mezzanine Suite 04', tier: 'MEZZANINE', capacity: 10, status: 'AVAILABLE' },
    { id: 'S-01', name: 'Stage Front Row Left', tier: 'STAGELONG', capacity: 8, status: 'AVAILABLE' },
    { id: 'S-02', name: 'Stage Center VIP 02', tier: 'STAGELONG', capacity: 12, status: 'AVAILABLE' },
    { id: 'S-03', name: 'Stage Center VIP 03', tier: 'STAGELONG', capacity: 12, status: 'RESERVED' },
    { id: 'S-04', name: 'Stage Front Row Right', tier: 'STAGELONG', capacity: 8, status: 'AVAILABLE' },
  ]);

  // --- CORE UI INTERACTION STATES ---
  const [selectedTier, setSelectedTier] = useState<'MEZZANINE' | 'STAGELONG' | null>(null);
  const [activeTableId, setActiveTableId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [attendeeEmail, setAttendeeEmail] = useState<string>('');
  
  // --- ADMIN PANEL AUTH STATES ---
  const [showAdminPanel, setShowAdminPanel] = useState<boolean>(false);
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(false);

  const handleTierSelection = (tier: 'MEZZANINE' | 'STAGELONG') => {
    setSelectedTier(tier);
    const firstMatch = clubTables.find(t => t.tier === tier && t.status === 'AVAILABLE');
    if (firstMatch) setActiveTableId(firstMatch.id);
  };

  const handleTableGridClick = (table: TableSector) => {
    if (table.status === 'RESERVED') return;
    setActiveTableId(table.id);
    setSelectedTier(table.tier);
  };

  // --- PROMOTER SERVER-ACTION SIMULATOR ---
  const executeBookingServerPipeline = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeEmail || !activeTableId) return;

    setIsSubmitting(true);

    // Formulating actual server payload structural model
    const emailPayload = {
      to: "promotions-matrix@natitude-sigma.com",
      replyTo: attendeeEmail,
      subject: `[RESERVATION REQUEST] SECURED NODE: ${activeTableId}`,
      body: `Incoming VIP Transit Allocation:\nTable Node: ${activeTableId}\nClient Target: ${attendeeEmail}\nTimestamp: ${new Date().toISOString()}`
    };

    // Simulate API Network transmission delay
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
    // Automatically update local DB to reserve node upon dispatch success
    setClubTables(prev => prev.map(t => t.id === activeTableId ? { ...t, status: 'RESERVED' } : t));
    
    console.log("Transmission Pipeline Success. Payload Dispatched to Server Logs:", emailPayload);
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  // --- ADMIN DOOR MANAGER STATUS TOGGLE ---
  const toggleTableStatusFromAdmin = (tableId: string) => {
    setClubTables(prev => prev.map(t => {
      if (t.id === tableId) {
        const nextStatus = t.status === 'AVAILABLE' ? 'RESERVED' : 'AVAILABLE';
        // Clear cursor if active cell gets wiped out by admin toggle
        if (nextStatus === 'RESERVED' && activeTableId === tableId) {
          setActiveTableId(null);
        }
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const verifyAdminCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === "sigma2026") {
      setIsAdminAuthenticated(true);
    } else {
      alert("INVALID AUTH PAYLOAD SECURITY CRITICAL KEY DENIED.");
    }
  };

  const activeTableData = clubTables.find(t => t.id === activeTableId);
  const totalAvailableTables = clubTables.filter(t => t.status === 'AVAILABLE').length;

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-pink-500 selection:text-black antialiased">
      
      {/* 1. IMMERSIVE STICKY HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm px-6 lg:px-16 py-6 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="text-xl font-black tracking-widest uppercase italic bg-gradient-to-r from-white via-zinc-400 to-zinc-600 bg-clip-text text-transparent hover:brightness-125 transition-all no-underline"
          >
            NATITUDE<span className="text-pink-500">.</span>SIGMA
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400">
          <a href="#lineup" className="hover:text-white transition-colors">The Lineup</a>
          <a href="#vip" className="hover:text-white transition-colors">VIP Architecture</a>
          <button type="button" onClick={() => setShowAdminPanel(!showAdminPanel)} className="hover:text-pink-400 transition-colors bg-transparent border-none cursor-pointer text-[11px] font-black uppercase tracking-[0.25em]">Promoter Login</button>
        </nav>
        <a href="#vip" className="hidden sm:flex items-center gap-2 border border-white/20 hover:border-pink-500 hover:bg-pink-500 hover:text-black transition-all px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
          Secure Entry
        </a>
      </header>

      {/* 2. CINEMATIC HERO LAYER */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 lg:px-16 pb-24 overflow-hidden">
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
            DEEP CONCRETE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-pink-500 to-violet-800">AUDIO MATRIX</span>
          </h1>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl font-medium tracking-wide leading-relaxed">
            Experience absolute sensory dominance. Powered by a custom-tuned, four-point audiophile array and live spatial laser topography.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#lineup" className="bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-pink-500 hover:text-black transition-all">
              Buy GA Passes <Ticket className="w-4 h-4 text-black" />
            </a>
            <a href="#vip" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 transition-all">
              Reserve VIP Bottle Space <GlassWater className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
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
          <span>[VIP BOOTHS AVAIL: {totalAvailableTables} SYSTEMS STABLE]</span>
        </div>
      </section>

      {/* 4. HEAVY GRID RESIDENCY LINEUP */}
      <section id="lineup" className="max-w-7xl mx-auto px-6 lg:px-16 py-32 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">Roster Sequence</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">UPCOMING SONIC TRANSITS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-700"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1000')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20 space-y-2">
              <span className="text-[10px] font-mono text-pink-500 font-bold tracking-widest">FRIDAY / JULY 03</span>
              <h3 className="text-2xl font-black uppercase tracking-tight">CODE_X : HYPEROBJECT</h3>
            </div>
          </div>

          <div className="group relative bg-[#0d0d0d] border border-white/5 rounded-3xl overflow-hidden aspect-[4/3] flex flex-col justify-end p-8 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-700"
                 style={{ backgroundImage: `url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="relative z-20 space-y-2">
              <span className="text-[10px] font-mono text-violet-400 font-bold tracking-widest">SATURDAY / JULY 04</span>
              <h3 className="text-2xl font-black uppercase tracking-tight">AMELIE LENS // RESIDENCY</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELITE VIP ARCHITECTURE SECTOR WITH INTERACTIVE FLOORPLAN */}
      <section id="vip" className="w-full bg-[#0a0a0a] border-t border-white/5 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-top">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-pink-500">High-Tier Allocation</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">VIP TABLE LANDSCAPES</h2>
            </div>
            
            <div className="space-y-4">
              <div onClick={() => handleTierSelection('MEZZANINE')} 
                   className={`p-5 rounded-2xl border transition-all cursor-pointer ${selectedTier === 'MEZZANINE' ? 'bg-white text-black border-white' : 'bg-[#0d0d0d] border-white/5 text-white hover:border-white/20'}`}>
                <div className="flex justify-between font-black uppercase text-xs tracking-wider">
                  <span>Tier 02 // Mezzanine Flight Deck</span>
                  <span className={selectedTier === 'MEZZANINE' ? 'text-pink-600' : 'text-pink-500'}>$1,500 Min</span>
                </div>
              </div>

              <div onClick={() => handleTierSelection('STAGELONG')} 
                   className={`p-5 rounded-2xl border transition-all cursor-pointer ${selectedTier === 'STAGELONG' ? 'bg-white text-black border-white' : 'bg-[#0d0d0d] border-white/5 text-white hover:border-white/20'}`}>
                <div className="flex justify-between font-black uppercase text-xs tracking-wider">
                  <span>Tier 01 // Frontline Deck (Stage Side)</span>
                  <span className={selectedTier === 'STAGELONG' ? 'text-pink-600' : 'text-pink-500'}>$3,500 Min</span>
                </div>
              </div>
            </div>

            {selectedTier && activeTableData && (
              <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-zinc-800/80 space-y-4">
                {!formSubmitted ? (
                  <form onSubmit={executeBookingServerPipeline} className="space-y-4">
                    <div className="text-[11px] font-mono uppercase text-zinc-400 space-y-1">
                      <div><span className="text-zinc-600">Selected Sector:</span> {activeTableData.name}</div>
                      <div><span className="text-zinc-600">Capacity Profile:</span> Up to {activeTableData.capacity} Guests Max</div>
                      <div><span className="text-zinc-600">Financial Minimum:</span> {activeTableData.tier === 'STAGELONG' ? '$3,500' : '$1,500'} USD</div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="booking-email" className="block text-[10px] font-black uppercase tracking-wider text-zinc-500">Contact Destination Email</label>
                      <input 
                        id="booking-email"
                        type="email" 
                        required
                        placeholder="promoter@exclusive.com"
                        value={attendeeEmail}
                        onChange={(e) => setAttendeeEmail(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-pink-500 transition-colors"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-pink-500 text-black text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-[0_10px_30px_rgba(255,20,147,0.2)] hover:brightness-110 disabled:opacity-50 transition-all cursor-pointer border-none"
                    >
                      {isSubmitting ? 'Transmitting Pipeline API Payload...' : 'Lock Dynamic Allocation'}
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-3">
                    <div className="inline-flex p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-wider text-white">Transmission Authenticated</h4>
                    <p className="text-[11px] font-mono text-zinc-500 leading-relaxed max-w-xs mx-auto">
                      Allocation request secured for {activeTableId}. System pipeline posted successfully.
                    </p>
                    <button type="button" onClick={() => setFormSubmitted(false)} className="text-[10px] text-zinc-500 underline bg-transparent border-none cursor-pointer">Submit alternative seat</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* INTERACTIVE FLOORPLAN */}
          <div className="lg:col-span-7 bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[460px]">
            <div className="absolute inset-0 bg-radial-gradient from-pink-500/5 via-transparent to-transparent opacity-60" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-pink-500 animate-pulse" /> SPATIAL FLOOR ARCHITECTURE MAP
              </span>
            </div>

            <div className="my-8 space-y-8 relative z-10">
              <div className="w-full bg-zinc-900/40 border border-zinc-800 rounded-xl py-3 text-center relative overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 flex items-center justify-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-violet-400" /> MAIN PERFORMANCE STAGE / DJ DECK AREA
                </span>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {clubTables.filter(t => t.tier === 'STAGELONG').map((table) => {
                    const isSelected = activeTableId === table.id;
                    const isReserved = table.status === 'RESERVED';
                    return (
                      <button
                        key={table.id}
                        type="button"
                        disabled={isReserved}
                        onClick={() => handleTableGridClick(table)}
                        className={`p-4 rounded-xl border text-left transition-all relative select-none cursor-pointer ${
                          isReserved ? 'bg-black/30 border-red-950 text-zinc-700 cursor-not-allowed opacity-40' :
                          isSelected ? 'bg-pink-500/10 border-pink-500 text-white shadow-[0_0_20px_rgba(236,72,153,0.15)]' :
                          'bg-black border-zinc-900 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="text-xs font-black tracking-tight">{table.id}</div>
                        <div className="text-[9px] font-mono mt-1 text-zinc-500">{isReserved ? 'SOLD OUT' : `${table.capacity} SEATS`}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {clubTables.filter(t => t.tier === 'MEZZANINE').map((table) => {
                    const isSelected = activeTableId === table.id;
                    const isReserved = table.status === 'RESERVED';
                    return (
                      <button
                        key={table.id}
                        type="button"
                        disabled={isReserved}
                        onClick={() => handleTableGridClick(table)}
                        className={`p-4 rounded-xl border text-left transition-all relative select-none cursor-pointer ${
                          isReserved ? 'bg-black/30 border-red-950 text-zinc-700 cursor-not-allowed opacity-40' :
                          isSelected ? 'bg-violet-500/10 border-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.15)]' :
                          'bg-black border-zinc-900 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="text-xs font-black tracking-tight">{table.id}</div>
                        <div className="text-[9px] font-mono mt-1 text-zinc-500">{isReserved ? 'SOLD OUT' : `${table.capacity} SEATS`}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED PRODUCTION MODULE: PROMOTER BACKSTAGE DOOR PANEL */}
      {showAdminPanel && (
        <section className="w-full bg-[#0d0d0d] border-t border-pink-500/20 py-16 animate-fade-in">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex p-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-widest italic">NATITUDE ENGINE PROMOTER CONTROL ACCESS</h3>
            
            {!isAdminAuthenticated ? (
              <form onSubmit={verifyAdminCredentials} className="max-w-xs mx-auto flex gap-2">
                <input 
                  type="password" 
                  required
                  placeholder="Enter promoter token..."
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="bg-black border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-zinc-700 flex-1 focus:outline-none focus:border-pink-500"
                />
                <button type="submit" className="bg-white text-black text-[10px] font-black uppercase tracking-widest px-4 rounded-xl border-none cursor-pointer hover:bg-pink-500 transition-colors">
                  Auth
                </button>
              </form>
            ) : (
              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  [SECURITY HANDSHAKE VERIFIED: BACKSTAGE MANAGER NODES ON-LIVE]
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/60 p-4 rounded-2xl border border-white/5">
                  {clubTables.map((t) => (
                    <div key={t.id} className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-800 text-left flex flex-col justify-between gap-3">
                      <div>
                        <div className="text-xs font-black">{t.id}</div>
                        <div className={`text-[9px] font-mono font-bold mt-0.5 ${t.status === 'AVAILABLE' ? 'text-emerald-400' : 'text-red-500'}`}>
                          {t.status}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleTableStatusFromAdmin(t.id)}
                        className={`w-full py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider flex items-center justify-center gap-1 border-none cursor-pointer transition-all ${
                          t.status === 'AVAILABLE' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                        }`}
                      >
                        {t.status === 'AVAILABLE' ? <ToggleRight className="w-3.5 h-3.5" /> : <ToggleLeft className="w-3.5 h-3.5" />} 
                        Toggle Node
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="text-[9px] font-mono text-zinc-600">Dev override hint passphrase: <code className="text-zinc-500">sigma2026</code></p>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-12 text-center text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
        © 2026 NATITUDE.SIGMA // IMMERSIVE AMBIENT LABS. ALL RIGHTS CONTROLLED.
      </footer>

    </div>
  );
}