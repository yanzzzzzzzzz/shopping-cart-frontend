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
  id: number;
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

export interface LoginModel {
  username: string;
  password: string;
}
export interface LoginResponseModel {
  message: string;
  token: string;
}

export interface UserInfoModel {
  username: string;
  email: string;
  id: number;
  createdAt: Date;
  phone?: string;
  sex?: 'M' | 'F' | 'O';
  birthday?: Date;
  imageId?: number;
  name?: string;
}
export type UserInfoUpdateModel = Omit<UserInfoModel, 'id' | 'username'>;

export interface RegisterModel {
  username: string;
  password: string;
  email: string;
}
export interface RegisterResponseModel {
  token: string;
}

export interface CartItem {
  id: number;
  amount: number;
  imageUrl: string;
  name: string;
  price: number;
  productId: number;
  productVariantId: number;
  userId: number;
  variantName: string;
}

export interface DecodedPayload {
  username: string;
  id: number;
  iat: number;
  exp: number;
}

export interface AddCartItemModel {
  productId: number;
  productVariantId: number;
  amount: number;
}

export interface CheckoutModel {
  shippingAddress: string;
  totalAmount: number;
  shippingFee: number | null;
  couponUsed: string | null;
  paymentMethod: string;
  items: Array<checkoutItem>;
}

export interface checkoutItem {
  cartId: number;
  productId: number;
  productVariantId: number;
  quantity: number;
  price: number;
  totalAmount: number;
}
