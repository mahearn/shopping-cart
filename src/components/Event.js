import React from 'react'
 
const Event = (props) => {
  	
  	return (
      <ul id={props.id} className="media product-item-container">
        <img className="mr-3" src="https://via.placeholder.com/300x150" alt="Generic placeholder image" />
        <div className="media-body">
          <h4>{props.name}</h4>
          When: {props.startDate} - {props.endDate}
          <br />
          Times: {props.startTime} - {props.endTime}
          <br />
          {props.description}
          <hr />
          <div>
            Cost: ${props.price} {props.currency}
          </div>
        </div>
      </ul>
  	);
}

export default Event