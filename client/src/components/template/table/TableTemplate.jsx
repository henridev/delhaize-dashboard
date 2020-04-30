import React, { useState } from "react";

/* components */
import {
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
  makeStyles,
} from "../../../modules/material";
import EnhancedTableToolbar from "./TableToolbarTemplate";
import EnhancedTableHead from "./TableHeadTemplate";
import KasRow from "../../kasboek_screen/KasRow";
import ProgressSpinner from "../ProgressSpinner";

/* utils */
import { getComparator, stableSort } from "../../../functions/functions";

import apiKas from "../../../api/kasboek";

/* styling */
import { enchancedTableStyle } from "../../../styles/material/makeStyles";
const useStyles = makeStyles(enchancedTableStyle);

export default function TableTemplate(props) {
  const classes = useStyles();
  const { rows, orderbyColumn, tableName, headCells, setRows } = props;
  console.log("rows table", rows);
  /* states */
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState(orderbyColumn);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /* HANDLERS */
  const handleRequestSort = (event, orderColumn) => {
    const isAsc = orderBy === orderColumn && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(orderColumn);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = () => {
    console.log("selected", selected);
    Promise.all(selected.map((id) => apiKas.deleteKasboek(id)))
      .then((v) => {
        console.log("all selection deleted");
        setRows(rows.filter((row) => !selected.includes(row.id)));
        setSelected([]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /* END HANDLERS */

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  // render The table content
  const renderTablecontent = () => {
    return (
      <TableBody>
        {stableSort(rows, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row, index) => {
            const isItemSelected = isSelected(row.datum);
            const labelId = `enhanced-table-checkbox-${index}`;
            return (
              <KasRow
                row={row}
                headCells={headCells}
                classes={classes}
                handleClick={handleClick}
                key={row.datum + index}
                selectedItems={selected}
                selected={isItemSelected}
                labelId={labelId}
                emptyRows={emptyRows}
                dense={true}
              ></KasRow>
            );
          })}
      </TableBody>
    );
  };

  // if no info render the spinner
  if (!rows) {
    return (
      <ProgressSpinner waittext={`aan het laden van ${tableName} tabel`} />
    );
  }

  if (!rows.length) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
        }}
      >
        geen info in voor huidige datums
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          title={tableName}
          handleDelete={handleDelete}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby={tableName}
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              headCells={headCells}
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            {renderTablecontent()}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="rijen per pagina"
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
