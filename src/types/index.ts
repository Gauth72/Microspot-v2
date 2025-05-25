export type User = {
  id: string;
  name: string;
};

export type MainCategory = 'VENDING_MACHINE' | 'KIOSK' | 'ARCADE' | 'LOGISTICS' | 'MISC';
export type ListingStatus = 'ACTIVE' | 'RENTED' | 'INACTIVE';

export type Listing = {
  id: string;
  title: string;
  description: string;
  surface: number;
  price: number;
  address: string;
  postalCode: string;
  city: string;
  mainCategory: MainCategory;
  status: ListingStatus;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  owner: User;
  messages: Message[];
  images?: {
    id: string;
    url: string;
    publicId: string;
  }[];
};

export type Message = {
  id: string;
  content: string;
  createdAt: string;
  read: boolean;
  sender: User;
  senderId: string;
  recipient: User;
  recipientId: string;
  listing: Listing;
  listingId: string;
};

export type Conversation = {
  id: string;
  listing: {
    id: string;
    title: string;
  };
  otherUser: {
    id: string;
    name: string | null;
  };
  lastMessage: {
    content: string;
    createdAt: string;
  };
  unreadCount: number;
};
