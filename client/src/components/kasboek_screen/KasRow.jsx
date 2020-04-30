import React from "react";
import {  TableCell, TableRow, Checkbox } from "../../modules/material";

export default function KasRow({
  row,
  headCells,
  labelId,
  selectedItems,
  handleClick,
}) {
  const isSelected = (name) => selectedItems.indexOf(name) !== -1;

  return (
    <>
      <TableRow key={row.datum}>
        <TableCell padding="checkbox">
          <Checkbox
            onClick={(e) => handleClick(e, row.id)}
            checked={isSelected(row.id)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </TableCell>
        {headCells.map(({ id, numeric }) => {
          const cellid = id;
          return <TableCell align="center">{row[cellid]}</TableCell>;
        })}
      </TableRow>
    </>
  );
}
