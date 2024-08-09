import { useState, createContext } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
/**********************************************AGREGAR AL CARRITO*********************************** */
  const addToCart = product => {
    /*si el producto ya esta en el carrito suma 1 a quantity*/
    const productInCartIndex = cart.findIndex(item => item.id_product === product.id_product)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      
      return setCart(newCart)
    }
    /**Si el producto no esta en el carrito lo agrega*/
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

/**********************************************VER SI EL PRODUCTO ESTA EN EL CARRITO*********************************** */
//en productList

/**********************************************ELIMINAR PRODUCTO DEL CARRITO*********************************** */
const removeFromCart = product => {
  setCart(prevState => prevState.filter(item => item.id_product != product.id_product))
}
/**********************************************VACIAR EL CARRITO*********************************** */
  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
