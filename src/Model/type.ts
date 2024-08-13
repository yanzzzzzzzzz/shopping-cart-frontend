export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
}
export interface ProductData {
  id: number;
  name: string;
  describe: string;
  specs: {
    category: string;
    quantity: string;
    brand: string;
    origin: string;
  };
}
