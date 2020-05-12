import React from "react";

const Table = ({ data }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Precio base</th>
        <th scope="col">Cantidad Inventario</th>
        <th scope="col">Tasa Inpuesto</th>
        <th scope="col">Estado Producto</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, key) => (
        <tr key={`key-table-${key}`}>
          <th scope="row">{item.ID}</th>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.basePrice}</td>
          <td>{item.inventoryQuantity}</td>
          <td>{item.taxRate}</td>
          <td>{item.productStatus}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
