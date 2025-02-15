export interface RiskPredictionInput {
  projectSize: 'small' | 'medium' | 'large';
  duration: number;
  workforceAvailability: number;
  supplyChainStability: 'low' | 'medium' | 'high';
  materialCostVolatility: 'low' | 'medium' | 'high';
  projectComplexity: 'low' | 'medium' | 'high';
}

export interface RiskPrediction {
  riskLevel: 'low' | 'medium' | 'high';
  probability: number;
  recommendations: string[];
}