import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import CardComponent from "../../components/cards/CardComponent";
import Revenue from "../../components/revenue/Revenue";
import SideNavbar from "../../components/sideNavbar/SideNavbar";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import "./home.css";
import { rows } from "../../Data";
import { columns } from "../../Data";


const Home = () => {
  return (
    <div>
      <div>
        <TopNavbar />
        <SideNavbar />
        <Revenue />
        <CardComponent />
      </div>
      <div className="dataGridContainer">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          disableSelectionOnClick
          className="dataGrid"
        />
      </div>
    </div>
  );
};

export default Home;
