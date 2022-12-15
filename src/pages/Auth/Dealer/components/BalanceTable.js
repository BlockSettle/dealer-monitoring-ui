import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BalanceTable = ({ data }) => {

  function createData(exchangeName, free, reserved, total) {
    return { exchangeName, free, reserved, total };
  }

  let rows = [];

  Object.keys(data).map((v, i) => {
    rows.push(createData(v, data[v].free, data[v].reserved, data[v].total))
  })

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Free</TableCell>
            <TableCell align="right">Reserved</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.exchangeName}
              </TableCell>
              <TableCell align="right">{row.free}</TableCell>
              <TableCell align="right">{row.reserved}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default BalanceTable