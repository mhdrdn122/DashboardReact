import React from "react";
import CardPaper from "./CardPaper";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Stack, useTheme } from "@mui/material";
import { data1 , data2 , data3 , data4 } from "./data";

const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
      <CardPaper
        icon={
          <EmailOutlinedIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}

          />
        }
        title={"12,361"}
        subtitle={"Emails Sent"}
        increase={"+14%"}
        schemeColor={'category10'}
        data={data1}
      />

<CardPaper
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}

          />
        }
        title={"431,225"}
        subtitle={"Sales obtained"}
        increase={"+21%"}
        schemeColor={'spectral'}
        data={data2}

      />
      <CardPaper
        icon={
          <PersonAddIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}

          />
        }
        title={"32,441"}
        subtitle={"New Clients"}
        increase={"+25%"}
        schemeColor={'purpleRed_green'}
        data={data3}

      />

<CardPaper
        icon={
          <TrafficIcon
            sx={{ fontSize: "25px", color: theme.palette.secondary.main }}

          />
        }
        title={"1,325,134"}
        subtitle={"Traffic Received"}
        increase={"+43%"}
        schemeColor={'accent'}
        data={data4}

      />
    </Stack>
  );
};

export default Row1;
