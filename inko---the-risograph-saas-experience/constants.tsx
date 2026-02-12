
import React from 'react';
import { ColorPalette, FeatureItem, PricingPlan, NavigationLink } from './types';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'The Product', href: '#features' },
  { label: 'Our Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Journal', href: '#journal' },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Atomic Precision',
    description: 'We measure every pixel with the weight of heavy ink, ensuring your data is rendered with tactile authority.',
    color: ColorPalette.PINK,
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    id: 2,
    title: 'Vibrant Flux',
    description: 'Our real-time engine handles streaming data like a fresh press, bleeding edges where needed for organic flow.',
    color: ColorPalette.BLUE,
    icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  },
  {
    id: 3,
    title: 'Layered Insights',
    description: 'Stack your analytical views like transparent vellum. Discover patterns through the intersection of metrics.',
    color: ColorPalette.YELLOW,
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    id: 4,
    title: 'Raw Export',
    description: 'Zero compression, zero loss. Export your reports as high-fidelity documents ready for the physical world.',
    color: ColorPalette.GREEN,
    icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'The Leaflet',
    price: '0',
    features: ['Up to 3 dynamic layers', 'Basic ink density', 'Standard grain texture', 'Community support'],
    color: ColorPalette.BLUE,
  },
  {
    name: 'The Brochure',
    price: '29',
    features: ['Unlimited atomic layers', 'Priority ink mixing', 'Custom halftone patterns', '24/7 technical press'],
    color: ColorPalette.PINK,
    isPopular: true,
  },
  {
    name: 'The Manifesto',
    price: '99',
    features: ['Enterprise scale', 'White-label printing', 'API direct-to-plate', 'Dedicated account curator'],
    color: ColorPalette.GREEN,
  },
];

export const HalftonePattern = ({ id, color, scale = 1 }: { id: string, color: string, scale?: number }) => (
  <svg width="0" height="0" className="absolute">
    <pattern id={id} x="0" y="0" width={10 * scale} height={10 * scale} patternUnits="userSpaceOnUse">
      <circle cx={5 * scale} cy={5 * scale} r={3 * scale} fill={color} />
    </pattern>
  </svg>
);
