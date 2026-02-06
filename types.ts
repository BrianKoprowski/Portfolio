import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
  description?: string;
}

export enum PageType {
  AUDIO = 'Audio',
  ART = 'Art',
  RESEARCH = 'Research',
  DEV = 'Development',
  GDD = 'Game Design Document',
  FMP = 'Final Major Project'
}