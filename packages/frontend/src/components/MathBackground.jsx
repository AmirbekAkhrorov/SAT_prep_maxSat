import { useEffect, useRef } from 'react';

const SYMBOLS = ['π', 'Σ', '∫', '∞', 'x²', '√', '∠', '±', 'Δ', 'θ'];
const GEOS = ['triangle', 'circle', 'square', 'hexagon', 'plus', 'diamond'];

function createParticle(w, pageH) {
  const isSymbol = Math.random() > 0.45;
  const pool = isSymbol ? SYMBOLS : GEOS;
  return {
    x: Math.random() * w,
    y: Math.random() * pageH,
    baseVx: (Math.random() - 0.5) * 0.35,
    baseVy: (Math.random() - 0.5) * 0.35,
    vx: 0,
    vy: 0,
    size: 14 + Math.random() * 26,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.006,
    baseOpacity: 0.12 + Math.random() * 0.13,
    opacity: 0,
    shape: pool[Math.floor(Math.random() * pool.length)],
    isSymbol,
  };
}

function drawShape(ctx, shape, size) {
  const s = size;
  switch (shape) {
    case 'triangle':
      ctx.beginPath();
      ctx.moveTo(0, -s / 2);
      ctx.lineTo(-s / 2, s / 2);
      ctx.lineTo(s / 2, s / 2);
      ctx.closePath();
      ctx.stroke();
      break;
    case 'circle':
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.stroke();
      break;
    case 'square':
      ctx.strokeRect(-s / 2, -s / 2, s, s);
      break;
    case 'hexagon':
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        if (i === 0) ctx.moveTo(Math.cos(a) * s / 2, Math.sin(a) * s / 2);
        else ctx.lineTo(Math.cos(a) * s / 2, Math.sin(a) * s / 2);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    case 'plus': {
      const t = s * 0.15;
      ctx.beginPath();
      ctx.moveTo(-t, -s / 2);
      ctx.lineTo(t, -s / 2);
      ctx.lineTo(t, -t);
      ctx.lineTo(s / 2, -t);
      ctx.lineTo(s / 2, t);
      ctx.lineTo(t, t);
      ctx.lineTo(t, s / 2);
      ctx.lineTo(-t, s / 2);
      ctx.lineTo(-t, t);
      ctx.lineTo(-s / 2, t);
      ctx.lineTo(-s / 2, -t);
      ctx.lineTo(-t, -t);
      ctx.closePath();
      ctx.stroke();
      break;
    }
    case 'diamond':
      ctx.beginPath();
      ctx.moveTo(0, -s / 2);
      ctx.lineTo(s / 3, 0);
      ctx.lineTo(0, s / 2);
      ctx.lineTo(-s / 3, 0);
      ctx.closePath();
      ctx.stroke();
      break;
    default:
      ctx.font = `${size * 1.1}px Georgia, "Times New Roman", serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(shape, 0, 0);
      break;
  }
}

export default function MathBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const pageHRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w, h };
    };

    const measurePage = () => {
      const newH = document.documentElement.scrollHeight;
      if (newH !== pageHRef.current) {
        pageHRef.current = newH;
        if (particlesRef.current.length === 0) {
          const w = window.innerWidth;
          const count = Math.max(40, Math.floor((w * newH) / 30000));
          particlesRef.current = Array.from({ length: count }, () =>
            createParticle(w, newH)
          );
        }
      }
    };

    resize();
    measurePage();
    window.addEventListener('resize', () => { resize(); measurePage(); });

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const REPEL_RADIUS = 140;
    const REPEL_FORCE = 2.5;
    const DAMPING = 0.94;
    const GLOW_RADIUS = 180;

    const animate = () => {
      const { w, h } = sizeRef.current;
      const pageH = pageHRef.current || h;
      const scrollY = window.scrollY;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const margin = 80;

      for (const p of particlesRef.current) {
        // Mouse repulsion (in page-space coordinates)
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 1) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
          p.rotSpeed += (Math.random() - 0.5) * 0.002;
        }

        // Glow when mouse is near
        const glowFactor =
          dist < GLOW_RADIUS ? 1 + ((GLOW_RADIUS - dist) / GLOW_RADIUS) * 2.5 : 1;
        p.opacity = p.baseOpacity * glowFactor;

        // Apply velocities (page-space)
        p.x += p.baseVx + p.vx;
        p.y += p.baseVy + p.vy;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.rotation += p.rotSpeed;
        p.rotSpeed *= 0.998;

        // Wrap edges (horizontally in viewport, vertically in page)
        if (p.x < -margin) p.x = w + margin;
        if (p.x > w + margin) p.x = -margin;
        if (p.y < -margin) p.y = pageH + margin;
        if (p.y > pageH + margin) p.y = -margin;

        // Only draw if within viewport (+ margin for smooth entry)
        const screenY = p.y - scrollY;
        if (screenY < -margin || screenY > h + margin) continue;

        // Draw at viewport-relative position
        ctx.save();
        ctx.translate(p.x, screenY);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        if (p.isSymbol) {
          ctx.fillStyle = '#d4a843';
          drawShape(ctx, p.shape, p.size);
        } else {
          ctx.strokeStyle = '#d4a843';
          ctx.lineWidth = 2;
          drawShape(ctx, p.shape, p.size);
        }

        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Measure page after images/fonts load
    window.addEventListener('load', measurePage);
    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('load', measurePage);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
