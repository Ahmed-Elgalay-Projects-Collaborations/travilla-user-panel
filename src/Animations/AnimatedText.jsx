import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText() {
  const [isVilla, setIsVilla] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVilla((prev) => !prev);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex gap-2 font-bold text-5xl w-fit m-auto mt-14  font-serif "
      >
        <span>With Travilla, book a</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={isVilla ? "villa" : "ticket"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="text-yellow-400"
          >
            {isVilla ? "villa" : "ticket"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    
  );
}
