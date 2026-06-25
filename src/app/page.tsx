"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2, 
  MapPin, Activity, ShieldAlert, SlidersHorizontal, Image as ImageIcon, Wifi,
  Compass, Shield, Bookmark, User, Bell, Eye, Database, Battery
} from 'lucide-react';

// TypeScript Data Model for advanced tactical packets
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
  // Signal priority filter state switching logic
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ALERTS' | 'WAYPOINTS' | 'COMMS'>('ALL');

  // Hardcoded telemetry array simulating live relational database pipelines (Neon/PostgreSQL)
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

  // Filtering filter matrix logic
  const filteredPackets = feedPackets.filter(packet => {
    if (activeFilter === 'ALERTS') return packet.badgeType === 'CRITICAL_ALERT';
    if (activeFilter === 'WAYPOINTS') return packet.badgeType === 'TRAIL_BEACON';
    if (activeFilter === 'COMMS') return packet.badgeType === 'SATELLITE_INTEL';
    return true;
  });

  return (
    <div className="w-full min-h-screen bg-slate-black text-quartz-pure pb-24 md:pb-12 relative font-sans antialiased selection:bg-pink-neon selection:text-slate-black">
      
      {/* 1. STRUCTURAL GLOBAL NAVIGATION FRAME */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-slate-black/80 backdrop-blur-md px-6 lg:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-3 h-3 rounded-full bg-pink-neon shadow-[0_0_12px_#ff1493] animate-pulse" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-electric-moss animate-ping" />
            Node-Alpha Connected
          </div>
          <button type="button" className="flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
            <User className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* BACKGROUND GRAPHIC INTERFACE BLOOM */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-navy-surface/40 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* 2. LIVE DATA MARQUEE STATUS TICKERS */}
      <section className="w-full bg-navy-surface/30 border-b border-zinc-900 overflow-hidden py-2.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-none text-[10px] font-mono tracking-wider text-quartz-muted">
          <div className="flex items-center gap-2 text-pink-neon shrink-0">
            <Bell className="w-3.5 h-3.5 animate-bounce" />
            <span className="font-bold uppercase">WEATHER ALERT:</span>
          </div>
          <div className="animate-marquee inline-flex gap-8">
            <span>[SEC-4 NORTH] EXT-WIND WARNING // EXP-VEL 52KTS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-electric-moss">[SYS-CORE] ALL POST RELAYS STABLE // LATENCY: 14MS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-quartz-pure">[MISSION DOCK] 3 ACTIVE EXPEDITIONS TRACKED IN SECTOR-E</span>
            <span className="text-zinc-600">•</span>
            <span>[BAROMETRIC] PRESSURE GRADIENT DROPPING FROM 1012HPA</span>
          </div>
        </div>
      </section>

      {/* 3. SIGNAL PRIORITY NAVIGATION CONTROL SUB-BAR */}
      <div className="w-full border-b border-zinc-900 bg-slate-black/60 backdrop-blur-sm sticky top-[69px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2 min-w-max">
            <button 
              type="button" 
              onClick={() => setActiveFilter('ALL')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all cursor-pointer ${activeFilter === 'ALL' ? 'bg-pink-neon/10 text-pink-neon border border-pink-neon/30' : 'text-quartz-muted hover:text-quartz-pure bg-transparent border border-transparent'}`}
            >
              All Signals
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('ALERTS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${activeFilter === 'ALERTS' ? 'bg-red-500/10 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]' : 'text-quartz-muted hover:text-red-400 bg-transparent border border-transparent'}`}
            >
              <ShieldAlert className="w-3.5 h-3.5" /> SOS / Alerts
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('WAYPOINTS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${activeFilter === 'WAYPOINTS' ? 'bg-electric-moss/10 text-electric-moss border border-electric-moss/30' : 'text-quartz-muted hover:text-electric-moss bg-transparent border border-transparent'}`}
            >
              <MapPin className="w-3.5 h-3.5" /> Waypoints
            </button>
            <button 
              type="button" 
              onClick={() => setActiveFilter('COMMS')}
              className={`text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${activeFilter === 'COMMS' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' : 'text-quartz-muted hover:text-blue-400 bg-transparent border border-transparent'}`}
            >
              <Radio className="w-3.5 h-3.5" /> Comms Data
            </button>
          </div>
          <button type="button" className="text-quartz-muted hover:text-quartz-pure flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest cursor-pointer min-w-max bg-transparent border-0">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Sync Config
          </button>
        </div>
      </div>

      {/* CORE CONTENT APPLICATION CANVAS INTERFACE GRID */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* ==================== PANEL LEFT: COMMAND CONTROL CONSOLE ==================== */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-36">
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-electric-moss flex items-center gap-2">
              <Database className="w-4 h-4" /> System Control Manifest
            </h2>
            <p className="text-xs text-quartz-muted leading-relaxed">
              Log off-grid data, track environmental sensor packets, and manage tactical communications across active sectors.
            </p>
          </div>

          {/* TELEMETRY READOUT HUD ELEMENT */}
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

          {/* BROADCAST TRANSMISSION PACKET CREATOR */}
          <div className="bg-navy-surface/80 border border-zinc-800/60 rounded-2xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-quartz-muted flex items-center gap-1"><Radio className="w-3.5 h-3.5 text-pink-neon animate-pulse" /> Inject Packet Broadcast</span>
              <span className="text-[9px] font-mono text-zinc-500">SECURE SHELL</span>
            </div>
            <textarea 
              placeholder="Transmit track waypoints, status logs, or coordinate arrays..." 
              className="w-full bg-slate-black border border-zinc-900 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-pink-neon/50 resize-none h-24 font-medium transition-colors"
            />
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1