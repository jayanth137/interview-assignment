import { Box } from "@mui/material";
import React from "react";
import "./revenue.css";

const Revenue = () => {
  return (
    <div className="boxContainer">
      <Box className="box">
        <div className="revenueContainer">
          <h5 className="totalRevenue"> Total Revenue</h5>
        </div>
        <div className="amountContainer">
          <h2 className="amount"> $ 150,000</h2>
        </div>
      </Box>
    </div>
  );
};

export default Revenue;
