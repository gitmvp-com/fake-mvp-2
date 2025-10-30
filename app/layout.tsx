'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-neutral-light dark:bg-neutral-dark text-text-default dark:text-text-dark transition-colors duration-300">
        <ThemeProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <TopBar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
