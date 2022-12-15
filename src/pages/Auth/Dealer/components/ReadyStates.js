import { Badge, Box } from '@mui/material'
import React from 'react'

const ReadyStates = ({ data }) => {
  console.log(data)
  const { dealer, hedger, maker, taker } = data
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', px: 4, mt: 2 }}>
      <Box sx={{ pr: 3 }}>
        {
          dealer ?
            <Badge color="success" badgeContent=" " sx={{ mr: 1 }} />
            :
            <Badge color="secondary" badgeContent=" " sx={{ mr: 1 }} />
        } Dealer</Box>
      <Box sx={{ pr: 3 }}>
        {
          hedger ?
            <Badge color="success" badgeContent=" " sx={{ mr: 1 }} />
            :
            <Badge color="secondary" badgeContent=" " sx={{ mr: 1 }} />
        } Hedger</Box>
      <Box sx={{ pr: 3 }}>
        {
          maker ?
            <Badge color="success" badgeContent=" " sx={{ mr: 1 }} />
            :
            <Badge color="secondary" badgeContent=" " sx={{ mr: 1 }} />
        } Maker</Box>
      <Box sx={{ pr: 3 }}>
        {
          taker ?
            <Badge color="success" badgeContent=" " sx={{ mr: 1 }} />
            :
            <Badge color="secondary" badgeContent=" " sx={{ mr: 1 }} />
        } Taker</Box>
    </Box>

  )
}

export default ReadyStates