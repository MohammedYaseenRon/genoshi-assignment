import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Confetti: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; size: number }>>([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100,
        color: ['#FFC700', '#FF0000', '#2E3CFF', '#00C6FF', '#00FF47'][Math.floor(Math.random() * 5)],
        size: 5 + Math.random() * 10,
      }));
      
      setParticles(newParticles);
      
      const timeout = setTimeout(() => {
        setParticles([]);
      }, 3000);
      
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{ 
              left: particle.x,
              top: particle.y,
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size
            }}
            initial={{ y: -20, opacity: 1 }}
            animate={{ 
              y: window.innerHeight + 50,
              x: particle.x + (Math.random() * 200 - 100),
              opacity: 0,
              rotate: Math.random() * 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};