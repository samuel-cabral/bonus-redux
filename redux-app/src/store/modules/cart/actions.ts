import { ActionTypes, IProduct } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductCartFailure,
    payload: {
      productId,
    },
  };
}
