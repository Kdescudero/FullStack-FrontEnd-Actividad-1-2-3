import React, { useEffect, useState } from "react";
import Table from "./table";
import { getData } from "data";

const ListProducts = () => {
  const [products, setProducts] = useState({
    data: [],
    error: null,
    loading: false,
  });

  useEffect(() => getData({ setProducts }), []);

  const { data, loading, error } = products;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  if (data.length === 0) return <p>No hay registros</p>;

  return <Table data={data} />;
};

export default ListProducts;
