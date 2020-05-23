import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useAuth0 } from "../react-auth0-spa";

import Context from '../store/context';
import Cart from './Cart';
import SearchBar from './SearchBar';

function Navbar() {
  const { state } = useContext(Context);
  let count = state.cartContents.reduce((tot, item) => {
    tot += parseInt(item.qty);
    return tot;
  }, 0);
  let total = state.grandTotal;
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const logoutWithRedirect = () => logout({
  //   returnTo: window.location.origin
  // });

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item search-item">
              <SearchBar />
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="cartDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <label className="cart-quantity-badge">{count}</label>
                <i className="icon-shopping-cart"></i>
              </a>
              <div
                className="dropdown-menu cart-wrapper"
                aria-labelledby="cartDropdown"
              >
                <Cart total={total} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
