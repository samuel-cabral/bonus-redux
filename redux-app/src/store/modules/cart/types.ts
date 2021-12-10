export enum ActionTypes {
  addProductCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[]; // ids dos produtos com falta de estoque
}
