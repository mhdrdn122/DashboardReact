import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Chart from './Chart'
import { data1 } from './data'
import Bar from "../BarChart/Bar"
import Geo from "../Geography/Geo"

const Row3 = () => {
  const theme = useTheme()
  return (
    <Stack 
        direction={"row"} 
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        width="100%"
        gap={1}>

        <Paper width="33%" 
        sx={{pt:"30px" ,
        minWidth:"400px" ,
        px:"10px",
        pb:"50px",
        height:"450px",
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"column",
        flexGrow:1}}
         >
            <Typography
            sx={{
              fontSize:"20px",
              color: theme.palette.secondary.main,
              fontWeight:900,
            }} >Campaign</Typography>
            <Box height={180}>
                <Chart schemeColor={"accent"}  data={data1}/>
            </Box>
            <Box textAlign={"center"}>
                <Typography sx={{
              fontSize:"18px",
              fontWeight:900,
            }} >$48,352 revenue generated</Typography>
                <Typography
                sx={{
                  fontSize:"14px",
                }} 
                >includes extra misc expenditures and costs</Typography>
            </Box>
        </Paper>

        <Paper
        sx={{pt:"30px" ,
        minWidth:"400px" ,
        px:"10px",
        pb:"50px",
        height:"450px",
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"column",
        flexGrow:1}}
        >
            <Typography
            sx={{
              fontSize:"20px",
              color: theme.palette.secondary.main,
              fontWeight:900,
            }} >
            Sales Quantity</Typography>
            <Box height={300}>
                <Bar isDashboard={true} />
            </Box>
           
        </Paper>

        <Paper
        sx={{pt:"30px" ,
        minWidth:"400px" ,
        px:"10px",
        pb:"50px",
        height:"450px",
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"column",
        flexGrow:1}}
       >
            
            <Box height="100%">
                <Geo />
            </Box>
           
        </Paper>
    </Stack>
  )
}

export default Row3