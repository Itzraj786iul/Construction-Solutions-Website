import React from 'react';
import { motion } from 'framer-motion';
import { Database, GitBranch, Brain, BarChart2 } from 'lucide-react';

const steps = [
  {
    icon: Database,
    title: 'Data Collection',
    description: 'We gather historical construction project data including timelines, costs, risks, and outcomes.',
    details: [
      'Project metrics and KPIs',
      'Historical risk incidents',
      'Resource allocation data',
      'Environmental factors'
    ]
  },
  {
    icon: GitBranch,
    title: 'Feature Engineering',
    description: 'Our system processes and transforms raw data into meaningful features for analysis.',
    details: [
      'Risk factor identification',
      'Pattern recognition',
      'Correlation analysis',
      'Data normalization'
    ]
  },
  {
    icon: Brain,
    title: 'Model Training',
    description: 'Advanced machine learning algorithms learn from historical patterns to predict future risks.',
    details: [
      'Neural network architecture',
      'Gradient boosting',
      'Ensemble methods',
      'Model validation'
    ]
  },
  {
    icon: BarChart2,
    title: 'Prediction Process',
    description: 'Real-time analysis of project data to generate accurate risk predictions and recommendations.',
    details: [
      'Risk probability calculation',
      'Severity assessment',
      'Mitigation suggestions',
      'Continuous monitoring'
    ]
  }
];

export default function HowItWorks() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How Our AI Works</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Understanding the technology behind our construction risk prediction system
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900" />
        
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex ${index % 2 === 0 ? 'justify-end' : ''} mb-8`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : ''} mb-4`}>
                  <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  <h2 className={`text-2xl font-semibold text-gray-900 dark:text-white ${index % 2 === 0 ? 'mr-3' : 'ml-3'}`}>
                    {step.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-600 dark:bg-blue-800 rounded-xl p-8 text-white transition-colors">
        <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
        <p className="text-lg mb-6">
          Our AI system continuously learns and improves from new project data and outcomes, ensuring increasingly accurate predictions over time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Self-learning algorithms',
            'Regular model updates',
            'Performance monitoring'
          ].map((feature, index) => (
            <div key={index} className="bg-blue-700 dark:bg-blue-900 rounded-lg p-4 text-center">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}