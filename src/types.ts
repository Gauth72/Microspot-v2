export interface Image {
  id: string;
  url: string;
  publicId: string;
  listingId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Listing {
  id: string;
  listingType: 'LOCATION' | 'SALE' | 'WANTED';
  title: string;
  description: string;
  price: number;
  surface: number;
  address: string;
  city: string;
  postalCode: string;
  mainCategory: 'VENDING_MACHINE' | 'KIOSK' | 'ARCADE' | 'LOGISTICS' | 'MISC';
  spaceType: 'INDOOR' | 'OUTDOOR' | 'MIXED';
  hasConcreteSlab: boolean;
  hasElectricity: boolean;
  hasWater: boolean;
  internetType: string | null;
  is24_7: boolean;
  openingTime?: string;
  closingTime?: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  owner?: User;
  images?: Image[];
}
