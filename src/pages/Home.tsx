import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90 rounded-3xl" />
        <div className="relative px-8 py-20 text-center text-white rounded-3xl" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            AI-Powered Construction Risk Prediction
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Harness the power of artificial intelligence to predict and mitigate construction project risks
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/prediction"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Try Prediction
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How AI Enhances Construction Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: 'Risk Assessment',
              description: 'Advanced algorithms analyze project data to identify potential risks before they occur'
            },
            {
              icon: Clock,
              title: 'Time Optimization',
              description: 'AI-driven scheduling optimizes project timelines and reduces delays'
            },
            {
              icon: Users,
              title: 'Resource Management',
              description: 'Smart allocation of workforce and equipment for maximum efficiency'
            },
            {
              icon: TrendingUp,
              title: 'Cost Prediction',
              description: 'Accurate cost forecasting using historical data and market trends'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Construction Risk Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join leading construction companies using AI to predict and prevent project risks
        </p>
        <Link
          to="/prediction"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your Risk Analysis
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}