import React, { useContext } from 'react';
import { useAuth0 } from '../react-auth0-spa';

import Context from '../store/context';

function Checkout() {
  const { state } = useContext(Context);
  const cart = state.cartContents;
  const total = state.grandTotal;
  // const { isAuthenticated, loginWithRedirect } = useAuth0();
  const isAuthenticated = state.isAuthenticated;

  return (
    <div className="container checkout-container">
      <h2>Checkout</h2>
      {
        <div>
          <ul className="checkout-item-list">
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <p className="checkout-item-details">
                  Product: {item.name}
                  <br />
                  Price: ${item.price} {item.currency}
                </p>
                <p className="checkout-input-qty">Quantity: {item.qty}</p>
              </li>
            ))}
            <li className="checkout-item">
              <p>
                <strong>Total:</strong> ${total} AUD
              </p>
            </li>
          </ul>

          {!isAuthenticated ? (
            <>
              <h4>Login to complete checkout</h4>
              <button
                onClick={() =>
                  loginWithRedirect({
                    redirect_uri: 'http://localhost:3000/checkout',
                  })
                }
                className="btn btn-success"
              >
                Login
              </button>
            </>
          ) : null}
        </div>
      }
    </div>
  );
}

export default Checkout;
