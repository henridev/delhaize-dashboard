import React, { useEffect, useState } from "react";
import api from "../../api/kasboek";
import { createCSVfromJSON } from "../../functions/handlecsv";

import { Fab, GetAppIcon } from "../../modules/material";
import TableTemplate from "../template/table/TableTemplate";
import Filter from "../kasboek_screen/Filter";

const headCells = [
  { id: "datum", numeric: false, disablePadding: true, label: "datum" },
  { id: "totaal", numeric: true, disablePadding: false, label: "omzet" },
  {
    id: "cheque_delhaize",
    numeric: true,
    disablePadding: false,
    label: "cheque delhaize",
  },
  {
    id: "tegoebon",
    numeric: true,
    disablePadding: false,
    label: "tegoedbon",
  },
  {
    id: "publiciteitsbon",
    numeric: true,
    disablePadding: false,
    label: "publiciteitsbon",
  },
  {
    id: "leeggoedbon",
    numeric: true,
    disablePadding: false,
    label: "leeggoedbon",
  },
  {
    id: "bancontact",
    numeric: true,
    disablePadding: false,
    label: "bancontact",
  },
  {
    id: "op_krediet",
    numeric: true,
    disablePadding: false,
    label: "op krediet",
  },
  {
    id: "andere",
    numeric: true,
    disablePadding: false,
    label: "andere",
  },
  {
    id: "amex",
    numeric: true,
    disablePadding: false,
    label: "amex",
  },

  {
    id: "visa",
    numeric: true,
    disablePadding: false,
    label: "visa",
  },
  {
    id: "mastercard",
    numeric: true,
    disablePadding: false,
    label: "mastercard",
  },
  {
    id: "maestro",
    numeric: true,
    disablePadding: false,
    label: "maestro",
  },
  {
    id: "visa_electron",
    numeric: true,
    disablePadding: false,
    label: "visa electron",
  },
  {
    id: "payfair",
    numeric: true,
    disablePadding: false,
    label: "payfair",
  },
  {
    id: "sodexo",
    numeric: true,
    disablePadding: false,
    label: "sodexo",
  },
  {
    id: "accordenred",
    numeric: true,
    disablePadding: false,
    label: "accordenred",
  },
  {
    id: "som_totaal",
    numeric: true,
    disablePadding: false,
    label: "totaal",
  },
  {
    id: "verschil",
    numeric: true,
    disablePadding: false,
    label: "verschil",
  },
];

const today = new Date();
const oneMonthBeforeToday = new Date().setMonth(today.getMonth() - 1);

export default function Kasboek() {
  const [filterValues, setFilterValues] = useState({
    startDate: new Date(oneMonthBeforeToday),
    endDate: today,
  });
  const [fullkasboek, setFullKasboek] = useState([]);
  const [filteredkasboek, setFilteredKasboek] = useState([]);

  useEffect(() => {
    api.getKasboek().then((rijen) => {
      rijen = rijen.map((rij) => {
        const d1 = rij.datum.trim().split(" ")[1].split("/");
        rij.dateTypeDate = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
        return rij;
      });
      setFilteredKasboek(rijen.filter(filterDates));
      setFullKasboek(rijen);
    });
    return () => {};
  }, []);

  useEffect(() => {
    setFilteredKasboek(fullkasboek.filter(filterDates));
    return () => {};
  }, [filterValues]);

  //#region Date Functions

  const filterDates = ({ dateTypeDate }) => {
    const from = filterValues.startDate;
    const to = filterValues.endDate;
    const check = dateTypeDate;
    return (
      check.getTime() <= to.getTime() + 86400000 &&
      check.getTime() >= from.getTime() - 86400000
    );
  };

  const sortRowOnDate = (A, B) => {
    const newestFirst = false;
    A = Number(A.dateTypeDate);
    B = Number(B.dateTypeDate);
    if (A < B) {
      return newestFirst ? 1 : -1;
    }
    if (A > B) {
      return newestFirst ? -1 : 1;
    }
    return 0;
  };

  //#endregion Date Functions

  const handleDownload = () => {
    const rowsToExport = filteredkasboek
      .filter(filterDates)
      .sort(sortRowOnDate);
    const allowedColumns = headCells.map(({ id }) => id);
    createCSVfromJSON(rowsToExport, allowedColumns);
  };

  return (
    <div>
      <Filter filterValues={filterValues} setFilterValues={setFilterValues}>
        <Fab
          color="primary"
          size="large"
          variant="extended"
          onClick={handleDownload}
        >
          <GetAppIcon />
          download kasboek
        </Fab>
      </Filter>
      <TableTemplate
        rows={filteredkasboek}
        setRows={setFilteredKasboek}
        orderbyColumn="datum"
        tableName="kas"
        headCells={headCells}
      ></TableTemplate>
    </div>
  );
}
