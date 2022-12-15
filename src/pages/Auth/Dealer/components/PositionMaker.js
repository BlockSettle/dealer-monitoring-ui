import React from 'react'
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PositionMaker = ({ data }) => {
  function createData(_id, indexPrice, sessionIM, _fee, _price, _product_type, _quantity, _reference_exposure) {
    return { _id, indexPrice, sessionIM, _fee, _price, _product_type, _quantity, _reference_exposure };
  }

  let rows = [];

  Object.keys(data.orderData.orders).map((v, i) => {
    rows.push(createData(
      data.orderData.orders[v]._id,
      data.orderData.orders[v].indexPrice,
      data.orderData.orders[v].sessionIM,
      data.orderData.orders[v]._fee,
      data.orderData.orders[v]._price,
      data.orderData.orders[v]._product_type,
      data.orderData.orders[v]._quantity,
      data.orderData.orders[v]._reference_exposure,
    ))
  })
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant='h6' color="secondary">{data.name}</Typography>
        <Box>
          <Typography variant='p'>{data.indexPrice}</Typography>
          <Typography variant='p' color={data.netExposure > 0 ? 'green' : 'danger'} fontSize={10} sx={{ px: 3 }}>{data.netExposure * 100}%</Typography>
          <Typography variant='p'>{data.orderData.session.close == null ? 'Open' : 'close'}</Typography>
        </Box>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Index Price</TableCell>
                <TableCell align="right">SessionIM</TableCell>
                <TableCell align="right">Fee</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Product Type</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Reference Exposure</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{row.indexPrice}</TableCell>
                  <TableCell align="right">{row.sessionIM}</TableCell>
                  <TableCell align="right">{row._fee}</TableCell>
                  <TableCell align="right">{row._price}</TableCell>
                  <TableCell align="right">{row._product_type}</TableCell>
                  <TableCell align="right">{row._quantity}</TableCell>
                  <TableCell align="right">{row._reference_exposure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Box>
  )
}

export default PositionMaker