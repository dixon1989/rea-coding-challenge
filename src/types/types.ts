export interface Property {
  results: PropertyData[];
  saved: PropertyData[];
}

export interface PropertyData {
  price: string;
  agency: BrandingColor;
  id: string;
  mainImage: string;
}

export interface BrandingColor {
  brandingColors: {
    primary: string;
  };
  logo: string;
}
