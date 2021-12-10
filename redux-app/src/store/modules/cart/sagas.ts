import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import {
  addProductToCartRequest,
  addProductToCartSuccess,
  addProductToCartFailure,
} from './actions';

type CheckProductStockReguest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: CheckProductStockReguest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  // chamada a api
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `/stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
]);
