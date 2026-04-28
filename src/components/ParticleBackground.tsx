import { useEffect, useRef } from 'react';
 
 interface Particle {
   x: number;
   y: number;
   baseX: number;
   baseY: number;
   radius: number;
   hue: number;
   saturation: number;
   lightness: number;
   alpha: number;
   speedX: number;
   speedY: number;
   offsetX: number;
   offsetY: number;
   type: 'orb' | 'star';
 }
 
 const ParticleBackground = () => {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const animationRef = useRef<number>();
   const timeRef = useRef(0);
   const particlesRef = useRef<Particle[]>([]);
   const mouseRef = useRef({ x: 0, y: 0, active: false });
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
 
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
 
     const resizeCanvas = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
 
     const initParticles = () => {
       const w = canvas.width;
       const h = canvas.height;
       const particles: Particle[] = [];
 
       // Large Orbs
       const orbConfigs = [
         { x: w * 0.15, y: h * 0.3,  radius: w * 0.35, hue: 190, s: 95, l: 45, a: 0.22, sx: 0.0004, sy: 0.0003, ox: 0,   oy: 0 },
         { x: w * 0.8,  y: h * 0.7,  radius: w * 0.3,  hue: 185, s: 90, l: 50, a: 0.18, sx: 0.0003, sy: 0.0005, ox: 1.5, oy: 2.0 },
         { x: w * 0.7,  y: h * 0.2,  radius: w * 0.28, hue: 270, s: 80, l: 45, a: 0.2,  sx: 0.0005, sy: 0.0002, ox: 3.0, oy: 1.0 },
         { x: w * 0.25, y: h * 0.75, radius: w * 0.32, hue: 260, s: 75, l: 40, a: 0.17, sx: 0.0002, sy: 0.0004, ox: 4.5, oy: 3.5 },
         { x: w * 0.5,  y: h * 0.5,  radius: w * 0.22, hue: 220, s: 85, l: 50, a: 0.12, sx: 0.0003, sy: 0.0003, ox: 2.0, oy: 2.5 },
       ];
 
       orbConfigs.forEach(conf => {
         particles.push({
           x: conf.x, y: conf.y, baseX: conf.x, baseY: conf.y,
           radius: conf.radius, hue: conf.hue, saturation: conf.s, lightness: conf.l, alpha: conf.a,
           speedX: conf.sx, speedY: conf.sy, offsetX: conf.ox, offsetY: conf.oy,
           type: 'orb'
         });
       });
 
       // Small Stars
       const starCount = Math.floor((w * h) / 15000); // Responsive density
       for (let i = 0; i < starCount; i++) {
         const x = Math.random() * w;
         const y = Math.random() * h;
         particles.push({
           x, y, baseX: x, baseY: y,
           radius: Math.random() * 1.5 + 0.5,
           hue: Math.random() > 0.5 ? 190 : 260,
           saturation: 80, lightness: 80, alpha: Math.random() * 0.4 + 0.2,
           speedX: (Math.random() - 0.5) * 0.05,
           speedY: (Math.random() - 0.5) * 0.05,
           offsetX: Math.random() * 10, offsetY: Math.random() * 10,
           type: 'star'
         });
       }
 
       particlesRef.current = particles;
     };
 
     const drawParticle = (p: Particle, t: number) => {
       if (!ctx || !canvas) return;
 
       let cx = p.x;
       let cy = p.y;
 
       // Movement logic
       if (p.type === 'orb') {
         cx = p.baseX + Math.sin(t * p.speedX + p.offsetX) * (canvas.width * 0.15);
         cy = p.baseY + Math.cos(t * p.speedY + p.offsetY) * (canvas.height * 0.12);
       } else {
         p.baseX += p.speedX;
         p.baseY += p.speedY;
         
         // Wrap around
         if (p.baseX < 0) p.baseX = canvas.width;
         if (p.baseX > canvas.width) p.baseX = 0;
         if (p.baseY < 0) p.baseY = canvas.height;
         if (p.baseY > canvas.height) p.baseY = 0;
 
         cx = p.baseX;
         cy = p.baseY;
       }
 
       // Mouse Interaction
       if (mouseRef.current.active) {
         const dx = mouseRef.current.x - cx;
         const dy = mouseRef.current.y - cy;
         const distance = Math.sqrt(dx * dx + dy * dy);
         const maxDistance = p.type === 'orb' ? 300 : 150;
         
         if (distance < maxDistance) {
           const force = (maxDistance - distance) / maxDistance;
           cx -= dx * force * 0.1;
           cy -= dy * force * 0.1;
         }
       }
 
       // Draw
       if (p.type === 'orb') {
         const currentHue = (p.hue + t * 0.01) % 360;
         const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, p.radius);
         gradient.addColorStop(0, `hsla(${currentHue}, ${p.saturation}%, ${p.lightness}%, ${p.alpha})`);
         gradient.addColorStop(0.5, `hsla(${currentHue}, ${p.saturation}%, ${p.lightness - 5}%, ${p.alpha * 0.4})`);
         gradient.addColorStop(1, `hsla(${currentHue}, ${p.saturation}%, ${p.lightness - 10}%, 0)`);
         ctx.fillStyle = gradient;
         ctx.beginPath();
         ctx.arc(cx, cy, p.radius, 0, Math.PI * 2);
         ctx.fill();
       } else {
         ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${p.alpha * (Math.sin(t * 0.02 + p.offsetX) * 0.5 + 0.5)})`;
         ctx.beginPath();
         ctx.arc(cx, cy, p.radius, 0, Math.PI * 2);
         ctx.fill();
       }
     };
 
     const animate = () => {
       if (!ctx || !canvas) return;
       timeRef.current += 1;
       const t = timeRef.current;
 
       ctx.globalCompositeOperation = 'source-over';
       ctx.fillStyle = '#02040a';
       ctx.fillRect(0, 0, canvas.width, canvas.height);
 
       ctx.globalCompositeOperation = 'screen';
       particlesRef.current.forEach(p => drawParticle(p, t));
 
       animationRef.current = requestAnimationFrame(animate);
     };
 
     const handleMouseMove = (e: MouseEvent) => {
       mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
     };
 
     const handleMouseLeave = () => {
       mouseRef.current.active = false;
     };
 
     resizeCanvas();
     initParticles();
     animate();
 
     window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
     window.addEventListener('mousemove', handleMouseMove);
     window.addEventListener('mouseleave', handleMouseLeave);
 
     return () => {
       if (animationRef.current) cancelAnimationFrame(animationRef.current);
       window.removeEventListener('resize', resizeCanvas);
       window.removeEventListener('mousemove', handleMouseMove);
       window.removeEventListener('mouseleave', handleMouseLeave);
     };
   }, []);
 
   return (
     <div className="fixed inset-0 z-0 pointer-events-none">
       <canvas ref={canvasRef} className="w-full h-full" />
       <div
         className="absolute inset-0 opacity-[0.03] pointer-events-none"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
           backgroundRepeat: 'repeat',
           backgroundSize: '128px 128px',
         }}
       />
     </div>
   );
 };
 
 export default ParticleBackground;
