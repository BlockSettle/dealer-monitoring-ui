import { Typography } from '@mui/material'
import React from 'react'

const BalanceMaker = ({ data }) => {
  return (
    <div>
      <Typography variant='h6' color="secondary">{data.name}</Typography>
      {
        Object.keys(data.balances).map((v, i) => {
          return (
            <div key={i}>{`${v}: ${data.balances[v]}`}</div>
          )
        })
      }
    </div>
  )
}

export default BalanceMaker