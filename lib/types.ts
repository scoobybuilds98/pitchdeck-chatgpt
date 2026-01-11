export interface BusinessSection {
  slug: string;
  label: string;
  description: string;
}

export interface BusinessProfile {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  sections: BusinessSection[];
}

export interface BusinessMetadata extends BusinessProfile {
  location: string;
  stage: string;
  lastUpdated: string;
}
