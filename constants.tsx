import { ChartDataPoint, Competitor } from './types';
import { Layers, Shield, Eye, CreditCard, Cpu, Users, Globe, Briefcase, RefreshCcw } from 'lucide-react';

export const MARKET_DATA: ChartDataPoint[] = [
  { name: 'SOM', value: 2, description: '$2B AI No-Code Builders', fill: '#00ff00' }, // Terminal Green
  { name: 'SAM', value: 45, description: '$45B AI-Enhanced Dev Tools', fill: '#ffffff' }, // White
  { name: 'TAM', value: 187, description: '$187B Global Low-Code (2030)', fill: '#333333' }, // Dark Gray
];

export const ASK_ALLOCATION: ChartDataPoint[] = [
  { name: 'Engineering', value: 400000, fill: '#00ff00' }, // Green
  { name: 'AI Infra', value: 300000, fill: '#ffffff' }, // White
  { name: 'Marketing', value: 200000, fill: '#666666' }, // Gray
  { name: 'Operations', value: 100000, fill: '#333333' }, // Dark Gray
];

export const COMPETITORS: Competitor[] = [
  { name: 'Replit', multiAgent: true, security: true, visibility: false, pricing: '$25/mo' },
  { name: 'Bolt.new', multiAgent: false, security: true, visibility: false, pricing: '$20/mo' },
  { name: 'Lovable', multiAgent: false, security: false, visibility: false, pricing: '$25/mo' },
  { name: 'Cursor', multiAgent: true, security: false, visibility: false, pricing: '$20/mo' },
  { name: 'Ghost.OS.X', multiAgent: true, security: true, visibility: true, pricing: '$49/mo' },
];

export const GHOST_SYSTEM = [
  { name: 'Ghost', role: 'Unified Intelligence', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Registry', role: 'Task Autonomy', icon: <Users className="w-4 h-4" /> },
  { name: 'Heal', role: 'Self-Correction', icon: <RefreshCcw className="w-4 h-4" /> },
];