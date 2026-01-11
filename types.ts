
export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: string[];
}

export interface ClientItem {
  name: string;
  region: 'Egypt' | 'Saudi Arabia';
  logo: string;
}
