import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import MenuIcon from "@mui/icons-material/Menu";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router";
import { grey } from "@mui/material/colors";
const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactSupportOutlinedIcon />,
    path: "/contacts",
  },
  { text: "Invoices Balances", icon: <ReceiptIcon />, path: "/invoices" },
];

const Array2 = [
  { text: "Calender", icon: <CalendarMonthIcon />, path: "/calendar" },
  { text: "FAQ Page", icon: <HelpOutlineIcon />, path: "/faq" },
];

const Array3 = [
  { text: "Bar Chart", icon: <BarChartIcon />, path: "/bar" },
  { text: "pie Chart", icon: <PieChartOutlineIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapIcon />, path: "/geography" },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: "auto",
          my: 2,
          width: open ? 80 : 40,
          height: open ? 80 : 40,
          border: "2px solid gray",
          transition: "0.25s",
        }}
        alt="Remy Sharp"
        src="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 16 : 0, transition: "0.25s" }}
      >
        {" "}
        Muhammed Ramadan{" "}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 16 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        {" "}
        Admin{" "}
      </Typography>

      <Divider />
      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                maxHeight: 38,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode == "light"
                      ? grey[300]
                      : grey[900]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                maxHeight: 38,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode == "light"
                      ? grey[300]
                      : grey[900]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                maxHeight: 38,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.mode == "light"
                      ? grey[300]
                      : grey[900]
                    : null,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
