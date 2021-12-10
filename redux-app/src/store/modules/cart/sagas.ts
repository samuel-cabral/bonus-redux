import { all, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartRequest } from './actions';

type CheckProductStockReguest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockReguest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);

  console.log('Checking product stock...');
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)]);
