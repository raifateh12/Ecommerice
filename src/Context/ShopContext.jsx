import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product';
export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let Cart = {};
    for (let index = 0; index < all_product.length; index++) {
        Cart[index] = 0;
    }
    return Cart;
};
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const removeToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                if (iteminfo) {
                    totalAmount += iteminfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };
    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };
    const contextValue = {getTotalCartItem , getTotalCartAmount, all_product, cartItems, addToCart, removeToCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
