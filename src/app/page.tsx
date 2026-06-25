"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2, 
  MapPin, Activity, ShieldAlert, SlidersHorizontal, Image as ImageIcon, Wifi,
  Compass, Shield, Bookmark, User, Bell, Eye, Database, Battery
} from 'lucide-react';

interface TelemetryPacket {
  id: string;
  callsign: string;
  avatarInitials: string;
  badgeType: 'TRAIL_BEACON' | 'SATELLITE_INTEL' | 'CRITICAL_ALERT';
  timestamp: string;
  elevation: string;
  coordinates: string;
  message: string;
  gridSector: string;
  mediaFile?: string;
  metrics: {
    hearts: number;
    replies: number;
  };
}

export default function LiveFeedTab() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ALERTS' | 'WAYPOINTS' | 'COMMS'>('ALL');

  const feedPackets: TelemetryPacket[] = [
    {
      id: "pkt-901",
      callsign: "Alex_Nortech",
      avatarInitials: "AX",
      badgeType: "TRAIL_BEACON",
      timestamp: "12m ago",
      elevation: "2,430m",
      coordinates: "46.5402° N, 10.9811° E",
      gridSector: "S-02",
      message: "Base camp layout architecture completely deployed. Next.js 15 routing parameters are translating cleanly over localized satellite arrays. Initializing thermal reconnaissance arrays ahead of tomorrow's north-face vertical ascent loop.",
      metrics: { hearts: 38, replies: 12 }
    },
    {
      id: "pkt-902",
      callsign: "Natitude_Ops",
      avatarInitials: "NO",
      badgeType: "CRITICAL_ALERT",
      timestamp: "45m ago",
      elevation: "3,110m",
      coordinates: "46.5491° N, 10.9942° E",
      gridSector: "N-04",
      message: "WARNING: High-altitude wind sheer detected exceeding 48 knots along the sub-ridge col. Severe ice pack fragmentation confirmed above 3,000 meters. Field operators are advised to anchor structural high-exposure bivouacs immediately.",
      metrics: { hearts: 142, replies: 45 }
    },
    {
      id: "pkt-903",
      callsign: "K_Expeditions",
      avatarInitials: "KX",
      badgeType: "SATELLITE_INTEL",
      timestamp: "2h ago",
      elevation: "1,890m",
      coordinates: "46.5211° N, 10.9650° E",
      gridSector: "W-09",
      mediaFile: "Infrared_Topo_Route_04.dat",
      message: "High-resolution multi-spectral route scans finalized for Sector West. Rockfall vulnerabilities appear nominal across low valleys, but glacial pooling is expanding rapidly near the eastern crevasses.",
      metrics: { hearts: 89, replies: 19 }
    }
  ];

  // Simplified array filtering mapping syntax to guarantee compiler pass
  const filteredPackets = feedPackets.filter((packet) => {
    if (activeFilter === 'ALERTS') return packet.badgeType === 'CRITICAL_ALERT';
    if (activeFilter === 'WAYPOINTS') return packet.badgeType === 'TRAIL_BEACON';
    if (activeFilter === 'COMMS') return packet.badgeType === 'SATELLITE_INTEL';
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-slate-black text-quartz-pure pb-24 md:pb-12 relative font-sans antialiased selection:bg-pink-neon selection:text-slate-black">
      
      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-slate-black/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-3 rounded-full bg-pink-neon shadow-[0_0_12px_#ff1493]" />
          <span className="text-xl font-black tracking-tighter uppercase italic">
            NATITUDE<span className="text-electric-moss">.</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-quartz-muted">
          <button type="button" className="text-electric-moss flex items-center gap-2 border-b-2 border-electric-moss pb-1 cursor-pointer bg-transparent">
            <ZapIcon className="w-4 h-4" /> Live Feed
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

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-navy-surface/40 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* LIVE DATA MARQUEE STATUS TICKER */}
      <section className="w-full bg-navy-surface/30 border-b border-zinc-900 overflow-hidden py-2.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-none text-[10px] font-mono tracking-wider text-quartz-muted">
          <div className="flex items-center gap-2 text-pink-neon shrink-0">
            <Bell className="w-3.5 h-3.5" />
            <span className="font-bold uppercase">WEATHER ALERT:</span>
          </div>
          <div className="inline-flex gap-8">
            <span>[SEC-4 NORTH] EXT-WIND WARNING // EXP-VEL 52KTS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-electric-moss">[SYS-CORE] ALL POST RELAYS STABLE // LATENCY: 14MS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-quartz-pure">[MISSION DOCK] 3 ACTIVE EXPEDITIONS TRACKED IN SECTOR-E</span>
          </div>
        </div>
      </section>

      {/* SIGNAL PRIORITY CONTROL SUB-BAR */}
      <div className="w-full border-b border-zinc-900 bg-slate-black/60 backdrop-blur-sm sticky top-[69px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2 min-w-max">
            <button 
              type="button" 
              onClick={() => setActiveFilter('ALL')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all cursor-pointer bg-transparent ${activeFilter === 'ALL' ? 'text-pink-neon border border-pink-neon/30 bg-pink-neon/10' : 'text-quartz-muted hover:text-quartz-pure border border-transparent'}`}
            >
              All Signals
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('ALERTS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer bg-transparent ${activeFilter === 'ALERTS' ? 'text-red-400 border border-red-500/30 bg-red-500/10' : 'text-quartz-muted hover:text-red-400 border border-transparent'}`}
            >
              <ShieldAlert className="w-3.5 h-3.5" /> SOS / Alerts
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('WAYPOINTS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer bg-transparent ${activeFilter === 'WAYPOINTS' ? 'text-electric-moss border border-electric-moss/30 bg-electric-moss/10' : 'text-quartz-muted hover:text-electric-moss border border-transparent'}`}
            >
              <MapPin className="w-3.5 h-3.5" /> Waypoints
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('COMMS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer bg-transparent ${activeFilter === 'COMMS' ? 'text-blue-400 border border-blue-500/30 bg-blue-500/10' : 'text-quartz-muted hover:text-blue-400 border border-transparent'}`}
            >
              <Radio className="w-3.5 h-3.5" /> Comms Data
            </button>
          </div>
          <button type="button" className="text-quartz-muted hover:text-quartz-pure flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer min-w-max bg-transparent border-0">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Sync Config
          </button>
        </div>
      </div>

      {/* CANVAS GRID CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* PANEL LEFT: MANIFEST PANEL */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-36">
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-electric-moss flex items-center gap-2">
              <Database className="w-4 h-4" /> System Control Manifest
            </h2>
            <p className="text-xs text-quartz-muted leading-relaxed">
              Log off-grid data, track environmental sensor packets, and manage tactical communications across active sectors.
            </p>
          </div>

          <div className="bg-navy-surface/40 border border-zinc-900 p-4 rounded-2xl grid grid-cols-2 gap-3 shadow-2xl">
            <div className="bg-slate-black/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-quartz-muted uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3 h-3 text-pink-neon" /> Station Lat/Long</span>
              <p className="text-xs font-mono font-bold text-zinc-200">46.5402° N, 10.9811° E</p>
            </div>
            <div className="bg-slate-black/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-quartz-muted uppercase tracking-widest flex items-center gap-1"><Activity className="w-3 h-3 text-electric-moss" /> Uplink Battery</span>
              <p className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-1"><Battery className="w-3.5 h-3.5 text-electric-moss" /> 84% POWER</p>
            </div>
          </div>

          <div className="bg-navy-surface/80 border border-zinc-800/60 rounded-2xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-quartz-muted flex items-center gap-1"><Radio className="w-3.5 h-3.5 text-pink-neon" /> Inject Packet Broadcast</span>
              <span className="text-[9px] font-mono text-zinc-500">SECURE SHELL</span>
            </div>
            <textarea 
              placeholder="Transmit track waypoints, status logs, or coordinate arrays..." 
              className="w-full bg-slate-black border border-zinc-900 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-pink-neon/50 resize-none h-24 font-medium transition-colors"
            />
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5">
                <button type="button" className="p-2 bg-slate-black border border-zinc-900 rounded-lg text-quartz-muted hover:text-pink-neon transition-colors bg-transparent cursor-pointer">
                  <ImageIcon className="w-4 h-4" />
                </button>
                <button type="button" className="p-2 bg-slate-black border border-zinc-900 rounded-lg text-quartz-muted hover:text-electric-moss transition-colors bg-transparent cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
              <button type="button" className="bg-pink-neon text-slate-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-[0_4px_15px_rgba(255,20,147,0.3)] hover:brightness-110 active:scale-95 transition-all cursor-pointer">
                Transmit Packet <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </section>

        {/* PANEL RIGHT: STREAM PACKETS */}
        <section className="space-y-4 md:col-span-7 w-full">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-[10px] font-mono text-quartz-muted uppercase tracking-widest flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-pink-neon" /> Filtering Status Nodes: {filteredPackets.length}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">STREAM FEED STATUS: HEALTHY</span>
          </div>

          <div className="space-y-4 w-full">
            {filteredPackets.map((packet) => (
              <div 
                key={packet.id} 
                className={`bg-navy-surface/60 border p-6 rounded-2xl space-y-4 shadow-2xl transition-all duration-300 ${packet.badgeType === 'CRITICAL_ALERT' ? 'border-red-500/20 hover:border-red-500/40 bg-gradient-to-b from-red-500/5 to-transparent' : 'border-zinc-900/60 hover:border-pink-neon/20'}`}
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-black text-xs italic ${packet.badgeType === 'CRITICAL_ALERT' ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-zinc-900 border-zinc-800 text-electric-moss'}`}>
                      {packet.avatarInitials}
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-zinc-100 tracking-tight flex items-center gap-1.5">
                        {packet.callsign}
                        <span className="text-[10px] font-mono text-zinc-500 font-normal">• {packet.timestamp}</span>
                      </h3>
                      <p className="text-[10px] font-mono text-quartz-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-pink-neon" /> {packet.coordinates}
                      </p>
                    </div>
                  </div>
                  
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border tracking-widest uppercase ${
                    packet.badgeType === 'CRITICAL_ALERT' ? 'bg-red-500/20 border-red-500/30 text-red-400' :
                    packet.badgeType === 'TRAIL_BEACON' ? 'bg-electric-moss/10 border-electric-moss/20 text-electric-moss' :
                    'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  }`}>
                    {packet.badgeType.replace('_', ' ')}
                  </span>
                </div>

                <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-medium">
                  {packet.message}
                </p>

                {packet.mediaFile && (
                  <div className="w-full h-48 rounded-xl bg-slate-black border border-zinc-900/80 relative overflow-hidden flex items-center justify-center group shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent group-hover:from-blue-500/10 transition-all duration-300" />
                    
                    <div className="absolute top-3 left-4 font-mono text-[8px] text-blue-400 flex items-center gap-1 bg-slate-black/60 px-2 py-0.5 rounded border border-blue-500/20">
                      <Wifi className="w-3 h-3" /> INFRARED RELAY SCAN ON
                    </div>
                    
                    <div className="text-center space-y-2 z-10">
                      <ImageIcon className="w-6 h-6 text-zinc-700 mx-auto group-hover:text-blue-400 transition-colors" />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{packet.mediaFile}</span>
                    </div>
                    
                    <div className="absolute bottom-2.5 left-4 font-mono text-[9px] text-zinc-600">GRID POSITION REFERENCE: {packet.gridSector}</div>
                    <div className="absolute bottom-2.5 right-4 font-mono text-[9px] text-blue-400 bg-slate-black/60 px-1.5 py-0.5 rounded border border-zinc-900">ELEV: {packet.elevation}</div>
                  </div>
                )}

                <div className="flex items-center gap-4 bg-slate-black/30 border border-zinc-900/40 px-4 py-2 rounded-xl text-zinc-500 text-[10px] font-mono tracking-widest uppercase">
                  <span>SECTOR: {packet.gridSector}</span>
                  <span className="text-zinc-800">|</span>
                  <span>ALT: {packet.elevation}</span>
                </div>

                <div className="flex items-center gap-6 pt-3 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                  <button type="button" className="flex items-center gap-1.5 hover:text-pink-neon transition-colors bg-transparent border-0 cursor-pointer group">
                    <Heart className="w-4 h-4 group-active:scale-125 transition-transform" /> {packet.metrics.hearts}
                  </button>
                  <button type="button" className="flex items-center gap-1.5 hover:text-electric-moss transition-colors bg-transparent border-0 cursor-pointer">
                    <MessageSquare className="w-4 h-4" /> {packet.metrics.replies}
                  </button>
                  <button type="button" className="flex items-center gap-1.5 hover:text-quartz-pure transition-colors bg-transparent border-0 cursor-pointer ml-auto">
                    <Share2 className="w-4 h-4" /> Route Path
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* SMARTPHONE MINI NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-black/90 backdrop-blur-xl border-t border-zinc-900 px-6 py-4 flex justify-between items-center">
        <button type="button" className="flex flex-col items-center gap-1 text-electric-moss bg-transparent border-0">
          <span className="text-[10px] font-bold tracking-tight">Feed</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent border-0">
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Explore</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent border-0">
          <Shield className="w-5 h-5" />
          <span className="text-[10px] font-medium">Clan</span>
        </button>
        <button type="button" className="flex flex-col items-center gap-1 text-quartz-muted bg-transparent border-0">
          <Bookmark className="w-5 h-5" />
          <span className="text-[10px] font-medium">Saved</span>
        </button>
      </nav>

    </div>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}