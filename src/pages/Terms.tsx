import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, Users, Truck, Brain } from 'lucide-react';

const terms = [
  {
    icon: AlertTriangle,
    title: 'Project Risks',
    description: 'Common risks in construction projects including supply chain disruptions, cost overruns, and workforce shortages.',
    details: [
      'Supply Chain Disruptions: Delays in material delivery and availability',
      'Cost Overruns: Unexpected expenses and budget exceedances',
      'Workforce Shortages: Lack of skilled labor and management issues',
      'Weather Impacts: Delays due to adverse weather conditions',
    ]
  },
  {
    icon: Truck,
    title: 'Supply Chain Resilience',
    description: 'Strategies and methods to maintain a robust and reliable supply chain for construction materials.',
    details: [
      'Multiple Supplier Networks: Diversifying supplier relationships',
      'Buffer Stock Management: Maintaining optimal inventory levels',
      'Real-time Tracking: Monitoring material movement and availability',
      'Alternative Materials: Identifying suitable substitutes when needed',
    ]
  },
  {
    icon: Users,
    title: 'Workforce & Equipment',
    description: 'Optimization of labor and machinery resources for maximum project efficiency.',
    details: [
      'Skill Matrix Management: Matching workers to appropriate tasks',
      'Equipment Utilization: Optimal scheduling of machinery',
      'Training Programs: Continuous workforce development',
      'Safety Protocols: Maintaining workplace safety standards',
    ]
  },
  {
    icon: Brain,
    title: 'Predictive Risk Analysis',
    description: 'How machine learning models analyze historical data to predict and prevent potential risks.',
    details: [
      'Data Collection: Gathering relevant project metrics',
      'Pattern Recognition: Identifying risk indicators',
      'Probability Assessment: Calculating likelihood of risks',
      'Mitigation Strategies: Recommended preventive actions',
    ]
  }
];

export default function Terms() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4">Understanding Construction Risk</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn about key terms and concepts in construction risk management and how AI helps predict and prevent potential issues.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {terms.map((term, index) => (
          <motion.div
            key={term.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors"
          >
            <div className="flex items-center mb-4">
              <term.icon className="w-8 h-8 text-blue-500 dark:text-blue-300 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">{term.title}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{term.description}</p>
            <ul className="space-y-2">
              {term.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-300 mr-2 mt-1" />
                  <span className="text-gray-800 dark:text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-500 dark:bg-blue-700 rounded-xl p-8 text-white transition-colors">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-medium">How does AI improve risk prediction accuracy?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-gray-200">AI analyzes vast amounts of historical project data to identify patterns and correlations that humans might miss. This enables more accurate risk predictions based on multiple factors and their complex interactions.</p>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <span className="font-medium">What types of risks can be predicted?</span>
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-gray-200">Our system can predict various risks including schedule delays, cost overruns, safety incidents, quality issues, and resource shortages. The AI model continuously learns from new data to improve its predictions.</p>
          </details>
        </div>
      </div>
    </div>
  );
}
