import React from 'react'
import { Box, Typography } from '@mui/material'
import BalanceTable from './BalanceTable'


const BalanceTaker = ({ data }) => {

  return (
    <Box>
      <Typography variant='h6' color="secondary">{data.name}</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography variant='title' color={"secondary"}>Exchange</Typography>
        <BalanceTable data={data.balances.exchange} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant='title' color={"secondary"}>Margin</Typography>
        <BalanceTable data={data.balances.margin} />
      </Box>
    </Box>
  )
}

export default BalanceTaker