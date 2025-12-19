import { ChartDataPoint, Competitor } from './types';
import { Layers, Shield, Eye, CreditCard, Cpu, Users, Globe, Briefcase } from 'lucide-react';

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
  { name: 'Replit', multiAgent: true, security: false, visibility: false, pricing: '$25/mo' },
  { name: 'Bolt.new', multiAgent: false, security: false, visibility: false, pricing: 'Token' },
  { name: 'Lovable', multiAgent: false, security: false, visibility: false, pricing: 'Credit' },
  { name: 'Cursor', multiAgent: false, security: false, visibility: false, pricing: '$20/mo' },
  { name: 'vAi™', multiAgent: true, security: true, visibility: true, pricing: '$39/mo' },
];

export const AGENTS = [
  { name: 'Bear', role: 'Orchestrator', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Overseer', role: 'Gatekeeper', icon: <Eye className="w-4 h-4" /> },
  { name: 'Karen', role: 'Architect', icon: <Layers className="w-4 h-4" /> },
  { name: 'DeX', role: 'Builder', icon: <Cpu className="w-4 h-4" /> },
  { name: 'Shadow', role: 'Security', icon: <Shield className="w-4 h-4" /> },
];