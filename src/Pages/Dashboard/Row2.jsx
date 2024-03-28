import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Line from "../LineChart/Line"
import IconButton from '@mui/material/IconButton';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Button from '@mui/material/Button';

const Row2 = () => {
    const theme = useTheme()
  return (
    <Stack flexWrap={"wrap"} my={2} gap={3}  direction={"row"}>
        <Paper
         sx={{ 
            height : "310px",
            Width : "700px",
            flexGrow:1,
            
            }} >
            <Stack flexWrap={"wrap"} p={2} justifyContent={"space-between"} gap={1}  direction={"row"}>
                <Box>
                    <Typography 
                    sx={{
                        fontSize:"20px",
                        color: theme.palette.secondary.main,
                        fontWeight:900,
                        my:1
                    }} >
                        Revenue Generated
                    </Typography>
                    <Typography >
                       $59,342.32
                    </Typography>
                </Box>
                <Box>
                <IconButton sx={{
                        backgroundColor : theme.palette.background.default
                    }} aria-label="delete">
                    <DownloadOutlinedIcon   />
                </IconButton>
                </Box>
            </Stack>
            <Box sx={{ 
            height : "70%",
            
            }}>
              <Line isDashboard={true} />

            </Box>
        </Paper>
        <Box sx={{ 
            height : "310px",
            width : "280px",
            flexGrow:1,
            display:"flex",
            flexDirection:"column",
            gap : 1 ,
            overflow : "auto"
            }}
            >
            <Paper flexGrow={1}  sx={{color:theme.palette.secondary.main ,fontWeight:900, py:"10px" , px:"5px"}}>
                Recent Transactions
            </Paper>

            <Paper flexGrow={1}  sx={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"   , px:"10px"}}>
                
                <Box fontSize={14} m={0}>
                    <h3>01e4dsaewf</h3>
                    <span>johndoe</span>
                </Box>
                <Box fontSize={14}>
                    2021-09-01
                </Box>
                <Button fontSize={14} variant="contained" color="error">
                    233$
                </Button>
            </Paper>

            <Paper flexGrow={1}  sx={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"   , px:"10px"}}>
                
                <Box fontSize={14} m={0}>
                    <h3>01e4dsaewf</h3>
                    <span>johndoe</span>
                </Box>
                <Box fontSize={14}>
                    2021-09-01
                </Box>
                <Button fontSize={14} variant="contained" color="error">
                    233$
                </Button>
            </Paper>

            <Paper flexGrow={1}  sx={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"   , px:"10px"}}>
                
                <Box fontSize={14} m={0}>
                    <h3>01e4dsaewf</h3>
                    <span>johndoe</span>
                </Box>
                <Box fontSize={14}>
                    2021-09-01
                </Box>
                <Button fontSize={14} variant="contained" color="error">
                    233$
                </Button>
            </Paper>

            <Paper flexGrow={1}  sx={{display:"flex" , alignItems:"center" ,justifyContent:"space-between"   , px:"10px"}}>
                
                <Box fontSize={14} m={0}>
                    <h3>01e4dsaewf</h3>
                    <span>johndoe</span>
                </Box>
                <Box fontSize={14}>
                    2021-09-01
                </Box>
                <Button fontSize={14} variant="contained" color="error">
                    233$
                </Button>
            </Paper>

        </Box>
    </Stack>
  )
}

export default Row2