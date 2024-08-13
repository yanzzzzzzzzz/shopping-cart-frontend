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

export interface ProductVariant {
  variantName: string;
  id: number;
  productId: number;
  price: string;
  inventory: number;
}

export interface ProductWithVariants {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    imageUrl: string;
    rating: string;
  };
  variants: ProductVariant[];
}
