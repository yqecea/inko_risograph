
export enum ColorPalette {
  PAPER = '#f4f1ea',
  INK = '#1a1a1a',
  PINK = '#ff33cc',
  BLUE = '#0055ff',
  YELLOW = '#ffdd00',
  GREEN = '#00cc66',
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  color: ColorPalette;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  color: ColorPalette;
  isPopular?: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
}
