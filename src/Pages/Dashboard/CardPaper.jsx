import React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import Chart from './Chart'

const CardPaper = ({icon , title , subtitle , increase , schemeColor , data}) => {
  return (
    <Paper  sx={{flexGrow:1 ,minWidth:"280px" , p:1.3 , display:"flex",alignItems:"center" , justifyContent:"space-between"}}>
            <Stack direction={"column"} sx={{gap:1  , display:"flex",alignItems:"center" , justifyContent:"space-between"}}>
            {icon} 
            <Typography variant='body2' sx={{ fontSize: "15px"}} >
            {title}
            </Typography>
            <Typography variant='body2' sx={{ fontSize: "15px"}} >
            {subtitle}
            </Typography>
            </Stack>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} width={100}>
                <Box height="80px" width="100px">
                    <Chart schemeColor={schemeColor} data={data}/>
                </Box>
                <Typography variant='body2' sx={{ fontSize: "13px"}} >
                {increase}
                </Typography>
            </Stack>
        </Paper>
  )
}

export default CardPaper