import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import Header from "../../components/Header";
const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "80px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
          { access === "Admin" && (<AdminPanelSettingsOutlinedIcon sx={{color:"#fff"}}  fontSize="small"/>)}
          { access === "Manager" && (<ShieldOutlinedIcon sx={{color:"#fff"}}  fontSize="small"/>)}
          { access === "User" && (<LockOpenOutlinedIcon sx={{color:"#fff"}}  fontSize="small"/>)}

            <Typography sx={{ fontSize: "13px" , color:"#fff" }}> {access} </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "100%" , mx:"auto"}}>
        <Header  title={"Team"} subTitle={"Managing The Team Members"} />

        <DataGrid rows={rows} columns={columns} />
      </Box>
  );
};

export default Team;
