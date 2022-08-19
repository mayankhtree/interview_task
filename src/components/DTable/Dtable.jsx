import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
;

const columns = [
  { id: "sr_no", label: "Sr. No.", minWidth: 170 },
  { id: "auther_name", label: "Auther Name", minWidth: 100 },
  {
    id: "data_source",
    label: "Data Source Name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "created",
    label: "Created",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "modified",
    label: "Modified",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(sr_no, auther_name, data_source, created, modified) {
  return { sr_no, auther_name, data_source, created, modified };
}

const rows = [
  createData(1, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(1, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(2, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(3, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(4, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(5, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(6, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(7, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(8, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(9, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(10, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(11, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(12, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(13, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(14, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(15, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(16, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(17, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(18, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(19, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
  createData(20, "Mayank Lushte", "Amazon", "12/08/22", "12/08/22"),
];

export default function DTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper style={{ overflowX: "auto" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    top: 57,
                    minWidth: column.minWidth,
                    backgroundColor: "#fff4ea",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
