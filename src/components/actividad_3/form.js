import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form = ({ formik }) => {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        label="Nombre"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        helperText={formik.errors.name}
        error={Boolean(formik.errors.name)}
      />

      <TextField
        label="Descripción"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        helperText={formik.errors.description}
        error={Boolean(formik.errors.description)}
      />

      <TextField
        rowsMax={5}
        multiline={true}
        label="Presio Base"
        name="basePrice"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.basePrice}
        helperText={formik.errors.basePrice}
        error={Boolean(formik.errors.basePrice)}
      />

      <TextField
        label="Tasa de impuestos"
        name="taxRate"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.taxRate}
        helperText={formik.errors.taxRate}
        error={Boolean(formik.errors.taxRate)}
      />

      <FormControl error={Boolean(formik.errors.productState)}>
        <InputLabel id="demo-simple-select-label">
          Estado del producto
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.productState}
          onChange={formik.handleChange}
          name="productState"
        >
          <MenuItem value={"PUBLICADO"}>Publicado</MenuItem>
          <MenuItem value={"BORRADO"}>Borrado</MenuItem>
        </Select>
        <FormHelperText>{formik.errors.productState}</FormHelperText>
      </FormControl>

      <TextField
        label="Cantidad en inventario"
        name="inventoryQuantity"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.inventoryQuantity}
        helperText={formik.errors.inventoryQuantity}
        error={Boolean(formik.errors.inventoryQuantity)}
      />

      <Button type="submit" variant="contained" color="primary">
        Primary
      </Button>
    </form>
  );
};

export default Form;
