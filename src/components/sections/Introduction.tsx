import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Introduction() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Je transforme des idées en applications web performantes.', 'Développeur Full Stack passionné.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center px-4"
      >
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto shadow-xl"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">John Doe</h1>
        <h2 className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">Développeur Full Stack Senior</h2>
        <div className="h-16 mb-8">
          <span ref={el} className="text-lg text-gray-600 dark:text-gray-300"></span>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          <FileDown className="w-5 h-5 mr-2" />
          Télécharger CV
        </motion.button>
      </motion.div>
    </section>
  );
}