import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { ReactNode } from 'react';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  message?: ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert = ({
  type = 'info',
  title,
  message,
  onClose,
  className = '',
}: AlertProps) => {
  const typeStyles = {
    info: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-700',
      icon: AlertCircle,
      iconColor: 'text-blue-600 dark:text-blue-400',
      titleColor: 'text-blue-900 dark:text-blue-100',
      messageColor: 'text-blue-800 dark:text-blue-200',
    },
    success: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-700',
      icon: CheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      titleColor: 'text-green-900 dark:text-green-100',
      messageColor: 'text-green-800 dark:text-green-200',
    },
    warning: {
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-700',
      icon: AlertTriangle,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      titleColor: 'text-yellow-900 dark:text-yellow-100',
      messageColor: 'text-yellow-800 dark:text-yellow-200',
    },
    error: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-700',
      icon: XCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      titleColor: 'text-red-900 dark:text-red-100',
      messageColor: 'text-red-800 dark:text-red-200',
    },
  };

  const style = typeStyles[type];
  const Icon = style.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`${style.bg} ${style.border} border rounded-lg p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          {title && (
            <h3 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h3>
          )}
          {message && (
            <p className={`text-sm ${style.messageColor}`}>{message}</p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`text-lg font-bold ${style.iconColor} hover:opacity-70 transition-opacity`}
          >
            ×
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default Alert;
