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

    const updateSize = () => {
      const rw = container.offsetWidth, rh = container.offsetHeight;
      const w = rw+borderOffset*2, h = rh+borderOffset*2;
      const dpr = Math.min(window.devicePixelRatio||1,2);
      elCanvas.width=w*dpr; elCanvas.height=h*dpr;
      elCanvas.style.width=`${w}px`; elCanvas.style.height=`${h}px`;
      ctx.scale(dpr,dpr); return{w,h};
    };
    const s = updateSize(); width=s.w; height=s.h;

    let raf: number;
    const draw = (currentTime: number) => {
      const dpr = Math.min(window.devicePixelRatio||1,2);
      time += ((currentTime-lastFrameTime)/1000); lastFrameTime=currentTime;
      ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,elCanvas.width,elCanvas.height); ctx.scale(dpr,dpr);
      ctx.strokeStyle='#dc2626'; ctx.lineWidth=1; ctx.lineCap='round'; ctx.lineJoin='round';
      const l=borderOffset, t=borderOffset, bw=width-2*borderOffset, bh=height-2*borderOffset;
      const maxR=Math.min(bw,bh)/2, r=Math.min(borderRadius,maxR);
      const perim=2*(bw+bh)+2*Math.PI*r, count=Math.floor(perim/2);
      ctx.beginPath();
      for(let i=0;i<=count;i++){
        const p=i/count, pt=getRectPoint(p,l,t,bw,bh,r);
        const dx=octNoise(p*8,time,0)*60, dy=octNoise(p*8,time,1)*60;
        if(i===0)ctx.moveTo(pt.x+dx,pt.y+dy); else ctx.lineTo(pt.x+dx,pt.y+dy);
      }
      ctx.closePath(); ctx.stroke();
      raf=requestAnimationFrame(draw);
    };
    raf=requestAnimationFrame(draw);

    const ro = new ResizeObserver(()=>{const s=updateSize();width=s.w;height=s.h;});
    ro.observe(container);
    return ()=>{cancelAnimationFrame(raf);ro.disconnect();};
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg animate-zoom-in"
    >
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Photo */}
          <div className="flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-duration="1200">
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
                  <div className="relative rounded-[inherit] z-[1] overflow-hidden bg-dark-secondary w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] lg:w-[380px] lg:h-[500px] shadow-2xl shadow-black/50">
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

          {/* Right — Text */}
          <div className="text-center lg:text-left mt-4 lg:mt-0 flex flex-col items-center lg:items-start z-10">
            <h1
              className="flex flex-col text-[5.5vw] sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight text-white leading-[1.1]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block animate-p1 text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 whitespace-nowrap">
                MUHAMMAD RAFLI
              </span>
              <span className="block animate-p1 mt-1 lg:mt-2 whitespace-nowrap">
                AOLIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">ANSORI</span>
              </span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-white/90 max-w-lg leading-relaxed font-medium animate-p2 text-center lg:text-left">
              UI/UX Designer & Front-End Developer. Crafting Digital Public Services & Modern Web Interfaces with precision and aesthetics.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}
