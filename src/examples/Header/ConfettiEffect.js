import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const ConfettiEffect = ({ isActive = false }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Generate confetti pieces
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        rotation: Math.random() * 360,
        color: [
          "#FF6B6B",
          "#4ECDC4",
          "#45B7D1",
          "#96CEB4",
          "#FFEAA7",
          "#DDA0DD",
          "#FFD93D",
          "#6BCF7F",
        ][Math.floor(Math.random() * 8)],
        size: Math.random() * 10 + 5,
        delay: Math.random() * 2,
      }));

      setConfetti(pieces);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          style={{
            position: "absolute",
            left: piece.x,
            top: piece.y,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: "50%",
            zIndex: 9999,
          }}
          animate={{
            y: [piece.y, window.innerHeight + 100],
            x: [piece.x, piece.x + (Math.random() - 0.5) * 200],
            rotation: [piece.rotation, piece.rotation + 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </Box>
  );
};

export default ConfettiEffect;
