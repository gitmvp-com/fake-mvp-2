'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { User as UserIcon } from 'lucide-react';

const ProfilePage = () => {
  const { isAuthenticated, user, isLoading, logout } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-gray-50 dark:from-neutral-dark dark:to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-text-default dark:text-text-dark mb-2">
            My Profile
          </h1>
          <p className="text-text-light dark:text-gray-400">
            Manage your account information
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Card>
            <div className="flex items-center gap-6 mb-8">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full border-4 border-primary dark:border-primary-light"
              />
              <div>
                <h2 className="text-2xl font-bold text-text-default dark:text-text-dark">
                  {user.name}
                </h2>
                <p className="text-text-light dark:text-gray-400">{user.email}</p>
                <p className="text-sm text-text-light dark:text-gray-500 mt-1">
                  User ID: {user.id}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={user.email}
                    disabled
                  />
                  <div className="flex gap-2 pt-2">
                    <Button onClick={() => setIsEditing(false)} variant="primary">
                      Save Changes
                    </Button>
                    <Button onClick={() => setIsEditing(false)} variant="secondary">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-text-light dark:text-gray-400 mb-4">
                    Email: <span className="text-text-default dark:text-text-dark">{user.email}</span>
                  </p>
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="secondary"
                  >
                    Edit Profile
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-danger/20 bg-danger/5 dark:bg-danger/10">
            <h3 className="text-lg font-bold text-danger mb-2">Danger Zone</h3>
            <p className="text-danger/80 dark:text-danger/70 mb-4">
              Once you log out, you'll need to sign in again to access your account.
            </p>
            <Button
              onClick={handleLogout}
              variant="danger"
            >
              Logout
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
