import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) => {
  const variantStyles = {
    default: 'bg-gray-200 dark:bg-gray-700 text-text-default dark:text-text-dark',
    primary: 'bg-primary/20 dark:bg-primary-light/20 text-primary dark:text-primary-light',
    success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    danger: 'bg-danger/20 text-danger dark:text-danger-light',
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-block rounded-full font-semibold ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
