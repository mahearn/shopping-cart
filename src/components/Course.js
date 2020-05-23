import React from 'react'
 
const Course = (props) => {
  	
  	return (
      <ul id={props.id} className="media product-item-container">
        <img className="mr-3" src="https://via.placeholder.com/300x150" alt="Generic placeholder image" />
        <div className="media-body">
          <h4>{props.name}</h4>
          {props.description}
          <hr />
          <div>
            Cost: ${props.price} {props.currency}
          </div>
        </div>
      </ul>
  	);
}

export default Course