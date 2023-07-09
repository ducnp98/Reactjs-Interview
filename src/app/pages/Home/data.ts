import Product1 from '../../assets/images/product1.png'
import Product2 from '../../assets/images/product2.png'
import Product3 from '../../assets/images/product3.png'

export interface Product {
  id: number
  coins: number;
  description: string;
  extra?: string;
  image: string;
  isPending?: boolean
}

export interface ProductSession {
  id: number
  title: string;
  products: Product[];
}

export const ProductSessions: ProductSession[] = [
  {
    id: 1,
    title: "Petrol",
    products: [
      {
        id: 1,
        coins: 15,
        description:
          "50% discount for every $100 top-up on your Shell Petrol Card",
        image: Product1,
      },
      {
        id: 2,
        coins: 1000,
        description: "70% discount top-up on your Shell Petrol Card",
        extra: "Insufficient coins",
        image: Product1,
        isPending: true
      },
    ],
  },
  {
    id: 2,
    title: "Rental Rebate",
    products: [
      {
        id: 3,
        coins: 20,
        description: "Get $20 Rental rebate",
        image: Product2,
      },
      {
        id: 4,
        coins: 15,
        description: "Get $500 Rental rebate",
        image: Product2,
      },
    ],
  },
  {
    id: 3,
    title: "Food and Beverage",
    products: [
      {
        id: 5,
        coins: 25,
        description: "NTUC Fairprice $50 Voucher",
        image: Product3,
      },
      {
        id: 6,
        coins: 5,
        description: "Free Cold Stone Sundae at any flavour!",
        image: Product3,
      },
    ],
  },
];
