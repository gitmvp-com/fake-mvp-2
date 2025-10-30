'use client';

import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Sun, Moon, LogOut, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const TopBar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-40 bg-neutral-light dark:bg-neutral-dark border-b border-gray-200 dark:border-gray-700 shadow-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors"
          >
            Fake MVP 2
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-2 bg-primary dark:bg-primary-light text-white dark:text-black rounded-lg hover:bg-primary-dark dark:hover:bg-primary transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* User Menu or Auth Button */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-3">
                <img
                  src={user?.avatar}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </motion.button>
              </div>
            ) : null}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700"
          >
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="block py-2 text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block py-2 text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left py-2 text-danger hover:text-danger-light transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="block py-2 text-text-default dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block py-2 text-primary dark:text-primary-light hover:text-primary-dark dark:hover:text-primary transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default TopBar;
