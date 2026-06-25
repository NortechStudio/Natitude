import React from 'react';
import { ArrowUpRight, Flame, Radio, MessageSquare, Heart, Share2 } from 'lucide-react';

export default function LiveFeedTab() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background radial atmosphere glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#0f172a]/50 via-transparent to-transparent -z-10 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 lg:px-16 pt-8 md:pt-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Telemetry Console Overview */}
        <section className="space-y-6 md:col-span-5 md:sticky md:top-28">
          <div className="inline-flex items-center gap-2 bg-[#0f172a] px-3 py-1 rounded-full border border-zinc-800">
            <Flame className="w-3.5 h-3.5 text-[#ff1493]" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">Live Stream Engine</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black tracking-tight uppercase italic leading-[0.9]">
            Alpine <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] to-[#ccff00]">
              Telemetry.
            </span>
          </h1>
          <p className="text-sm text-zinc-400 max-w-sm">
            Real-time status configurations, off-grid trail coordinates, and satellite check-ins directly from the expedition team.
          </p>

          {/* QUICK BROADCAST COMPONENT INPUT FRAME */}
          <div className="bg-[#0f172a]/60 border border-zinc-800/80 rounded-2xl p-4 space-y-3">
            <textarea 
              placeholder="Broadcast coordinate status to the clan..." 
              className="w-full bg-[#050506] border border-zinc-800/60 rounded-xl p-3 text-xs focus:outline-none focus:border-[#ff1493]/60 resize-none h-20 text-zinc-200"
            />
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500">GPS: DISCONNECTED</span>
              <button className="bg-[#ff1493] text-[#050506] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer">
                Transmit <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: Chronological Feed Post Stream */}
        <section className="space-y-4 md:col-span-7 w-full">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#ccff00] flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#ff1493] animate-pulse" /> Live Status Stream
            </h2>
            <span className="text-[10px] font-mono text-zinc-500">PACKETS: OPTIMAL</span>
          </div>

          <div className="space-y-4">
            {/* DUMMY FEED CARD 1 */}
            <div className="bg-[#0f172a] border border-zinc-800/40 p-6 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs text-[#ccff00]">AX</div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100">Alex_Nortech</h3>
                    <p className="text-[10px] font-mono text-zinc-500">Altitude: 2,430m • 12 mins ago</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20">TRAIL HEAD</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Base camp framework completely deployed. Next.js 15 routing configs successfully compiled over local cell arrays. Preparing high-altitude ascent routes now.
              </p>
              <div className="flex items-center gap-6 pt-2 border-t border-zinc-900 text-zinc-500 text-xs">
                <button className="flex items-center gap-1.5 hover:text-[#ff1493] transition-colors cursor-pointer"><Heart className="w-4 h-4" /> 24</button>
                <button className="flex items-center gap-1.5 hover:text-[#ccff00] transition-colors cursor-pointer"><MessageSquare className="w-4 h-4" /> 8</button>
                <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"><Share2 className="w-4 h-4" /> Route</button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}