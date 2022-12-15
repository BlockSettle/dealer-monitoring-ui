import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const TakerItem = ({ data, v }) => {
  const [open, setOpen] = useState(false)
  function createData(id, amount, base_price, collateral, leverage, status, profit_loss) {
    return { id, amount, base_price, collateral, leverage, status, profit_loss };
  }

  let rows = [];

  Object.keys(data).map((v, i) => {
    rows.push(createData(
      data[v].position.id,
      data[v].position.amount,
      data[v].position.base_price,
      data[v].position.collateral,
      data[v].position.leverage,
      data[v].position.status,
      data[v].position.profit_loss,
    ))
  })

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <IconButton onClick={() => setOpen(!open)}>
          {
            open ?
              <ExpandLessIcon color="secondary" />
              :
              <ExpandMoreIcon color="secondary" />
          }
        </IconButton>
        <Typography variant='p' color="secondary">{v}</Typography>
      </Box>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">amount</TableCell>
                <TableCell align="right">base_price</TableCell>
                <TableCell align="right">collateral</TableCell>
                <TableCell align="right">leverage</TableCell>
                <TableCell align="right">status</TableCell>
                <TableCell align="right">profit_loss</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.base_price}</TableCell>
                  <TableCell align="right">{row.collateral}</TableCell>
                  <TableCell align="right">{row.leverage}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.profit_loss}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Box>
  )
}

const PositionTaker = ({ data }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', pr: 3 }}>
        <Typography variant='h6' color="secondary">{data.name}</Typography>
        <Box>
          {/* <Typography variant='p'>{data.product}</Typography> */}
          <Typography variant='p' color={data.netExposure > 0 ? 'green' : 'red'} fontSize={10} sx={{ px: 3 }}>{data.netExposure * 100}%</Typography>
        </Box>
      </Box>
      <Box>

        {
          Object.keys(data.positions).map((v, i) => {
            return (
              <TakerItem key={i} data={data.positions[v]} v={v} />
            )
          })
        }
      </Box>
    </Box>

  )
}

export default PositionTaker