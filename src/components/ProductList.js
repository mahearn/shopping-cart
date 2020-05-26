import React, { useContext } from 'react';

import LoadingSpinner from './LoadingSpinner';
import Context from '../store/context';
import Course from './Course';
import EBook from './EBook';

function ProductList() {
  const { state, actions } = useContext(Context);

  const onAddToCart = (item) => {
    item['qty'] = 1;
    actions({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className="container search-results-container">
      {state.products.length > 0 ? (
        <h3>Results</h3>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <LoadingSpinner />
        </div>
      )}
      {state.products.map((item) => (
        <div className="product-item-container" key={item.id}>
          {item.type === 'course' && (
            <Course
              id={item.id}
              name={item.name}
              price={item.price}
              currency={item.currency}
              description={item.description}
            />
          )}
          {item.type === 'e-book' && (
            <EBook
              id={item.id}
              name={item.name}
              price={item.price}
              currency={item.currency}
              description={item.description}
            />
          )}
          <button className="btn btn-success" onClick={() => onAddToCart(item)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
