import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  width = "100%",
  yOffset = 30, // How far down it starts
  duration = 0.8 
}) {
  const ref = useRef(null);
  
  // Trigger when 20% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // Beautiful, buttery smooth easing curve commonly used in premium sites
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }} 
      >
        {children}
      </motion.div>
    </div>
  );
}
