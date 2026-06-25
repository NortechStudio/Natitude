import React from 'react';
import { 
  ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2, 
  MapPin, Activity, ShieldAlert, SlidersHorizontal, Image, Wifi
} from 'lucide-react';

export default function LiveFeedTab() {
  return (
    <div className="w-full min-h-screen relative bg-[#050506]">
      
      {/* IMMERSIVE ATMOSPHERIC BACKDROP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0f172a]/40 via-[#050506]/10 to-transparent -z-10 pointer-events-none" />

      {/* SUB-HEADER CONTROLS (Responsive Grid Wrapper) */}
      <div className="w-full border-b border-zinc-900 bg-[#050506]/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center justify-between overflow-x-auto gap-4">
          
          {/* FEED FILTER SWITCHES */}
          <div className="flex items-center gap-2 min-w-max">
            <button className="bg-[#ff1493]/10 text-[#ff1493] border border-[#ff1493]/30 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full cursor-pointer">
              Global Stream
            </button>
            <button className="text-zinc-400 hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full transition-colors cursor-pointer">
              My Clan
            </button>
            <button className="text-zinc-400 hover:text-[#ccff00] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer">
              <ShieldAlert className="w-3.5 h-3.5" /> Alerts
            </button>
          </div>

          {/* SYSTEM TUNER CONTROLS */}
          <button className="text-zinc-500 hover:text-white flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer min-w-max">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Config
          </button>
        </div>
      </div>

      {/* MAIN WORKSPACE LAYOUT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* ==================== LEFT COLUMN: STATION STATS & BROADCASTER ==================== */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-24">
          
          {/* HUB IDENTITY BADGE */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#0f172a] px-3 py-1 rounded-full border border-zinc-800/80">
              <Flame className="w-3.5 h-3.5 text-[#ff1493] shadow-[0_0_8px_#ff1493]" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">Node Cluster Alpha</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight uppercase italic leading-[0.9]">
              Live <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ccff00]">
                Telemetry.
              </span>
            </h1>
            <p className="text-xs lg:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Real-time tactical entries, encrypted satellite check-ins, and emergency track beacons broadcast directly from the field.
            </p>
          </div>

          {/* TELEMETRY DASHBOARD QUICK CARD */}
          <div className="bg-[#0f172a]/40 border border-zinc-900 p-4 rounded-2xl grid grid-cols-2 gap-3">
            <div className="bg-[#050506]/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1"><MapPin className="w-3 h-3 text-[#ff1493]" /> Position</span>
              <p className="text-xs font-mono font-bold text-zinc-200">46.5402° N, 10.9811° E</p>
            </div>
            <div className="bg-[#050506]/60 border border-zinc-800/40 p-3 rounded-xl space-y-1">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1"><Activity className="w-3 h-3 text-[#ccff00]" /> Network</span>
              <p className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-1"><Wifi className="w-3 h-3 text-[#ccff00]" /> SAT-LINK 99%</p>
            </div>
          </div>

          {/* BROADCAST CONSOLE INPUT ENGINE */}
          <div className="bg-[#0f172a]/80 border border-zinc-800/60 rounded-2xl p-4 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Compose Broadcast</span>
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            </div>
            
            <textarea 
              placeholder="Transmit coordinate updates or safety logs..." 
              className="w-full bg-[#050506] border border-zinc-900 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#ff1493]/60 resize-none h-24 transition-colors font-medium"
            />
            
            <div className="flex items-center justify-between pt-1">
              {/* COMPONENT INTERACTION ATTACHMENT SHORTCUTS */}
              <div className="flex items-center gap-2">
                <button className="p-2 bg-[#050506] border border-zinc-900 rounded-lg text-zinc-500 hover:text-[#ff1493] transition-colors cursor-pointer">
                  <Image className="w-4 h-4" />
                </button>
                <button className="p-2 bg-[#050506] border border-zinc-900 rounded-lg text-zinc-500 hover:text-[#ccff00] transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
              
              <button className="bg-[#ff1493] text-[#050506] text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,20,147,0.2)] hover:brightness-110">
                Transmit Packet <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </section>

        {/* ==================== RIGHT COLUMN: CHRONOLOGICAL STREAM ==================== */}
        <section className="space-y-4 md:col-span-7 w-full">
          
          {/* FEED META CONTROL */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#ff1493] animate-pulse" /> Live System Telemetry Stream
            </h2>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PACKETS: OPTIMAL</span>
          </div>

          {/* CONSOLIDATED POST STREAM */}
          <div className="space-y-4 w-full">
            
            {/* STREAM POST ENTRY: 01 (TEXT ONLY) */}
            <div className="bg-[#0f172a]/70 border border-zinc-800/40 p-6 rounded-2xl space-y-4 shadow-xl hover:border-zinc-800 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-xs text-[#ccff00] italic">
                    AX
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-100 tracking-tight">Alex_Nortech</h3>
                    <p className="text-[10px] font-mono text-zinc-500">Altitude: 2,430m • 12m ago</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20 tracking-widest uppercase">
                  TRAIL BEACON
                </span>
              </div>
              <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-medium">
                Base camp architecture successfully deployed. Next.js 15 layout structures are routing cleanly across local grid structures. Preparing high-altitude survey data loops now.
              </p>
              <div className="flex items-center gap-6 pt-3 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                <button className="flex items-center gap-1.5 hover:text-[#ff1493] transition-colors cursor-pointer group">
                  <Heart className="w-4 h-4 group-active:scale-125 transition-transform" /> 24
                </button>
                <button className="flex items-center gap-1.5 hover:text-[#ccff00] transition-colors cursor-pointer">
                  <MessageSquare className="w-4 h-4" /> 8
                </button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto">
                  <Share2 className="w-4 h-4" /> Route Path
                </button>
              </div>
            </div>

            {/* STREAM POST ENTRY: 02 (WITH DATA MEDIA CANVAS CAPTURE) */}
            <div className="bg-[#0f172a]/70 border border-zinc-800/40 p-6 rounded-2xl space-y-4 shadow-xl hover:border-zinc-800 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-xs text-[#ff1493] italic">
                    NT
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-100 tracking-tight">Natitude_Ops</h3>
                    <p className="text-[10px] font-mono text-zinc-500">Altitude: 3,110m • 2h ago</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold bg-[#ff1493]/10 text-[#ff1493] px-2 py-0.5 rounded border border-[#ff1493]/20 tracking-widest uppercase">
                  SATELLITE INTEL
                </span>
              </div>
              
              <p className="text-xs lg:text-sm text-zinc-300 leading-relaxed font-medium">
                High-resolution infrared route scanning completed along the north ridge perimeter. Severe ice pack consolidation verified above 3,000 meters. 
              </p>

              {/* SIMULATED MEDIA / TOPO-MAP CANVAS GRAPHIC */}
              <div className="w-full h-48 rounded-xl bg-[#050506] border border-zinc-900 relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-radial from-[#ff1493]/5 to-transparent group-hover:from-[#ff1493]/10 transition-all duration-300" />
                <div className="text-center space-y-2 z-10">
                  <Image className="w-6 h-6 text-zinc-700 mx-auto group-hover:text-[#ff1493] transition-colors" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Infrared_Topo_Route_04.dat</span>
                </div>
                {/* Simulated coordinate geometric grid lines overlay */}
                <div className="absolute bottom-2 right-3 font-mono text-[9px] text-zinc-600">Grid: E-04</div>
              </div>

              <div className="flex items-center gap-6 pt-3 border-t border-zinc-900 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                <button className="flex items-center gap-1.5 hover:text-[#ff1493] transition-colors cursor-pointer group">
                  <Heart className="w-4 h-4 group-active:scale-125 transition-transform" /> 142
                </button>
                <button className="flex items-center gap-1.5 hover:text-[#ccff00] transition-colors cursor-pointer">
                  <MessageSquare className="w-4 h-4" /> 31
                </button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto">
                  <Share2 className="w-4 h-4" /> Route Path
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}