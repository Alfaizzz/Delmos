export type PageRoute = 'home' | 'about' | 'services' | 'industries' | 'technologies' | 'contact';

export interface NavItem {
  id: PageRoute;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  category: 'core' | 'engineering' | 'infrastructure' | 'tier';
  iconName: string;
  image?: string;
}

export interface TechItem {
  name: string;
  deviconClass?: string;
  shortCode?: string;
  color?: string;
}

export interface TechCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  bullets: Array<{ title: string; desc: string }>;
  items: TechItem[];
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  useCases: string[];
}

export interface SupportModel {
  title: string;
  level: string;
  description: string;
  responseTarget: string;
  keyFeatures: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  serviceRequired: string;
  applicationTechnology: string;
  query: string;
  preferredContact: 'Email' | 'Phone' | 'Meeting';
}
