import { useState } from "react";

export const useCart = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const [cart, setCart] = useState([]);

    const addToCart = (tourItem) => {
        setCart(cart => [...cart, tourItem]);
        setCartTotal(cartTotal + tourItem.price);
    }

    const deleteFromCart = (tourItem) => {
        setCart(cart.filter(cartItem => cartItem.id !== tourItem.id));
        setCartTotal(cartTotal - tourItem.price);
    }
  
    return {
        cartTotal,
        addToCart,
        deleteFromCart
    }
}