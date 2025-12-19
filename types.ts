export interface SlideProps {
  isActive: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  fill?: string;
  description?: string;
}

export interface Agent {
  name: string;
  role: string;
  category: string;
}

export interface Competitor {
  name: string;
  multiAgent: boolean;
  security: boolean;
  visibility: boolean;
  pricing: string;
}