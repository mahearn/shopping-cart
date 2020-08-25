import React from 'react';

const EBook = (props) => {
  return (
    <div id={props.id} className="media product-item-container">
      <img
        className="mr-3"
        src="https://picsum.photos/100"
        loading="lazy"
        alt="random placeholder image"
      />
      <div className="media-body">
        <h4>eBook: {props.name}</h4>
        {props.description}
        <hr />
        <div>
          Cost: ${props.price} {props.currency}
        </div>
      </div>
    </div>
  );
};

export default EBook;
