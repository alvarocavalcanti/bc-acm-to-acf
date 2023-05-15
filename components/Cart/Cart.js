import React from 'react';
import useShopifyCart from '../../hooks/useShopifyCart';
import { Loader } from '../Loader';
import CartTable from './CartTable';
import CartTotals from './CartTotals';

const Cart = ({ setProductNotification }) => {
  const {
    cartItems,
    isCartLoading,
    isCartEmpty,
    cartTotal,
    cartSubTotal,
    checkoutUrl,
    removeFromCart,
    cartId,
    setCartData,
    retrieveCart,
  } = useShopifyCart();

  if (isCartLoading) {
    return <Loader />;
  }

  if (isCartEmpty) {
    return <p>You have no items in cart</p>;
  }

  return (
    <>
      <CartTable
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        cartId={cartId}
        setCartData={setCartData}
        retrieveCart={retrieveCart}
        setProductNotification={setProductNotification}
      />
      <CartTotals
        cartSubTotal={cartSubTotal}
        cartTotal={cartTotal}
        checkoutUrl={checkoutUrl}
      />
    </>
  );
};

export default Cart;
