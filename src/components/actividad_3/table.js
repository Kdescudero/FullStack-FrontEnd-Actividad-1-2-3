import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    padding: 18,
  },
});

const SimpleTable = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Precio base</TableCell>
              <TableCell align="right">Cantidad Inventario</TableCell>
              <TableCell align="right">Tasa Inpuesto</TableCell>
              <TableCell align="right">Estado Producto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.ID}>
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.basePrice}</TableCell>
                <TableCell align="right">{row.inventoryQuantity}</TableCell>
                <TableCell align="right">{row.taxRate}</TableCell>
                <TableCell align="right">{row.productStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SimpleTable;
