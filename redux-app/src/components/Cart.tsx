import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ICartItem } from '../store/modules/cart/types';
import { BRLFormatter, formatNumber } from '../utils/formatNumber';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>
              {formatNumber({
                ...BRLFormatter,
                value: item.product.price,
              })}
            </td>
            <td>{item.quantity}</td>
            <td>
              {formatNumber({
                ...BRLFormatter,
                value: item.product.price * item.quantity,
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
