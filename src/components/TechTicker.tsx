'use client';

import React from 'react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function TechTicker() {
  const stack: TechItem[] = [
    {
      name: 'Laravel',
      icon: (
        <svg className="w-5 h-5 text-[#FF2D20] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.2 2.2a.6.6 0 0 0-.6.4L5.1 8.7a.6.6 0 0 0 .3.8l4.8 2.2a.6.6 0 0 0 .8-.3l2.5-6.1a.6.6 0 0 0-.3-.8L8.4 2.3a.6.6 0 0 0-.2-.1zm8.3 4.2a.6.6 0 0 0-.6.3l-2.5 5.2a.6.6 0 0 0 .3.8l4.4 2.1a.6.6 0 0 0 .8-.3l2.5-5.2a.6.6 0 0 0-.3-.8l-4.4-2.1a.6.6 0 0 0-.2 0zm-8.8 8.4l-4.2-2a.6.6 0 0 0-.8.3l-2.4 5.3a.6.6 0 0 0 .3.8l4.2 2a.6.6 0 0 0 .8-.3l2.4-5.3a.6.6 0 0 0-.3-.8zm7.1 2.3l-4.7-2.3a.6.6 0 0 0-.8.3l-2.4 5.2a.6.6 0 0 0 .3.8l4.7 2.3a.6.6 0 0 0 .8-.3l2.4-5.2a.6.6 0 0 0-.3-.8z" />
        </svg>
      ),
    },
    {
      name: 'Figma',
      icon: (
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
          <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
          <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-5 h-5 text-[#38BDF8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'Adobe Photoshop',
      icon: (
        <div className="w-5 h-5 rounded bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-black text-[#31A8FF] leading-none">Ps</span>
        </div>
      ),
    },
    {
      name: 'CorelDRAW',
      icon: (
        <div className="w-5 h-5 rounded bg-[#107C41] border border-[#23c56d]/40 flex items-center justify-center shrink-0">
          <span className="text-[10px] font-black text-white leading-none">Cd</span>
        </div>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <div className="w-5 h-5 rounded bg-[#F7DF1E] flex items-center justify-end p-0.5 shrink-0">
          <span className="text-[10px] font-black text-black leading-none pr-0.5">JS</span>
        </div>
      ),
    },
    {
      name: 'PHP',
      icon: (
        <svg className="w-5 h-5 text-[#777BB4] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.6 13.3h-1.4l.4-2.1h1.3c1.1 0 1.9-.4 2.2-1.2.3-.8.1-1.5-.7-1.5h-1.5l-.8 4.8zm-5.5 0h-1.4l.8-4.8h1.8c1.1 0 1.8.5 1.5 1.5-.2 1-1 1.7-1.9 1.7h-.9l-.3 1.6z" />
        </svg>
      ),
    },
    {
      name: 'Java',
      icon: (
        <svg className="w-5 h-5 text-[#E76F00] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 4.254.144 5.922-.206 0 0 .571.367 1.343.682-5.466 2.148-11.41-.054-7.918-1.19zm-1.026-3.232s-1.036.714.733.923c2.316.273 5.753.228 8.163-.335 0 0 .378.47 1.05.748-6.98 2.216-14.184.227-9.946-1.336zm8.983-4.706c.394 1.32-.477 2.505-1.973 3.425.867-.184 1.758-.517 2.378-.962 1.353-.969 1.378-2.023-.405-2.463zm-3.69-7.469c.849 1.164-.265 2.544-1.288 3.82 1.055-.916 2.053-2.096 1.288-3.82z" />
        </svg>
      ),
    },
    {
      name: 'C Language',
      icon: (
        <div className="w-5 h-5 rounded-full bg-[#00599C] flex items-center justify-center shrink-0">
          <span className="text-[10px] font-black text-white leading-none">C</span>
        </div>
      ),
    },
    {
      name: 'Git & GitHub',
      icon: (
        <svg className="w-5 h-5 text-[#F05032] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8l2.97 2.97c-.2.53-.13 1.15.22 1.63.36.48.96.73 1.55.67v3.86c-.59.06-1.19.31-1.55.79-.58.78-.42 1.88.36 2.46.78.58 1.88.42 2.46-.36.46-.61.46-1.44.02-2.06v-3.72c.43-.09.84-.33 1.14-.73.47-.63.47-1.48.02-2.11l2.84-2.84c.63.45 1.48.45 2.11-.02.78-.58.94-1.68.36-2.46-.58-.78-1.68-.94-2.46-.36-.45.34-.7.86-.7 1.41l-2.82 2.82c-.3-.1-.62-.13-.94-.07L10.3 3.65a1.86 1.86 0 0 0-2.63 0L2.6 8.72c-.73.73-.73 1.91 0 2.64.01-.27 0-.77 0-.77z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative border-y border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md overflow-hidden py-4 select-none">
      {/* Subtle edge fade gradient for seamless look */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap items-center">
        {[...stack, ...stack, ...stack].map((tech, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-5 sm:mx-7 px-3.5 py-1.5 rounded-full bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all duration-300"
          >
            {tech.icon}
            <span className="text-sm font-semibold text-neutral-200 tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
