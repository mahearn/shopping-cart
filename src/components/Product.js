import React from 'react'

import Course from './Course'
import Event from './Event'
import LoadingSpinner from './LoadingSpinner'
 
const Product = (props) => {
  	
  	return (
      <>
      {!props &&
        <LoadingSpinner />
      }

      {props.type === "course" &&
        <Course />
      }
      
      {props.type === "event" &&
        <Event />
      }
      </>
  	);
}

export default Product