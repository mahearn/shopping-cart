import React from 'react';

const EBook = (props) => {
  return (
    <div id={props.id} className="media product-item-container">
      <div>
        <h3>eBook</h3>
      </div>
      <div>
        <img
          className="mr-3"
          src="https://picsum.photos/100"
          loading="lazy"
          alt="random placeholder image"
        />
      </div>
      <div className="media-body">
        <h4>{props.name}</h4>
        <br />
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
