import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ValentineSite = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [showLetter, setShowLetter] = useState(false);
  const [yesPressed, setYesPressed] = useState(false);

  // Floating Hearts Animation Background
  const hearts = Array.from({ length: 20 });

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    setNoButtonPos({ x, y });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#5D4037] overflow-x-hidden font-serif">
      {/* Background Music (Hidden) */}
      <div className="hidden">
        <iframe 
          src="https://www.youtube.com/embed/3AyMjyHu1bA?autoplay=1&loop=1&playlist=3AyMjyHu1bA" 
          allow="autoplay"
          title="bg-music"
        ></iframe>
      </div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 1, 0],
              x: Math.random() * 100 + 'vw' 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 20 
            }}
            className="absolute text-pink-200 text-2xl"
          >
            ❤
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-[#FFB7B2]"
        >
          For My Favorite Person
        </motion.h1>
        <button 
          onClick={() => setShowLetter(true)}
          className="mt-8 px-8 py-3 bg-[#FFDAC1] rounded-full hover:bg-[#FFB7B2] transition-colors shadow-sm"
        >
          Open Letter
        </button>
      </section>

      {/* Typewriter Letter Section */}
      <AnimatePresence>
        {showLetter && (
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto p-8 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl m-6"
          >
            <motion.p 
              className="text-lg leading-relaxed italic border-r-2 border-[#FFB7B2] overflow-hidden whitespace-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              "Every moment with you feels like a dream, you've made my life infinitely brighter. I built this small space just to remind you how much you mean to me... 😮‍💨💝 "
            </motion.p>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Gallery Grid */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-10 text-[#FFB7B2]">Our Memories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "https://i.ibb.co/B5HRjBk3/image1.jpg", 
            "https://i.ibb.co/hJKxcWH2/image2.jpg",
            "https://i.ibb.co/HLvs5W8J/image3.jpg",
            "https://i.ibb.co/p6jxS4Vs/image4.jpg",
            "https://i.ibb.co/TB2vQC10/image5.jpg"
          ].map((url, i) => (
            <motion.div 
              key={url}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="aspect-[4/5] bg-white rounded-xl overflow-hidden shadow-lg border-8 border-white"
            >
              <img 
                src={url} 
                alt={`Memory ${i + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://picsum.photos/400/500'; }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Question (Interactive Section) */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        {!yesPressed ? (
          <>
            <h2 className="text-4xl font-bold mb-12 px-4 text-center">Will you be my Valentine?</h2>
            <div className="flex gap-8 items-center justify-center w-full">
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={() => setYesPressed(true)}
                className="bg-green-300 px-10 py-4 rounded-full text-white font-bold text-xl shadow-lg z-10"
              >
                Yes!
              </motion.button>
              
              <motion.button
                animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="bg-red-300 px-10 py-4 rounded-full text-white font-bold text-xl absolute transition-none"
                style={{ 
                  position: noButtonPos.x === 0 ? 'relative' : 'fixed',
                  left: noButtonPos.x === 0 ? 'auto' : '0',
                  top: noButtonPos.x === 0 ? 'auto' : '0'
                }}
              >
                No
              </motion.button>
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <h2 className="text-6xl font-bold text-[#FFB7B2]">Yay! I love you! ❤️</h2>
            <p className="mt-4 italic text-2xl">See you soon!</p>
          </motion.div>
        )}
      </section>

      <footer className="text-center py-10 opacity-50 text-sm">
        Made with love for you.
      </footer>
    </div>
  );
};

export default ValentineSite;
