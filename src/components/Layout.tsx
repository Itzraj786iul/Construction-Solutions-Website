import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, BarChart2, Info, Phone, Home, Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/terms', label: 'Terms', icon: Info },
  { path: '/prediction', label: 'Prediction', icon: Brain },
  { path: '/how-it-works', label: 'How It Works', icon: BarChart2 },
  { path: '/contact', label: 'Contact', icon: Phone },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <HardHat className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ConstructRisk AI</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex sm:space-x-8">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      location.pathname === path
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {label}
                  </Link>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ConstructRisk AI</h3>
              <p className="text-gray-400">
                Advanced AI-powered risk prediction for construction projects
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link to={path} className="text-gray-400 hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: raziullahansari483.gmail<br />
                Phone: +91 7233829678
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ConstructRisk AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}