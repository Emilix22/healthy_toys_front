import { useContext, useState, createContext } from "react";
import { AppContext } from "./appContext";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const { user } = useContext(AppContext);

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

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

/**********************************************CALCULAR ENVIO*********************************** */
  const calculateShipping = () => {
    return
  }

/**********************************************CALCULAR ENVIO*********************************** */
  const orderCreate = () => {
    setLoading(true);
    fetch(`${BASE_URL}/orders/create`, {
      method: "POST",
      body: JSON.stringify({
        orderItems: cart,
        total: cartTotal,
        shipping_method: "correo",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((info) => {
        return console.log(info);
        {
          if (info.error) {
            setErrorsBack(info.error);
          } else {
            Swal.fire({
              position: "center",
              width: 400,
              icon: "success",
              title: `Producto ${infoProductForm.name} creado correctamente`,
              showConfirmButton: false,
              timer: 2500,
            });
            setInfoProductForm({
              name: "",
              category: "",
              price: "",
              description: "",
              image1: "",
              image2: "",
              image3: "",
              image4: "",
              promotion: "",
            });
            clearInputs();
            history("/e_commerce");
          }
        }
      });
    setLoading(false).catch((error) => {
      console.log(error);
    });
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
        calculateShipping,
        orderCreate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
