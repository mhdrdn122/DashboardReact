import React from 'react'
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { rows , columns } from './data';
import Header from '../../components/Header';

const Contacts = () => {
  return (
    <Box sx={{ height: 600, width: "100%" , mx:"auto"}}>
    <Header title={"Contacts"} subTitle={"contact us"} />
        <DataGrid
         slots={{
          toolbar: GridToolbar,
        }}
         rows={rows} columns={columns} />
      </Box>
  )
}

export default Contacts