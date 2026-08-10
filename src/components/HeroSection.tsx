'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const tiltCardRef = useRef<HTMLDivElement>(null);
  const tiltInnerRef = useRef<HTMLDivElement>(null);
  const plasmaCanvasRef = useRef<HTMLCanvasElement>(null);
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

  // WebGL Plasma Background
  useEffect(() => {
    const canvas = plasmaCanvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) return;

    const vSrc = `#version 300 es\nin vec2 position;\nvoid main(){gl_Position=vec4(position,0.0,1.0);}`;
    const fSrc = `#version 300 es
precision highp float;
uniform vec2 iResolution;uniform float iTime;
uniform float uMorphAmount,uBands,uThickness,uScale,uGlow,uContrast,uBrightness,uOpacity,uGrain,uGrainIntensity;
uniform vec4 uCtrlA,uCtrlB,uCtrlC,uCtrlD;
uniform vec3 uLow,uMid,uHigh;
out vec4 fragColor;
float bez(float t,vec4 c){float w=6.2831853*t;return 0.5*(c.x*sin(w)+c.y*cos(w)+c.z*sin(2.0*w)+c.w*cos(2.0*w));}
float field(vec2 uv){vec2 a=vec2(bez(uv.x,uCtrlA),bez(uv.x,uCtrlB));vec2 b=vec2(bez(uv.y,uCtrlC),bez(uv.y,uCtrlD));return distance(a,b);}
vec3 elevColor(float e){vec3 c=mix(uLow,uMid,smoothstep(0.0,0.5,e));return mix(c,uHigh,smoothstep(0.5,1.0,e));}
void main(){
  vec2 uv=gl_FragCoord.xy/iResolution.xy;
  vec2 suv=(uv-0.5)/max(uScale,0.001)+0.5;
  float fv=field(suv);
  float f=fv*uBands;float frac=fract(f);float lineDist=min(frac,1.0-frac);
  float aa=fwidth(f)+0.0001;
  float mask=1.0-smoothstep(uThickness-aa,uThickness+aa,lineDist);
  float glowR=uThickness+uGlow*0.5+aa;
  float glow=(1.0-smoothstep(uThickness,glowR,lineDist))*step(0.0001,uGlow);
  float elev=clamp(fv/(uMorphAmount*2.5+0.001),0.0,1.0);
  vec3 lineCol=elevColor(elev);
  float coverage=clamp(mask+glow*0.55,0.0,1.0);
  coverage=pow(coverage,max(uContrast,0.001));
  vec3 outColor=lineCol*uBrightness;
  float outAlpha=coverage;
  if(uGrain>0.5){float g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233))+iTime)*43758.5453);outAlpha+=(g-0.5)*uGrainIntensity;}
  float a=clamp(outAlpha,0.0,1.0)*uOpacity;
  fragColor=vec4(clamp(outColor,0.0,1.0)*a,a);
}`;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src); gl.compileShader(s); return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fSrc));
    gl.linkProgram(prog); gl.useProgram(prog);

    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const L = (n: string) => gl.getUniformLocation(prog, n);
    const rgb = (h: string) => { const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h)!; return [parseInt(r[1],16)/255, parseInt(r[2],16)/255, parseInt(r[3],16)/255]; };
    const [lo, mi, hi] = [rgb('#ff0000'), rgb('#ed0000'), rgb('#ffffff')];

    gl.uniform1f(L('uMorphAmount'), 3.0); gl.uniform1f(L('uBands'), 1.0);
    gl.uniform1f(L('uThickness'), 0.01); gl.uniform1f(L('uScale'), 2.0);
    gl.uniform1f(L('uGlow'), 0.5); gl.uniform1f(L('uContrast'), 3.0);
    gl.uniform1f(L('uBrightness'), 0.85); gl.uniform1f(L('uOpacity'), 1.0);
    gl.uniform1f(L('uGrain'), 1.0); gl.uniform1f(L('uGrainIntensity'), 0.22);
    gl.uniform3f(L('uLow'), lo[0], lo[1], lo[2]);
    gl.uniform3f(L('uMid'), mi[0], mi[1], mi[2]);
    gl.uniform3f(L('uHigh'), hi[0], hi[1], hi[2]);

    const uTime = L('iTime'), uRes = L('iResolution');
    const ctrlLocs = [L('uCtrlA'), L('uCtrlB'), L('uCtrlC'), L('uCtrlD')];
    const CTRL = [[1,-2,3,-4],[9,-8,7,-6],[5,2,5,-5],[-1,-3,8,9]];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize); resize();

    const t0 = performance.now();
    let raf: number;
    const loop = (t: number) => {
      const time = (t - t0) * 0.001;
      gl.uniform1f(uTime, time);
      for (let g = 0; g < 4; g++) {
        const arr = new Float32Array(4);
        for (let j = 0; j < 4; j++) { const i = CTRL[g][j]; arr[j] = 3.0 * Math.sin(time * 0.8 * Math.sin(i * 0.05) + i); }
        gl.uniform4fv(ctrlLocs[g], arr);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
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
      <div className="absolute inset-0 red-ambient pointer-events-none" />
      <canvas ref={plasmaCanvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary via-transparent to-dark-primary pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Photo */}
          <div className="flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-duration="1200">
            <div ref={tiltCardRef} className="tilt-card cursor-pointer">
              <div ref={tiltInnerRef} className="tilt-card-inner relative">
                <div
                  ref={electricContainerRef}
                  className="relative overflow-visible isolate"
                  style={{ '--electric-border-color': '#dc2626', borderRadius: '16px' } as React.CSSProperties}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2]">
                    <canvas ref={electricCanvasRef} className="block" />
                  </div>
                  <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0">
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: '2px solid rgba(220,38,38,0.6)', filter: 'blur(1px)' }} />
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none" style={{ border: '2px solid #dc2626', filter: 'blur(4px)' }} />
                    <div className="absolute inset-0 rounded-[inherit] pointer-events-none -z-[1] scale-110 opacity-30" style={{ filter: 'blur(32px)', background: 'linear-gradient(-30deg,#dc2626,transparent,#dc2626)' }} />
                  </div>
                  <div className="relative rounded-[inherit] z-[1] overflow-hidden bg-dark-secondary w-[280px] h-[370px] sm:w-[380px] sm:h-[500px]">
                    <Image
                      src="/images/hero-photo.png"
                      alt="Muhammad Rafli Aolia Ansori — Portrait"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-primary/80 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="text-center lg:text-left mt-8 lg:mt-0">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="block animate-p1">MUHAMMAD RAFLI</span>
              <span className="block animate-p1">AOLIA <span className="text-red-500">ANSORI</span></span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal animate-p2">
              UI/UX Designer & Front-End Developer<br />
              <span className="text-neutral-500">Crafting Digital Public Services & Modern Web Interfaces</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
