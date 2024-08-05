import React from "react";

function RowCart(props) {
  return (
    <tr className="rowTable">
      <td>{props.image}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.quantity}</td>
      <td>{"x"}</td>
    </tr>
  );
}

export default RowCart;
