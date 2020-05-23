import React, {useContext, useEffect} from 'react'
import history from '../services/history'

import Context from '../store/context'

function Cart(props) {

  const {state, actions} = useContext(Context)
   
  useEffect(() => {
    const updateTotal = () => {
      actions({type: 'UPDATE_TOTAL', payload: null})
    }
    updateTotal()
  }, [state.cartContents])

  const onUpdateQuantity = (quantity, id) => {
    try {
      let cartCopy = JSON.parse(JSON.stringify(state.cartContents))
      //find the object in the JSON string where id === id
      const itemIndex = state.cartContents.findIndex(x => x.id === id)
      cartCopy[itemIndex].qty = quantity
      actions({type: 'UPDATE_QUANTITY', payload: cartCopy}) 
      window.localStorage.setItem('cart', JSON.stringify(cartCopy)) 
    }
    catch (error) {
      console.log("Error finding product: " + error)
    }
  }

  const onRemoveItem = (id) => {
    actions({type: 'REMOVE_FROM_CART', payload: id})
  }

  const onCheckoutClick = (event) => {
    event.preventDefault()
    if(state.cartContents.length > 0) {
      //persist cart contents to local storage
      window.localStorage.setItem("cart", JSON.stringify(state.cartContents))
    }
    //close the cart and show checkout page
    $('.dropdown-toggle').dropdown('toggle')
    //navigate to checkout 
    history.push("/checkout")
  }

  const onClearCartClick = (event) => {
    actions({type: 'CLEAR_CART', payload: null})
    localStorage.removeItem("cart");
  }

  return (
    <div id="ecommerce-cart" className="cart-container">
      <div className="cart-header">
        <h2>My Cart</h2>
        <hr />
      </div>
      <div className="cart-body" data-has-focus="false">
        <form action="" method="post" id="views-form-commerce-cart-block-default">
          <div className="cart-wrapper">
            <ul className="cart">
            {state.cartContents.map((item) =>       
                <li key={item.id} className="cart-item">  
                  <p>
                    {item.name}<br /> 
                    Price: ${item.price} {item.currency}
                  </p>
                  <p className="cart-input-qty">
                    Quantity: <input type="number" defaultValue="1" min="1" onChange={(e) => onUpdateQuantity(e.target.value, item.id)} />
                    <button className="btn btn-sm btn-danger button-remove" type="button" onClick={() => onRemoveItem(item.id)}>&times;</button>
                  </p> 
                </li>
            )}
            </ul>
            <ul className="cart-menu">
              <li className="cart-menu__item cart-menu__item--total">
                <p className="cart-menu__total"><strong>Total:</strong> ${props.total}</p>
              </li>
            </ul>
            <div id="btnCheckout">
              <button className="btn btn-sm btn-success" type="button" onClick={(e) => onCheckoutClick(e)}>Checkout</button>   
            </div>
            <div id="btnClear">
              <button className="btn btn-sm btn-danger" type="button" onClick={(e) => onClearCartClick(e)}>Clear cart</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Cart
