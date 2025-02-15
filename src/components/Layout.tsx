import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, BarChart2, Info, Phone, Home, Brain, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <HardHat className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  ConstructRisk AI
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex sm:space-x-8">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                      location.pathname === path
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
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

      {/* Page Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Description */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ConstructRisk AI</h3>
              <p className="text-gray-400">
                AI-powered risk prediction for construction projects.  
                Predict and mitigate risks before they happen!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map(({ path, label }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-white transition duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-400 mb-3">
                📧 Email:  
                <a href="mailto:raziullahansari483@gmail.com" className="text-blue-400 hover:text-blue-500">
                  raziullahansari483@gmail.com
                </a>
              </p>
              <p className="text-gray-400">📞 Phone: +91 7233829678</p>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:raziullahansari483@gmail.com" className="text-gray-400 hover:text-blue-400 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ConstructRisk AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
