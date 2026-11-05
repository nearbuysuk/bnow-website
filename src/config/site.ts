export interface NavItem {
  label: string;
  href: string;
}

export interface ExplainerStep {
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface RetailerBenefit {
  title: string;
  description: string;
  tag: string;
}

export const siteConfig = {
  name: 'BNow',
  tagline: 'Put Your Local Inventory on the Map.',
  statusBadge: 'In Development — Onboarding Pilot Retail Partners',
  description:
    'BNow is a location-based discovery and reservation platform enabling local retailers and service providers to showcase in-store availability to nearby consumers searching on the map.',
  contactEmail: 'partners@bnow.example.com',
  legalEmail: 'legal@bnow.example.com',
  lastUpdatedYear: 2026,

  nav: [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'For Retailers', href: '/#for-retailers' },
    { label: 'Platform Ecosystem', href: '/#ecosystem' },
    { label: 'Legals', href: '/legals/' },
  ] satisfies NavItem[],

  hero: {
    eyebrow: 'Built for Local Retailers & Service Providers',
    headline: 'Turn Nearby Map Searches Into In-Store Reservations.',
    subheadline:
      'Shoppers near your store are searching for products and services right now. BNow puts your live local inventory on the map so nearby consumers can discover what you have in stock and reserve it for in-store pickup or appointment—without complex e-commerce shipping.',
    primaryActionLabel: 'Register Retailer Interest',
    secondaryActionLabel: 'See How It Works',
    developmentNote:
      'The BNow mobile app is currently in active development. We are partnering with local independent retailers and service businesses ahead of our regional launch.',
  },

  explainerSteps: [
    {
      stepNumber: '01',
      badge: 'Merchant Setup',
      title: 'List Products & Bookable Services',
      description:
        'Add your in-store catalog, seasonal stock, or local services in minutes. Update quantities or availability directly from the merchant portal or POS sync.',
      highlights: [
        'Supports both physical retail products & local services',
        'Quick stock toggles—no complex SKU warehouse setup required',
        'Set custom reservation hold windows (e.g., 2 hours or same-day)',
      ],
    },
    {
      stepNumber: '02',
      badge: 'Map Discovery',
      title: 'Appear on Live Location Search',
      description:
        'When consumers nearby search for an item or service in the BNow mobile app, your storefront pin appears directly on their map with real-time distance and stock status.',
      highlights: [
        'Hyper-local radius discovery prioritizes nearby brick-and-mortar shops',
        'Displays store hours, walking/driving distance, and live availability',
        'Zero wasted ad spend on out-of-area shoppers',
      ],
    },
    {
      stepNumber: '03',
      badge: 'Click & Reserve',
      title: 'Accept Instant Reservations & Foot Traffic',
      description:
        'Shoppers tap to reserve an item or request a service slot before walking in. You confirm the hold, set the item aside, and complete the transaction in-store.',
      highlights: [
        'Eliminates packing, shipping labels, and courier fees',
        'Brings high-intent local buyers directly to your counter',
        'Automated hold reminders and expiration management',
      ],
    },
  ] satisfies ExplainerStep[],

  retailerBenefits: [
    {
      tag: 'Zero Shipping Logistics',
      title: '100% Local Pickup & In-Store Fulfillment',
      description:
        'Skip boxes, postage, and return headaches. BNow is purpose-built to drive local foot traffic straight to your physical storefront.',
    },
    {
      tag: 'Products + Services',
      title: 'Unified Inventory & Service Listings',
      description:
        'Whether you sell hardware, boutique apparel, specialty groceries, or offer local repairs and appointments, list everything in one store profile.',
    },
    {
      tag: 'High-Intent Discovery',
      title: 'Capture "Need It Today" Shoppers',
      description:
        'Consumers use BNow when they want an item today rather than waiting days for delivery—giving local retailers an unbeatable speed advantage.',
    },
    {
      tag: 'Simple Operations',
      title: 'Designed for Busy Store Floors',
      description:
        'One-tap reservation confirmation ensures your staff can manage holds in seconds without disrupting in-store customer service.',
    },
  ] satisfies RetailerBenefit[],
};

