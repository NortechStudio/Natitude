import React from 'react';
import Link from 'next/link';

/**
 * Global Landing Workspace Page Router Node
 */
export default function HomePage() {
  return (
    <div className="space-y-6 animate-fade-in pt-4">
      {/* Structural Brand Banner Hero */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -mr-8 -mt-8" />
        
        <h2 className="text-2xl font-bold tracking-tight text-white font-sans">Welcome to Natitude</h2>
        <p className="text-sm text-slate-400 mt-2 max-w-xs">
          Your full-stack mobile workstation workspace environment is successfully connected.
        </p>
      </div>

      {/* Quick Action Navigation Testing Hub Layout (Rule 4: Clear CTAs) */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-1">Quick Links</h3>
        
        <div className="grid grid-cols-1 gap-2">
          {[
            { name: 'Primary Core Feed', path: '/feed', desc: 'Queries and lists content posts.', status: 'Ready' },
            { name: 'Discovery & Explore', path: '/explore', desc: 'Search engine framework matrix.', status: 'Ready' },
            { name: 'The Clubhouse / Tribe', path: '/clubhouse', desc: 'Secure membership validation wall.', status: 'Ready' },
          ].map((route) => (
            <Link 
              key={route.path} 
              href={route.path}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 transition-all active:scale-[0.99] group"
            >
              <div>
                <p className="text-sm font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">{route.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{route.desc}</p>
              </div>
              <span className="text-[10px] bg-teal-950 text-teal-400 font-medium px-2 py-0.5 rounded-full border border-teal-900/30">
                {route.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}