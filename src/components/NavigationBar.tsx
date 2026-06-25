"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, ShieldAlert, User, Bookmark } from 'lucide-react';

/**
 * Definition interface mapping our navigation route attributes.
 */
interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Ergonomic Bottom Navigation Bar Component
 * Pins 5 application touch targets to the bottom of the screen layout.
 */
export default function NavigationBar() {
  const pathname = usePathname();

  // Array containing our 5 essential mobile tabs
  const navItems: NavigationItem[] = [
    { label: 'Feed', href: '/feed', icon: Home },
    { label: 'Explore', href: '/explore', icon: Compass },
    { label: 'Tribe', href: '/clubhouse', icon: ShieldAlert },
    { label: 'Saved', href: '/saved', icon: Bookmark },
    { label: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-t border-slate-900 px-2 pb-safe-bottom">
      <div className="max-w-md mx-auto flex justify-between items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Determine if the tab matches the current URL path string
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 h-full py-2 group transition-all"
            >
              <div className="relative flex flex-col items-center justify-center">
                {/* Visual Icon Indicator with active color states */}
                <Icon 
                  className={`w-5 h-5 transition-transform duration-200 group-active:scale-90 ${
                    isActive 
                      ? 'text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]' 
                      : 'text-slate-500 group-hover:text-slate-300'
                  }`} 
                />
                
                {/* Text Label Anchor */}
                <span className={`text-[10px] font-medium mt-1 tracking-wide transition-colors ${
                  isActive ? 'text-teal-400 font-semibold' : 'text-slate-500'
                }`}>
                  {item.label}
                </span>

                {/* Subtle active underline accent bubble */}
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-teal-400 animate-fade-in" />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}