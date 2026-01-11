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
