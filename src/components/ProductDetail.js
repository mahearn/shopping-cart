import React, { useContext } from 'react'
import { useCart } from 'react-ecommerce-hook'

import Context from '../store/context'
import Product from './Product'

function ProductDetail(props) {

    const {state} = useContext(Context)
    const productId = props.match.params.id

    const { addToCart } = useCart();
  	
    return (
        <div>
            <Product id={productId} />
            <button onClick={() => addToCart({ productId })}>
                Add To Cart
            </button>
        </div>
    )
}

export default ProductDetail
