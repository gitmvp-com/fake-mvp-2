'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { TrendingUp, Users, Activity, Zap } from 'lucide-react';

const DashboardPage = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary dark:border-primary-light mx-auto mb-4"></div>
          <p className="text-text-light dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: '1,234',
      change: '+12.5%',
    },
    {
      icon: Activity,
      label: 'Active Sessions',
      value: '456',
      change: '+8.2%',
    },
    {
      icon: TrendingUp,
      label: 'Growth Rate',
      value: '23.5%',
      change: '+4.3%',
    },
    {
      icon: Zap,
      label: 'Performance',
      value: '98.5%',
      change: '+2.1%',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-gray-50 dark:from-neutral-dark dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-text-default dark:text-text-dark mb-2">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-text-light dark:text-gray-400">
            Here's an overview of your dashboard activity
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/20 dark:bg-primary-light/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary dark:text-primary-light" />
                    </div>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-text-light dark:text-gray-400 text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-text-default dark:text-text-dark">
                    {stat.value}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <Card>
            <h2 className="text-2xl font-bold text-text-default dark:text-text-dark mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {[
                { action: 'Logged in successfully', time: '2 minutes ago' },
                { action: 'Updated profile information', time: '1 hour ago' },
                { action: 'Viewed dashboard analytics', time: '3 hours ago' },
                { action: 'Theme switched to dark mode', time: '5 hours ago' },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  <div>
                    <p className="text-text-default dark:text-text-dark font-medium">
                      {activity.action}
                    </p>
                    <p className="text-sm text-text-light dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                  <div className="w-2 h-2 bg-primary dark:bg-primary-light rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
