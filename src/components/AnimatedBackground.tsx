"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Particle } from "@/state/types";

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 8 + Math.random() * 20, // Increased size range
        opacity: 0.4 + Math.random() * 0.4, // Increased opacity
        duration: 12 + Math.random() * 12, // Slightly longer duration
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)", // More distinct blue tones
        "linear-gradient(135deg,rgb(134, 239, 225) 0%, #93c5fd 100%)",
        "linear-gradient(135deg,rgb(137, 239, 182) 0%, #dbeafe 100%)",
      ],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 -z-20 overflow-hidden" 
      animate={controls}
    >
      <div className="absolute inset-0" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white shadow-sm" 
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [`0%`, `${(Math.random() - 0.5) * 200}%`],
            y: [`0%`, `${(Math.random() - 0.5) * 200}%`],
            opacity: [particle.opacity, particle.opacity * 0.6, particle.opacity],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse" as const,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedBackground;