'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Lock, Palette } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: Lock,
      title: 'Fake Authentication',
      description: 'Simple local authentication - no backend needed',
    },
    {
      icon: Palette,
      title: 'Dark Mode',
      description: 'Smooth theme switching with system preference support',
    },
    {
      icon: Zap,
      title: 'Animated UI',
      description: 'Beautiful animations powered by Framer Motion',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-gray-50 dark:from-neutral-dark dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-accent/10 dark:bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{ y: [0, -100, 0], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
      >
        {/* Main Content */}
        <div className="text-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold text-text-default dark:text-text-dark mb-6 leading-tight">
              Welcome to
              <span className="block text-primary dark:text-primary-light mt-2">
                Fake MVP 2
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-text-light dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            A minimal viable product showcasing authentication, dark mode, animations, and
            a responsive dashboard - all without backend complexity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary dark:bg-primary-light text-white dark:text-black rounded-lg font-semibold hover:bg-primary-dark dark:hover:bg-primary transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/register"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary dark:border-primary-light text-primary dark:text-primary-light rounded-lg font-semibold hover:bg-primary/10 dark:hover:bg-primary-light/10 transition-colors"
              >
                Register Now
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-subtle hover:shadow-hover transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 dark:bg-primary-light/20 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-lg font-semibold text-text-default dark:text-text-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-light dark:text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
