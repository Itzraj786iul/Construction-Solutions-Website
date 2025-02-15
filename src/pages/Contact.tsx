import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Get in touch with our team for any questions about our AI-powered risk prediction system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-6 h-6 mr-3" />
                <span>raziullahansari483@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-6 h-6 mr-3" />
                <span>+91 7233829678</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-6 h-6 mr-3" />
                <span>Construction Solutions , Amanakha ,NIT Raipur</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-6 text-white transition-colors">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Advanced AI-powered risk prediction
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Expert construction industry knowledge
               </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                24/7 technical support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Continuous system improvements
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 transition-colors">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}