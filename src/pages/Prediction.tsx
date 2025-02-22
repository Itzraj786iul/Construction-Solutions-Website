import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info } from 'lucide-react';
import type { RiskPredictionInput, RiskPrediction } from '../types';

const initialInput: RiskPredictionInput = {
  projectSize: 'medium',
  duration: 12,
  workforceAvailability: 80,
  supplyChainStability: 'medium',
  materialCostVolatility: 'medium',
  projectComplexity: 'medium',
};

// Helper function to calculate risk score based on inputs
const calculateRiskScore = (input: RiskPredictionInput): number => {
  let score = 0;
  
  // Project size factor
  switch (input.projectSize) {
    case 'small': score += 10; break;
    case 'medium': score += 20; break;
    case 'large': score += 30; break;
  }
  
  // Duration factor (longer projects are riskier)
  score += Math.min(30, input.duration * 1.5);
  
  // Workforce availability factor (lower availability increases risk)
  score += Math.max(0, (100 - input.workforceAvailability) * 0.5);
  
  // Supply chain stability factor
  switch (input.supplyChainStability) {
    case 'low': score += 30; break;
    case 'medium': score += 15; break;
    case 'high': score += 5; break;
  }
  
  // Material cost volatility factor
  switch (input.materialCostVolatility) {
    case 'low': score += 5; break;
    case 'medium': score += 15; break;
    case 'high': score += 30; break;
  }
  
  // Project complexity factor
  switch (input.projectComplexity) {
    case 'low': score += 5; break;
    case 'medium': score += 20; break;
    case 'high': score += 35; break;
  }
  
  return score;
};

// Generate recommendations based on input factors
const generateRecommendations = (input: RiskPredictionInput, score: number): string[] => {
  const recommendations: string[] = [];
  
  if (input.workforceAvailability < 70) {
    recommendations.push(`Increase workforce allocation by ${Math.round((70 - input.workforceAvailability) * 1.5)}%`);
  }
  
  if (input.materialCostVolatility === 'high') {
    recommendations.push('Implement material cost hedging strategies');
    recommendations.push('Establish contracts with multiple suppliers to mitigate cost risks');
  }
  
  if (input.supplyChainStability === 'low') {
    recommendations.push('Develop backup supply chain routes');
    recommendations.push('Maintain higher inventory levels for critical materials');
  }
  
  if (input.projectComplexity === 'high') {
    recommendations.push('Break down the project into smaller, manageable phases');
    recommendations.push('Implement additional quality control checkpoints');
  }
  
  if (input.duration > 18) {
    recommendations.push('Consider a phased delivery approach');
    recommendations.push('Establish quarterly project review milestones');
  }
  
  // Always return at least 2 recommendations
  if (recommendations.length < 2) {
    recommendations.push('Maintain regular project status monitoring');
    recommendations.push('Document and track all project changes');
  }
  
  // Return 3-5 recommendations
  return recommendations.slice(0, Math.min(5, Math.max(3, recommendations.length)));
};

export default function Prediction() {
  const [input, setInput] = useState<RiskPredictionInput>(initialInput);
  const [prediction, setPrediction] = useState<RiskPrediction | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const riskScore = calculateRiskScore(input);
    
    // Determine risk level and probability based on score
    let riskLevel: 'low' | 'medium' | 'high';
    let probability: number;
    
    if (riskScore < 60) {
      riskLevel = 'low';
      probability = Math.round((riskScore / 60) * 100);
    } else if (riskScore < 100) {
      riskLevel = 'medium';
      probability = Math.round(((riskScore - 60) / 40) * 100);
    } else {
      riskLevel = 'high';
      probability = Math.round(Math.min(((riskScore - 100) / 50) * 100 + 70, 100));
    }
    
    setPrediction({
      riskLevel,
      probability,
      recommendations: generateRecommendations(input, riskScore),
    });
  };

  // Rest of the component remains the same...
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Construction Risk Prediction</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Enter your project details to receive AI-powered risk assessment and recommendations.
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 transition-colors"
        onSubmit={handleSubmit}
      >
        {/* Form inputs remain the same... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Size
            </label>
            <select
              value={input.projectSize}
              onChange={(e) => setInput({ ...input, projectSize: e.target.value as any })}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Duration (months)
            </label>
            <input
              type="number"
              value={input.duration}
              onChange={(e) => setInput({ ...input, duration: parseInt(e.target.value) })}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Workforce Availability (%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={input.workforceAvailability}
              onChange={(e) => setInput({ ...input, workforceAvailability: parseInt(e.target.value) })}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600 dark:text-gray-400">{input.workforceAvailability}%</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Supply Chain Stability
            </label>
            <select
              value={input.supplyChainStability}
              onChange={(e) => setInput({ ...input, supplyChainStability: e.target.value as any })}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Material Cost Volatility
            </label>
            <select
              value={input.materialCostVolatility}
              onChange={(e) => setInput({ ...input, materialCostVolatility: e.target.value as any })}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Complexity
            </label>
            <select
              value={input.projectComplexity}
              onChange={(e) => setInput({ ...input, projectComplexity: e.target.value as any })}
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
        >
          Generate Prediction
        </button>
      </motion.form>

      {prediction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Risk Assessment Results</h2>
            {prediction.riskLevel === 'high' ? (
              <AlertTriangle className="w-8 h-8 text-red-500" />
            ) : prediction.riskLevel === 'medium' ? (
              <Info className="w-8 h-8 text-yellow-500" />
            ) : (
              <CheckCircle className="w-8 h-8 text-green-500" />
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Risk Level:{' '}
                <span className={`font-semibold ${
                  prediction.riskLevel === 'high' ? 'text-red-500' :
                  prediction.riskLevel === 'medium' ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {prediction.riskLevel.charAt(0).toUpperCase() + prediction.riskLevel.slice(1)}
                </span>
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Probability: <span className="font-semibold">{prediction.probability}%</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Recommendations:</h3>
              <ul className="space-y-2">
                {prediction.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}