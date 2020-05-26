import React, { useEffect, useContext } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Context from '../store/context';
import history from '../services/history';
import Index from './Index';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import Checkout from './Checkout';
import ProductList from './ProductList';
import Register from './Register';

function App() {
  const { actions } = useContext(Context);

  /*  Every time this component mounts, need to load data from local storage into state, through login and logout events,
      where the app is refreshed due to callbacks from the auth api.
      This pattern is analogous to the componentDidMount lifecycle method. 
  */
  useEffect(() => {
    const getLocalStorage = () => {
      const storedData = localStorage.getItem('cart');
      const cart = JSON.parse(storedData);
      let newCart = [];
      let oItem = {
        type: '',
        name: '',
        price: 0,
        id: 0,
        currency: '',
        description: '',
        qty: 0,
      };

      try {
        if (cart.length > 0) {
          cart.map((item) => {
            oItem = {
              type: item.type,
              name: item.name,
              price: parseFloat(item.price, 2),
              id: parseInt(item.id),
              currency: item.currency,
              description: item.description,
              qty: parseInt(item.qty, 10),
            };
            newCart.push(oItem);
          });
          return addStoredDataToState(newCart);
        }
      } catch (error) {
        console.log('Problem restoring the shopping cart: ' + error);
      }
    };

    getLocalStorage();
  }, []);

  const addStoredDataToState = async (cart) => {
    await actions({ type: 'RESTORE_CART_FROM_STORAGE', payload: cart });
    updateTotal();
  };

  const updateTotal = () => {
    actions({ type: 'UPDATE_TOTAL', payload: null });
  };

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/results" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
