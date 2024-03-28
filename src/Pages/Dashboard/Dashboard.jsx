import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Header from '../../components/Header'

const Dashboard = () => {

  return (
    <div> 
     <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Header title={"Dashboard"} subTitle={"Welcome to your Dashboard"} />

      <Box sx={{textAlign:"right" , my:3,padding:1.5}}>
        <Button variant="contained" >Download Repo
        <DownloadOutlinedIcon />
        
        </Button>
      </Box>
     </Stack>
      <Row1 />
      <Row2 />
      <Row3 />    
    </div>
    
  )
}

export default Dashboard