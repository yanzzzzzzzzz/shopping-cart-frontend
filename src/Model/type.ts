export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
}
export interface ProductData {
  product: Product;
  variants: ProductVariantModel[];
  specs: Spec[];
}

export interface ProductVariantModel {
  variantName: string;
  price: string;
  inventory: number;
}

export interface Spec {
  specValue: string;
  name: string;
}

export interface ProductDetail {
  product: Product;
  variants: ProductVariantModel[];
}
