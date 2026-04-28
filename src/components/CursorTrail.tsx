import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
  hue: number; // Color shift across the trail
}

const MAX_TRAILS = 18;

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const trailIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = trailIdRef.current++;
      // Hue shifts from Cyan (190) to Purple (270) as the trail ID cycles
      const hue = 190 + ((id % MAX_TRAILS) / MAX_TRAILS) * 80;

      const newTrail: Trail = { id, x: e.clientX, y: e.clientY, hue };
      setTrails((prev) => [...prev, newTrail].slice(-MAX_TRAILS));
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trails.map((trail, index) => {
          const progress = index / MAX_TRAILS; // 0 = oldest, 1 = newest
          const size = 6 + progress * 8; // Grows from 6px to 14px toward the cursor

          return (
            <motion.div
              key={trail.id}
              initial={{ opacity: 0.7, scale: 1 }}
              animate={{ opacity: 0, scale: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: trail.x - size / 2,
                top: trail.y - size / 2,
                width: size,
                height: size,
                background: `radial-gradient(circle, hsla(${trail.hue}, 95%, 65%, 0.9), hsla(${trail.hue}, 95%, 45%, 0))`,
                boxShadow: `0 0 ${8 + progress * 12}px hsla(${trail.hue}, 95%, 55%, ${0.3 + progress * 0.4})`,
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Main Cursor Orb — mirrors the background orbs */}
      {trails.length > 0 && (
        <motion.div
          className="absolute pointer-events-none rounded-full z-50"
          animate={{
            x: (trails[trails.length - 1]?.x ?? 0) - 12,
            y: (trails[trails.length - 1]?.y ?? 0) - 12,
          }}
          transition={{ duration: 0.05, ease: 'linear' }}
          style={{
            width: 24,
            height: 24,
            background: 'radial-gradient(circle, hsla(190, 95%, 70%, 0.95), hsla(220, 90%, 55%, 0.4) 60%, transparent 100%)',
            boxShadow: `
              0 0 12px hsla(190, 95%, 55%, 0.8),
              0 0 30px hsla(190, 90%, 50%, 0.3),
              0 0 60px hsla(270, 80%, 50%, 0.15)
            `,
          }}
        />
      )}
    </div>
  );
};

export default CursorTrail;

