'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-light dark:bg-neutral-dark border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-primary dark:text-primary-light mb-3">
              Fake MVP 2
            </h3>
            <p className="text-text-light dark:text-gray-400 text-sm">
              A minimal viable product showcasing modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-default dark:text-text-dark mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/auth/register" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-text-default dark:text-text-dark mb-3">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-text-default dark:text-text-dark mb-3">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-text-default dark:text-text-dark hover:bg-primary dark:hover:bg-primary-light hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-light dark:text-gray-400 text-sm">
              © {currentYear} Fake MVP 2. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-text-light dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
