
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

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/OnBoardingAgency',
  linkedin: 'https://www.linkedin.com/company/onboarding-agency/',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hr',
    title: 'Human Capital & HR Systems',
    description: 'We optimize the pharmacists and retail specialists who drive your reputation and revenue. From recruitment to executive leadership development.',
    icon: 'Users',
    image: 'https://i.pinimg.com/1200x/a1/a3/7a/a1a37ad5bc8cbe96bdbd89afbb4a5208.jpg',
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
    image: 'https://i.pinimg.com/1200x/34/fb/bb/34fbbb98f649e9efdb77fde3734eaec2.jpg',
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
    image: 'https://i.pinimg.com/1200x/01/94/ee/0194ee7f94c3710c64d1608771eb7896.jpg',
    points: [
      'Category Management & Pricing',
      'Patient Loyalty & CRM Strategy',
      'E-Pharma Digital Transformation',
      'New Market Entry Strategy (KSA/Egypt)'
    ]
  }
];

export const CLIENTS: ClientItem[] = [
  // Egypt Partners
  { name: 'Care Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/care/200/100' },
  { name: 'Gold Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/gold/200/100' },
  { name: 'Abdin Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/abdin/200/100' },
  { name: 'Fouda Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/fouda/200/100' },
  { name: 'Gabr Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/gabr/200/100' },
  { name: 'Garhy Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/garhy/200/100' },
  { name: 'Asker Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/asker/200/100' },
  { name: 'Reaya Pharmacy', region: 'Egypt', logo: 'https://picsum.photos/seed/reaya/200/100' },
  { name: 'CPS', region: 'Egypt', logo: 'https://picsum.photos/seed/cps/200/100' },
  { name: 'Auxilio', region: 'Egypt', logo: 'https://picsum.photos/seed/auxilio/200/100' },
  
  // KSA Partners
  { name: 'Ghaya Pharmacy', region: 'Saudi Arabia', logo: 'https://picsum.photos/seed/ghaya/200/100' },
  { name: 'Al Amal Pharmacy', region: 'Saudi Arabia', logo: 'https://picsum.photos/seed/alamal/200/100' },
  { name: 'Rawaa Pharmacy', region: 'Saudi Arabia', logo: 'https://picsum.photos/seed/rawaa/200/100' },
];

export const CONTACT_INFO = {
  email: 'info@onboarding4u.com',
  phone: '+20 100 393 9499',
  address: 'New Cairo District, Cairo, Egypt',
  officeHours: 'Sunday - Thursday: 9:00 AM - 6:00 PM (GMT+2)'
};
