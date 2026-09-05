'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LineWaves from './LineWaves';

export default function HeroSection() {
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const tiltInnerRef = useRef<HTMLDivElement>(null);
  const electricCanvasRef = useRef<HTMLCanvasElement>(null);
  const electricContainerRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  useEffect(() => {
    const card = tiltCardRef.current;
    const inner = tiltInnerRef.current;
    if (!card || !inner) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -12;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 12;
      inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    };
    const onLeave = () => {
      inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);

  // Electric Border Animation
  useEffect(() => {
    const container = electricContainerRef.current;
    const elCanvas = electricCanvasRef.current;
    if (!container || !elCanvas) return;
    const ctx = elCanvas.getContext('2d')!;
    const chaos = 0.12, borderRadius = 16, borderOffset = 60;
    let time = 0, lastFrameTime = 0, width = 0, height = 0;

    const random = (x: number) => (Math.sin(x * 12.9898) * 43758.5453) % 1;
    const noise2D = (x: number, y: number) => {
      const i = Math.floor(x), j = Math.floor(y), fx = x-i, fy = y-j;
      const a=random(i+j*57), b=random(i+1+j*57), c=random(i+(j+1)*57), d=random(i+1+(j+1)*57);
      const ux=fx*fx*(3-2*fx), uy=fy*fy*(3-2*fy);
      return a*(1-ux)*(1-uy)+b*ux*(1-uy)+c*(1-ux)*uy+d*ux*uy;
    };
    const octNoise = (x: number, t: number, seed: number) => {
      let y=0, amp=chaos, freq=10;
      for(let i=0;i<10;i++){y+=amp*noise2D(freq*x+seed*100,t*freq*0.3);freq*=1.6;amp*=0.7;}
      return y;
    };
    const getCorner = (cx: number, cy: number, r: number, sa: number, al: number, p: number) => ({x:cx+r*Math.cos(sa+p*al),y:cy+r*Math.sin(sa+p*al)});
    const getRectPoint = (t: number, l: number, top: number, w: number, h: number, r: number) => {
      const sw=w-2*r, sh=h-2*r, ca=(Math.PI*r)/2, perim=2*sw+2*sh+4*ca;
      const dist=t*perim; let acc=0;
      if(dist<=acc+sw){return{x:l+r+(dist-acc)/sw*sw,y:top};}acc+=sw;
      if(dist<=acc+ca){return getCorner(l+w-r,top+r,r,-Math.PI/2,Math.PI/2,(dist-acc)/ca);}acc+=ca;
      if(dist<=acc+sh){return{x:l+w,y:top+r+(dist-acc)/sh*sh};}acc+=sh;
      if(dist<=acc+ca){return getCorner(l+w-r,top+h-r,r,0,Math.PI/2,(dist-acc)/ca);}acc+=ca;
      if(dist<=acc+sw){return{x:l+w-r-(dist-acc)/sw*sw,y:top+h};}acc+=sw;
      if(dist<=acc+ca){return getCorner(l+r,top+h-r,r,Math.PI/2,Math.PI/2,(dist-acc)/ca);}acc+=ca;
      if(dist<=acc+sh){return{x:l,y:top+h-r-(dist-acc)/sh*sh};}acc+=sh;
      return getCorner(l+r,top+r,r,Math.PI,Math.PI/2,(dist-acc)/ca);
    };

    let animId: number;
    const render = (now: number) => {
      const dt = lastFrameTime ? (now - lastFrameTime) / 1000 : 0;
      lastFrameTime = now;
      time += dt * 0.4;
      const r = container.getBoundingClientRect();
      const nw = Math.round(r.width + borderOffset*2), nh = Math.round(r.height + borderOffset*2);
      if (nw !== width || nh !== height) {
        width = nw; height = nh;
        elCanvas.width = width * 2; elCanvas.height = height * 2;
        elCanvas.style.width = width + 'px'; elCanvas.style.height = height + 'px';
      }
      ctx.save();
      ctx.scale(2, 2);
      ctx.clearRect(0, 0, width, height);
      const l = borderOffset, top = borderOffset, w = r.width, h = r.height;
      const pts: {x:number,y:number}[] = [];
      const N = 100;
      for(let i=0;i<N;i++){
        const t = i/N;
        const pt = getRectPoint(t,l,top,w,h,borderRadius);
        const cx=l+w/2, cy=top+h/2;
        const dx=pt.x-cx, dy=pt.y-cy, dist=Math.hypot(dx,dy)||1;
        const disp = octNoise(t,time,1)*24;
        pts.push({x:pt.x+dx/dist*disp,y:pt.y+dy/dist*disp});
      }
      ctx.beginPath();
      ctx.moveTo(pts[0].x,pts[0].y);
      for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i].x,pts[i].y);
      ctx.closePath();
      ctx.strokeStyle = '#dc2626';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#dc2626';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
      animId = requestAnimationFrame(render);
    };
    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      {/* Dynamic Background Effect */}
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          lineCount={35}
          lineColor="#200505"
          waveAmplitude={0.8}
          waveFrequency={0.003}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={1.5}
          color1="#ff0000"
          color2="#ff4444"
          color3="#ff0000"
          enableMouseInteraction
          mouseInfluence={2}
          className="w-full h-full absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-transparent to-dark-primary pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-duration="1200">
            <div ref={tiltCardRef} className="tilt-card cursor-pointer">
              <div ref={tiltInnerRef} className="tilt-card-inner relative">
                <div
                  ref={electricContainerRef}
                  className="relative overflow-visible isolate mx-auto"
                  style={{ '--electric-border-color': '#dc2626', borderRadius: '24px' } as React.CSSProperties}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2]">
                    <canvas ref={electricCanvasRef} className="block" />
                  </div>
                  <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0">
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: '2px solid rgba(220,38,38,0.5)', filter: 'blur(1px)' }} />
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: '1px solid #dc2626', filter: 'blur(3px)' }} />
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none -z-[1] scale-[1.05] opacity-20" style={{ filter: 'blur(30px)', background: 'linear-gradient(-30deg,#dc2626,transparent,#dc2626)' }} />
                  </div>
                  <div className="relative rounded-[inherit] z-[1] overflow-hidden bg-dark-secondary w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[360px] lg:h-[480px] shadow-2xl shadow-black/50">
                    <Image
                      src={require('../../public/images/hero-photo.png')}
                      alt="Muhammad Rafli Aolia Ansori — Portrait"
                      fill
                      className="object-cover object-top filter contrast-[1.05] brightness-95"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-primary via-dark-primary/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Typography & Metric Badges (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            {/* Status Pill Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects & Engineering Roles</span>
            </div>

            <h1
              className="flex flex-col text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                MUHAMMAD RAFLI
              </span>
              <span className="block mt-1 sm:mt-2">
                AOLIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]">ANSORI</span>
              </span>
            </h1>
            
            <p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed font-normal">
              UI/UX Designer & Front-End Developer bridging human-centered interfaces with resilient, performant web architectures. Delivering enterprise-grade municipal portals and bespoke brand solutions.
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-3 gap-6 sm:gap-10 border-y border-neutral-800/80 py-5 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  3+
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  Years Design & Dev
                </div>
              </div>
              <div className="border-x border-neutral-800/80 px-4 sm:px-6">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  100%
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  Delivery Rate
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Gov & Retail
                </div>
                <div className="text-[11px] sm:text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                  Sector Experience
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollTo('#projects')}
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Featured Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              
              <button
                onClick={() => scrollTo('#experience')}
                className="px-6 py-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white text-sm font-semibold border border-neutral-800 hover:border-neutral-700 transition-all duration-300"
              >
                View Track Record
              </button>

              <a
                href="https://www.linkedin.com/in/muhammadrafliaoliaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
