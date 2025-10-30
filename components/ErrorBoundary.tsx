'use client';

import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { motion } from 'framer-motion';
import Button from './Button';
import { AlertTriangle } from 'lucide-react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light to-gray-50 dark:from-neutral-dark dark:to-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-danger/10 rounded-full">
            <AlertTriangle className="w-12 h-12 text-danger" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-text-default dark:text-text-dark mb-2">
          Something went wrong
        </h1>

        <p className="text-text-light dark:text-gray-400 mb-4">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 text-left">
          <p className="text-xs text-text-light dark:text-gray-500 font-mono overflow-auto max-h-32">
            {error.stack}
          </p>
        </div>

        <Button onClick={resetErrorBoundary} fullWidth>
          Try again
        </Button>
      </motion.div>
    </div>
  );
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function AppErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}

export default AppErrorBoundary;
