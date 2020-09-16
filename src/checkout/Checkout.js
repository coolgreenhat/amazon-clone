import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './checkoutProduct/CheckoutProduct';
import './Checkout.css';
import Subtotal from './subtotal/Subtotal';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

 
  return (
    <div className="checkout">
      <div className="checkout__left">
      <img className="checkout__ad" src="https://media.cdn.gradconnection.com/Amazon_Banner_AwTerfY.png" alt=""/>
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />

          ))}
        </div>
      )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />  
        </div>
      )}
    </div>
  )
}

export default Checkout;
