import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FloatingButton = () => {
  const [showButton, setShowButton] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Assuming each page is 100vh tall
      if (scrollY >= window.innerHeight && scrollY < window.innerHeight * 4) {
        setShowButton(true);
        controls.start({
          opacity: 1,
          y: 0,
          scale: 1.1, // Scale effect when appearing
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 20,
          scale: 1, // Reset scale when hiding
          transition: { type: 'spring', stiffness: 300, damping: 20 },
        });
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <>
      {showButton && (
        <motion.button
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded-full"
          animate={controls}
          initial={{ opacity: 0, y: 20, scale: 0.8 }} // Start small
        >
          GET STARTED
        </motion.button>
      )}
    </>
  );
};

export default FloatingButton;
