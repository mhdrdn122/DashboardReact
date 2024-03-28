import React from 'react'
import Geo from './Geo'
import { Box } from '@mui/material'
import { useTheme } from '@mui/material'

const Geography = () => {
  const theme = useTheme()

  return (
    <Box height="75vh" sx={{border : `1px solid ${ theme.palette.text.primary}` }} >
        <Geo />
    </Box>
  )
}

export default Geography