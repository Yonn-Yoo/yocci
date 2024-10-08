export type HeaderButtonTypes = {
  role: 'orders' | 'user' | 'search' | 'menu';
  component: JSX.Element;
};

export type OrderDataType = {
  id: string;
  date: string;
  totalQuantity: number;
  items: {
    imagePath: string;
    name: string;
    option: string;
    quantity: number;
    price: number;
  }[];
  recipientInfo: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    suburb: string;
    state: string;
    postcode: string;
    phoneNumber: string;
  };
};

export type MapType = {
  [key: string]: string;
};

export type UserType = {
  uid: string;
  email: string;
  isAdmin: boolean;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: {
    providerId: string;
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
  }[];
  stsTokenManager: {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
  };
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
};

export type ToastType = {
  type?: 'success' | 'fail' | 'warning';
  text: string;
  id: string;
};

export type ProductType = {
  file: null | File;
  itemName: string;
  description: string;
  options: string;
  price: string;
  category: 'Men' | 'Women' | 'Hand Bags';
};

export type ProductDataType = {
  category: 'Men' | 'Women' | 'Hand Bags';
  description: string;
  id: string;
  image: string;
  itemName: string;
  options: string[];
  price: number;
};

export type CartItemType = {
  id: string;
  image: string;
  itemName: string;
  option: string;
  price: number;
  quantity: number;
};
