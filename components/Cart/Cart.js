import React from 'react';
import useShopifyCart from '../../hooks/useShopifyCart';
import { Loader } from '../Loader';
import CartTable from './CartTable';
import CartTotals from './CartTotals';
import ConnectionUnavailable from '../../utilities/ConnectionUnavailable';
import shopifyConfiguration from '../../utilities/shopifyConfiguration';

const Cart = ({ setProductNotification }) => {
  const {
    cartItems,
    isCartLoading,
    isCartEmpty,
    cartTotal,
    cartSubTotal,
    checkoutUrl,
    removeFromCart,
    updateCartQuantity,
    cartId,
    setCartData,
    retrieveCart,
  } = useShopifyCart();

  if (!shopifyConfiguration.available()) {
    return <ConnectionUnavailable />;
  }

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
        updateCartQuantity={updateCartQuantity}
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
