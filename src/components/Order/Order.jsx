import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AppContext } from "../../context/appContext";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import "./Order.css";
import logo from "../../assets/Healthy-Toys-Logo+text-22.png";
import Loader from "../Loader/Loader"
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const MPID = import.meta.env.VITE_REACT_MPID;

function Order() {
  const { errorsBack, order, orderDetail, orderDetailData, setOrderDetailData, cartTotal } =
    useContext(CartContext);
  const { userData } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [orderData, setOrderData] = useState({ title: `Healthy Toys (orden: ${order.data.order.id_order})`, price: order.data.order.total + order.data.order.shipping_method, quantity: 1 });
  const orderUpdated = new Date(order.data.order.updatedAt);
  initMercadoPago(`${MPID}`, { locale: 'es-AR' });

  const createPreference = () => {
    setIsLoading(true);
    fetch(`${BASE_URL}/mercadoPago/create_preference`, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };



  return (
    <main className="order_container">
      <header className="header_order">
        <div className="up">
          <img src={logo} alt="logo" />
          <span>
            {orderUpdated.getDate()}/{orderUpdated.getMonth() + 1}/
            {orderUpdated.getFullYear()}
          </span>
        </div>
        <h1>
          Orden N° {order && order.data.order.id_order} - Usuario{" "}
          {userData.data.name} {userData.data.surname}
        </h1>
      </header>
      <section className="dataOrder">
        {errorsBack && <span>{errorsBack}</span>}
        <h3>
          Subtotal Productos: ${" "}
          {new Intl.NumberFormat().format(
            order.data.order.total
          )}
        </h3>
        <h3>Metodo de Envio: $ {order.data.order.shipping_method}</h3>
        <h2>
          Total: $ {new Intl.NumberFormat().format(order.data.order.total + order.data.order.shipping_method)}
        </h2>
        {orderDetailData && (
          <ul>
            {orderDetailData.data.orderItems.map((item) => {
              return (
                <li>
                  {item.quantity} {item.name} {item.color}
                </li>
              );
            })}
          </ul>
        )}
        <section className="buttonsOrder">
          {
            orderDetailData ? (
              <button
          onClick={() => {
            setOrderDetailData("");
          }}
        >
          Ocultar detalle
        </button>
            ) : (
              <button
          onClick={() => {
            orderDetail();
          }}
        >
          Ver detalle
        </button>
            )
          }
        
        {
          !preferenceId && (
            <button 
          id="btn_goPay"
          onClick={() => {createPreference()}}
        >
          PAGAR
        </button>
          )
        }
        </section>

      </section>
      {isLoading && (
        <h4 id="loaderMP" className="loader">
          {<Loader />} Cargando Botón de Pago...
        </h4>
      )}
      {preferenceId && (
        <div className="buttonMP">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
    </main>
  );
}

export default Order;
