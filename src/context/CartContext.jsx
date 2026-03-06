import { createContext, useReducer , useEffect} from "react";
import { reducer,initialState, ACTIONS } from "@/reducers/CartReducer";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState,(initial)=>{
      const saved = localStorage.getItem('cart')
    return saved? JSON.parse(saved) :initial
  });
useEffect(() => {
  localStorage.setItem('cart',JSON.stringify(state))
}, [state])


  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const updateQty = (id, type) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, type } });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
 
  

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, updateQty, removeFromCart, clearCart,}}
    >
      {children}
    </CartContext.Provider>
  );
};
