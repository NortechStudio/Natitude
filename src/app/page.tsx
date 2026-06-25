"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2, 
  MapPin, Activity, ShieldAlert, SlidersHorizontal, Image as ImageIcon, Wifi,
  Compass, Shield, Bookmark, User, Bell, Eye, Database, Sparkles, Ticket, GlassWater
} from 'lucide-react';

interface NightlifePacket {
  id: string;
  handle: string;
  avatarInitials: string;
  packetType: 'VIP_DROP' | 'LINEUP_ALERT' | 'LIVE_VIBE';
  timestamp: string;
  location: string;
  tableZone: string;
  message: string;
  mediaTrack?: string;
  bpm?: number;
  metrics: {
    likes: number;
    replies: number;
  };
}

export default function NightclubPlatform() {
  const [currentTab, setCurrentTab] = useState<'FEED' | 'DISCOVERY' | 'VIP'>('FEED');
  const [feedFilter, setFeedFilter] = useState<'ALL' | 'ALERTS' | 'LIVE'>('ALL');
  
  // VIP Booking Form States
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Live Nightlife Telemetry Stream
  const feedPackets: NightlifePacket[] = [
    {
      id: "club-01",
      handle: "dj_synth_matrix",
      avatarInitials: "SM",
      packetType: "LINEUP_ALERT",
      timestamp: "3m ago",
      location: "Main Stage // Laser Bay",
      tableZone: "BOOTH-01",
      message: "Just dropped the unreleased remix of 'Neon Odyssey'. The sound system configuration is peaking at 104dB perfectly. Dancefloor is completely packed out. If you're stuck in GA, head to Room 2 for deep techno transitions.",
      bpm: 128,
      metrics: { likes: 342, replies: 28 }
    },
    {
      id: "club-02",
      handle: "VENUE_OPS",
      avatarInitials: "VO",
      packetType: "VIP_DROP",
      timestamp: "12m ago",
      location: "VIP Mezzanine",
      tableZone: "ULTRA-STAGE-RIGHT",
      message: "FLASH DROP: Only 2 Owner's Box tables remaining for tonight's headline set. Booking tier unlocks premium vintage champagne arrays and dedicated server pathways. Execute booking via the VIP portal instantly.",
      metrics: { likes: 890, replies: 142 }
    },
    {
      id: "club-03",
      handle: "clara_vibe_check",
      avatarInitials: "CV",
      packetType: "LIVE_VIBE",
      timestamp: "35m ago",
      location: "Antechamber Lounge",
      tableZone: "TABLE-24",
      mediaTrack: "Track ID: 'Lost in Tokyo' (Amelie Lens Remix)",
      message: "The underground room is an absolute mood tonight. Visual arrays are completely interactive. Drinks are hitting heavy.",
      bpm: 132,
      metrics: { likes: 124, replies: 15 }
    }
  ];

  // Filter matrix logic
  const filteredPackets = feedPackets.filter(packet => {
    if (feedFilter === 'ALERTS') return packet.packetType === 'VIP_DROP';
    if (feedFilter === 'LIVE') return packet.packetType === 'LIVE_VIBE';
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-slate-black text-quartz-pure pb-24 md:pb-12 relative font-sans antialiased selection:bg-pink-neon selection:text-slate-black">
      
      {/* GLOBAL CLUB NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-slate-black/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-3 rounded-full bg-pink-neon shadow-[0_0_12px_#ff1493] animate-pulse" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-electric-moss">_X</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-quartz-muted">
          <button 
            onClick={() => setCurrentTab('FEED')}
            type="button" 
            className={`flex items-center gap-2 pb-1 cursor-pointer bg-transparent border-0 transition-all ${currentTab === 'FEED' ? 'text-electric-moss border-b-2 border-electric-moss' : 'hover:text-pink-neon text-quartz-muted'}`}
          >
            Live Room Feed
          </button>
          <button 
            onClick={() => setCurrentTab('DISCOVERY')}
            type="button" 
            className={`flex items-center gap-2 pb-1 cursor-pointer bg-transparent border-0 transition-all ${currentTab === 'DISCOVERY' ? 'text-electric-moss border-b-2 border-electric-moss' : 'hover:text-pink-neon text-quartz-muted'}`}
          >
            <Compass className="w-4 h-4" /> DJ Lineups
          </button>
          <button 
            onClick={() => setCurrentTab('VIP')}
            type="button" 
            className={`flex items-center gap-2 pb-1 cursor-pointer bg-transparent border-0 transition-all ${currentTab === 'VIP' ? 'text-electric-moss border-b-2 border-electric-moss' : 'hover:text-pink-neon text-quartz-muted'}`}
          >
            <GlassWater className="w-4 h-4" /> Book Tables
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:inline-flex items-center gap-2 bg-navy-surface border border-zinc-800/80 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-moss animate-ping" />
            Vibe Engine Active
          </div>
          <button type="button" className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
            <User className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* DYNAMIC DOOR METRICS INFRASTRUCTURE BAR */}
      <section className="w-full bg-navy-surface/30 border-b border-zinc-900 overflow-hidden py-2.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center gap-8 text-[10px] font-mono tracking-wider text-quartz-muted whitespace-nowrap overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 text-pink-neon shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-bold uppercase">LIVE DOOR LOGISTICS:</span>
          </div>
          <div className="inline-flex gap-8">
            <span>[MAIN ROOM] PEAK CAPACITY // DJ SYNTH_MATRIX ON DECKS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-electric-moss">[GA LINE-WAIT] APPROX 12 MINS // EXPEDITED FOR VIP UPLINKS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-quartz-pure">[SOUND WAVEFRONT] ROOM-1 PEAKING OPTIMALLY AT 104DB</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAB CONTENT SWITCHING MATRIX */}
      {/* ========================================================================= */}
      
      {currentTab === 'FEED' && (
        <div className="w-full animate-fadeIn">
          {/* FEED FILTERS Sub-Bar */}
          <div className="w-full border-b border-zinc-900 bg-slate-black/60 backdrop-blur-sm sticky top-[69px] z-40">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setFeedFilter('ALL')}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-transparent border cursor-pointer transition-all ${feedFilter === 'ALL' ? 'text-pink-neon border-pink-neon/30 bg-pink-neon/10' : 'text-quartz-muted border-transparent hover:text-quartz-pure'}`}
                >
                  All Rooms
                </button>
                <button 
                  onClick={() => setFeedFilter('ALERTS')}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-transparent border cursor-pointer transition-all ${feedFilter === 'ALERTS' ? 'text-red-400 border-red-500/30 bg-red-500/10' : 'text-quartz-muted border-transparent hover:text-red-400'}`}
                >
                  VIP Drops
                </button>
                <button 
                  onClick={() => setFeedFilter('LIVE')}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full bg-transparent border cursor-pointer transition-all ${feedFilter === 'LIVE' ? 'text-electric-moss border-electric-moss/30 bg-electric-moss/10' : 'text-quartz-muted border-transparent hover:text-electric-moss'}`}
                >
                  Crowd Vibe
                </button>
              </div>
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT HUD SIDEBAR */}
            <section className="space-y-6 md:col-span-5 md:sticky md:top-36">
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-electric-moss flex items-center gap-2">
                  <Database className="w-4 h-4" /> Venue Dispatch Interface
                </h2>
                <p className="text-xs text-quartz-muted leading-relaxed">
                  Real-time visual feeds and crowd-sourced atmosphere updates directly from inside the dance corridors.
                </p>
              </div>

              <div className="bg-navy-surface/80 border border-zinc-800/60 rounded-2xl p-4 space-y-3 shadow-2xl">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-quartz-muted flex items-center gap-1"><Radio className="w-3.5 h-3.5 text-pink-neon" /> Broadcast from the Floor</span>
                </div>
                <textarea 
                  placeholder="Drop a crowd update or track ID check..." 
                  className="w-full bg-slate-black border border-zinc-900 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-pink-neon/50 resize-none h-20 font-medium transition-colors"
                />
                <button type="button" className="w-full bg-pink-neon text-slate-black text-xs font-black uppercase tracking-widest py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(255,20,147,0.3)] hover:brightness-110 transition-all cursor-pointer border-0">
                  Post Vibe Packet <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </section>

            {/* RIGHT FEED POST CHANNELS */}
            <section className="space-y-4 md:col-span-7 w-full">
              {filteredPackets.map((packet) => (
                <div 
                  key={packet.id} 
                  className={`bg-navy-surface/60 border p-6 rounded-2xl space-y-4 shadow-2xl transition-all ${packet.packetType === 'VIP_DROP' ? 'border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent' : 'border-zinc-900/60 hover:border-pink-neon/20'}`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl border bg-zinc-900 border-zinc-800 text-electric-moss flex items-center justify-center font-black text-xs italic">
                        {packet.avatarInitials}
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-zinc-100 tracking-tight flex items-center gap-1.5">
                          @{packet.handle}
                          <span className="text-[10px] font-mono text-zinc-500 font-normal">• {packet.timestamp}</span>
                        </h3>
                        <p className="text-[10px] font-mono text-quartz-muted flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-pink-neon" /> {packet.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border tracking-widest uppercase bg-zinc-900 border-zinc-800 text-zinc-400">
                      {packet.packetType.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-medium">
                    {packet.message}
                  </p>

                  {packet.mediaTrack && (
                    <div className="w-full h-32 rounded-xl bg-slate-black border border-zinc-900/80 relative overflow-hidden flex items-center justify-center group shadow-inner p-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent" />
                      <div className="absolute top-3 left-4 font-mono text-[8px] text-blue-400 flex items-center gap-1 bg-slate-black/60 px-2 py-0.5 rounded border border-blue-500/20">
                        <Wifi className="w-3 h-3 text-pink-neon animate-pulse" /> AUDIO TRACK DISPATCH RELAY
                      </div>
                      <div className="text-center z-10 space-y-1">
                        <p className="text-xs font-mono font-bold text-electric-moss">{packet.mediaTrack}</p>
                        <p className="text-[10px] font-mono text-zinc-500">TEMPO CORRELATION: {packet.bpm} BPM</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 bg-slate-black/30 border border-zinc-900/40 px-4 py-2 rounded-xl text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                    <span>ZONE: {packet.tableZone}</span>
                    {packet.bpm && (
                      <>
                        <span className="text-zinc-800">|</span>
                        <span>{packet.bpm} BPM DETECTED</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-6 pt-3 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                    <button type="button" className="flex items-center gap-1.5 hover:text-pink-neon transition-colors bg-transparent border-0 cursor-pointer">
                      <Heart className="w-4 h-4" /> {packet.metrics.likes}
                    </button>
                    <button type="button" className="flex items-center gap-1.5 hover:text-electric-moss transition-colors bg-transparent border-0 cursor-pointer">
                      <MessageSquare className="w-4 h-4" /> {packet.metrics.replies}
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </main>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT: DISCOVERY / ROSTER TIMELINE */}
      {/* ========================================================================= */}
      {currentTab === 'DISCOVERY' && (
        <main className="max-w-4xl mx-auto px-6 pt-12 space-y-8 animate-fadeIn">
          <div className="border-b border-zinc-900 pb-4">
            <h2 className="text-2xl font-black tracking-tight text-zinc-100 uppercase italic">UPCOMING TALENT RESIDENCIES</h2>
            <p className="text-xs text-quartz-muted tracking-wider uppercase font-mono mt-1">July 2026 Season Sequence</p>
          </div>

          <div className="space-y-4">
            <div className="bg-navy-surface border border-zinc-900 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-pink-neon/30 transition-all">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-pink-neon uppercase font-black tracking-widest bg-pink-neon/10 px-2 py-0.5 rounded border border-pink-neon/20">FRIDAY // JULY 03</span>
                <h3 className="text-lg font-black text-zinc-100 tracking-tight uppercase">CODE_X: HYPEROBJECT TRANSITS</h3>
                <p className="text-xs text-quartz-muted">Support by K_Expeditions. Deep melodic dark-wave arrays.</p>
              </div>
              <button type="button" className="bg-zinc-900 border border-zinc-800 text-electric-moss text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl flex items-center gap-1.5 hover:bg-electric-moss hover:text-slate-black transition-all cursor-pointer">
                <Ticket className="w-4 h-4" /> Get Passes <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-navy-surface border border-zinc-900 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-pink-neon/30 transition-all">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-electric-moss uppercase font-black tracking-widest bg-electric-moss/10 px-2 py-0.5 rounded border border-electric-moss/20">SATURDAY // JULY 04</span>
                <h3 className="text-lg font-black text-zinc-100 tracking-tight uppercase">AMELIE LENS [EXTENDED 4HR DISPATCH]</h3>
                <p className="text-xs text-quartz-muted">Peak minimalist driving soundscapes in Room-1.</p>
              </div>
              <button type="button" className="bg-zinc-900 border border-zinc-800 text-electric-moss text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl flex items-center gap-1.5 hover:bg-electric-moss hover:text-slate-black transition-all cursor-pointer">
                <Ticket className="w-4 h-4" /> Get Passes <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ========================================================================= */}
      {/* TAB CONTENT: EXCLUSIVE VIP PORTAL */}
      {/* ========================================================================= */}
      {currentTab === 'VIP' && (
        <main className="max-w-3xl mx-auto px-6 pt-12 space-y-8 animate-fadeIn">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black tracking-tighter text-zinc-100 uppercase italic">VIP LOUNGE & BOTTLE ARCHITECTURE</h2>
            <p className="text-xs text-quartz-muted max-w-lg mx-auto">
              Secure dedicated architecture on the main floor. All packages unlock expedited queue skipping, custom security arrays, and direct mixology service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              onClick={() => setSelectedTier('MEZZANINE')}
              className={`border p-6 rounded-2xl space-y-4 cursor-pointer transition-all bg-navy-surface/50 ${selectedTier === 'MEZZANINE' ? 'border-pink-neon bg-pink-neon/5 shadow-[0_0_20px_rgba(255,20,147,0.15)]' : 'border-zinc-900 hover:border-zinc-800'}`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-black text-sm uppercase text-zinc-100">Tier 02 // Mezzanine Wing</h3>
                <span className="font-mono text-xs text-pink-neon font-bold">$1,500 Min</span>
              </div>
              <p className="text-xs text-quartz-muted leading-relaxed">
                Elevated views over the secondary visual grid. Comfortably suits configurations up to 6 operators.
              </p>
            </div>

            <div 
              onClick={() => setSelectedTier('STAGE_LEFT')}
              className={`border p-6 rounded-2xl space-y-4 cursor-pointer transition-all bg-navy-surface/50 ${selectedTier === 'STAGE_LEFT' ? 'border-electric-moss bg-electric-moss/5 shadow-[0_0_20px_rgba(0,255,127,0.15)]' : 'border-zinc-900 hover:border-zinc-800'}`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-black text-sm uppercase text-zinc-100">Tier 01 // Ultra Stage Right</h3>
                <span className="font-mono text-xs text-electric-moss font-bold">$3,500 Min</span>
              </div>
              <p className="text-xs text-quartz-muted leading-relaxed">
                Direct spatial alignment immediately adjacent to the primary DJ decks. Dedicated asset host and infinite premium mixers. Max 10.
              </p>
            </div>
          </div>

          <div className="bg-navy-surface border border-zinc-900 rounded-2xl p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Execute Secured VIP Reservation</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Selected Layer Tier</label>
                <input 
                  type="text" 
                  readOnly 
                  value={selectedTier ? `TIER: ${selectedTier}` : 'No Tier Selected'} 
                  className="w-full bg-slate-black border border-zinc-800/80 rounded-xl px-3 py-2 text-xs font-mono font-bold text-electric-moss focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Target Operator Count</label>
                <select className="w-full bg-slate-black border border-zinc-800 px-3 py-2 text-xs font-mono font-bold text-zinc-300 rounded-xl focus:outline-none focus:border-pink-neon">
                  <option>1-5 Guests</option>
                  <option>6-10 Guests</option>
                  <option>10+ Special Ops</option>
                </select>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="p-3 bg-electric-moss/10 border border-electric-moss/30 rounded-xl text-center text-xs font-bold text-electric-moss animate-pulse">
                TRANSMISSION SUCCESSFUL // VIP TABLE HELD STABLE
              </div>
            ) : (
              <button 
                onClick={() => { if(selectedTier) { setBookingSuccess(true); } }}
                disabled={!selectedTier}
                className="w-full bg-electric-moss disabled:opacity-40 disabled:cursor-not-allowed text-slate-black font-black uppercase text-xs tracking-widest py-3 rounded-xl shadow-[0_4px_15px_rgba(0,255,127,0.2)] transition-all cursor-pointer border-0"
              >
                Transmit VIP Table Request
              </button>
            )}
          </div>
        </main>
      )}

      {/* FOOTER NAVIGATION TARGETS FOR SMARTPHONE SCREEN PORTS */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-black/90 backdrop-blur-xl border-t border-zinc-900 px-6 py-4 flex justify-between items-center">
        <button onClick={() => setCurrentTab('FEED')} type="button" className={`flex flex-col items-center gap-1 bg-transparent border-0 ${currentTab === 'FEED' ? 'text-electric-moss' : 'text-quartz-muted'}`}>
          <span className="text-[10px] font-bold tracking-tight">Live Feed</span>
        </button>
        <button onClick={() => setCurrentTab('DISCOVERY')} type="button" className={`flex flex-col items-center gap-1 bg-transparent border-0 ${currentTab === 'DISCOVERY' ? 'text-electric-moss' : 'text-quartz-muted'}`}>
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Lineups</span>
        </button>
        <button onClick={() => setCurrentTab('VIP')} type="button" className={`flex flex-col items-center gap-1 bg-transparent border-0 ${currentTab === 'VIP' ? 'text-electric-moss' : 'text-quartz-muted'}`}>
          <GlassWater className="w-5 h-5" />
          <span className="text-[10px] font-medium">VIP Tables</span>
        </button>
      </nav>

    </div>
  );
}