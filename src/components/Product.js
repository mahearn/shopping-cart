import React from 'react';

import Course from './Course';
import EBook from './EBook';
import LoadingSpinner from './LoadingSpinner';

const Product = (props) => {
  return (
    <>
      {!props && <LoadingSpinner />}

      {props.type === 'course' && <Course />}

      {props.type === 'e-book' && <EBook />}
    </>
  );
};

export default Product;
