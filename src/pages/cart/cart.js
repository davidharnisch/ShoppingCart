import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { Products } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()
    console.log(cartItems)

    const navigate = useNavigate()
    return (
      <div className="cart">
          <div>
            <h1>Your cart Items</h1>
          </div>
          <div className="cartItems">
            {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
            })}
          </div>
          {totalAmount > 0 ?
          <div className="checkout">
            <p> Subtotal: {totalAmount} Kč</p>
            <button onClick={() => navigate("/")}> Continue Shopping</button>
            <button> Checkout</button>
          </div>
          : <h1>Your Cart is Empty</h1>}
      </div>
    );
  }
  
