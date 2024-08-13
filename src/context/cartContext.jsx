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
/**********************************************NUMERO DE PRODUCTOS EN EL CARRITO*********************************** */
const cartProductCount = cart ? cart.reduce((acum, val ) => 
  acum + val.quantity, 0,
) : 0
/**********************************************TOTAL $ CARRITO*********************************** */
const cartTotal = cart ? cart.reduce((acum, val ) => 
  acum + (val.quantity * val.price), 0,
) : 0
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
        cartProductCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
