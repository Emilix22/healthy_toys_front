import React from "react";
import "./Cart.css"
import RowCart from "./RowCart";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import imgProd from "../../assets/img1.jpg"

function Cart() {
  return (
    <main className="cart_container">
      <h2>Carrito de Compras</h2>
    <table
      className="table table-bordered"
      id="dataTable"
      width="100%"
      cellSpacing="0"
    >
      <thead>
        <tr>
          <td>
            <strong>Imagen</strong>
          </td>
          <td>
            <strong>Nombre</strong>
          </td>
          <td>
            <strong>Precio</strong>
          </td>
          <td>
            <strong>Cantidad</strong>
          </td>
          <td>
            <strong><DeleteForeverIcon /></strong>
          </td>
        </tr>
      </thead>
      <tbody>
        <RowCart
          image={<img src={imgProd} alt="imgProd" />}
          name={"BOUNCER"}
          price={"$ 150.000"}
          quantity={"1"}
        />
      </tbody>
    </table>
    </main>
  );
}

export default Cart;
