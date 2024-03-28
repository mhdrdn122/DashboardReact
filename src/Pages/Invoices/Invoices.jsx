import React from 'react'
import { DataGrid , GridToolbar  } from "@mui/x-data-grid";
import { Box } from '@mui/material';
import { rows , columns } from './data';
import Header from '../../components/Header';

const Invoices = () => {
  return (
    <Box sx={{ height: 600, width: "100%" , mx:"auto"}}>
    <Header title={"Invoices"}  subTitle={"List of Invoices Balances"}/>
        <DataGrid
        checkboxSelection
         slots={{
          toolbar: GridToolbar,
        }}
         rows={rows} columns={columns} />
      </Box>
  )
}

export default Invoices