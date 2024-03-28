import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Typography
        sx={{
          color: theme.palette.info.main,
          fontSize: "30px",
          fontWeight: 900,
        }}
      >
        {title}
      </Typography>
      <Typography>{subTitle}</Typography>
    </Box>
  );
};

export default Header;
