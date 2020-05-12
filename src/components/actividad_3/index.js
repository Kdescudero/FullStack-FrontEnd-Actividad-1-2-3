import React, { useState, useEffect } from "react";
import Table from "./table";
import Form from "./form";
import { stateInputs } from "./valuesInput";
import { getData } from "data";

const Actividad_3 = () => {
  const formik = stateInputs();

  const [products, setProducts] = useState({
    data: [],
    error: null,
    loading: false,
  });

  useEffect(() => getData({ setProducts }), []);

  const { data, loading, error } = products;

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  if (data.length === 0) return <h2>No hay datos</h2>;

  return (
    <>
      <Table data={data} />
      <Form formik={formik} />
    </>
  );
};

export default Actividad_3;
