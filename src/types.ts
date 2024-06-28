export type HeaderButtonTypes = {
  role: 'orders' | 'user' | 'search' | 'menu';
  icon: JSX.Element;
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
