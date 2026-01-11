
import React from 'react';
import { NavItem, ServiceItem, ClientItem } from './types';

export const COLORS = {
  primary: '#E31E24', // Medical Red
  secondary: '#1F2937', // Charcoal
  background: '#FFFFFF',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'The Firm', path: '/about' },
  { label: 'Strategic Services', path: '/services' },
  { label: 'Partnerships', path: '/clients' },
  { label: 'Consultation', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'hr',
    title: 'Human Capital & HR Systems',
    description: 'We optimize the pharmacists and retail specialists who drive your reputation and revenue. From recruitment to executive leadership development.',
    icon: 'Users',
    points: [
      'Strategic Pharmacist Acquisition',
      'Clinical Excellence Training',
      'KPI & Incentive Architecture',
      'Succession & Career Path Design'
    ]
  },
  {
    id: 'operations',
    title: 'Operational Rigor & SOPs',
    description: 'Eliminate waste and drive standardized excellence across every square meter of your retail footprint through engineering-grade operations.',
    icon: 'ClipboardCheck',
    points: [
      'Inventory Yield Optimization',
      'Chain-Wide SOP Standardization',
      'Regulatory Compliance Audits',
      'Store Format & Flow Engineering'
    ]
  },
  {
    id: 'marketing',
    title: 'Pharma Marketing & Category',
    description: 'Data-driven category management and brand positioning that captures higher patient share in saturated Middle Eastern markets.',
    icon: 'TrendingUp',
    points: [
      'Category Management & Pricing',
      'Patient Loyalty & CRM Strategy',
      'E-Pharma Digital Transformation',
      'New Market Entry Strategy (KSA/Egypt)'
    ]
  }
];

export const CLIENTS: ClientItem[] = [
  { name: 'Egypt Retail Pharma Giant', region: 'Egypt', logo: 'https://picsum.photos/seed/egy1/200/100' },
  { name: 'KSA National Health Group', region: 'Saudi Arabia', logo: 'https://picsum.photos/seed/ksa1/200/100' },
  { name: 'Regional Specialty Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/reg1/200/100' },
  { name: 'Jeddah-Based Retail Leader', region: 'Saudi Arabia', logo: 'https://picsum.photos/seed/ksa2/200/100' },
];

export const CONTACT_INFO = {
  email: 'info@onboarding4u.com',
  phone: '+20 100 393 9499',
  address: 'New Cairo District, Cairo, Egypt',
  officeHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM (GMT+2)'
};
