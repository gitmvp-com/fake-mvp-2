import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

const Card = ({ children, hover = false, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`p-6 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-subtle ${
        hover ? 'hover:shadow-hover' : ''
      } transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
