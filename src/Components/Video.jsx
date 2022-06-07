import React from "react";
import Vidio1 from "../assets/hero.mp4";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css";

const Video2 = () => {
  return (
    <div>
      <video src={Vidio1} autoPlay loop muted style={{ width: "100%" }}></video>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <div style={{ marginTop: "-55%", marginLeft: "40%" }}>
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Search"
            sx={{ backgroundColor: "white", borderRadius: "6px" }}
          />
          <Button
            variant="contained"
            sx={{ padding: "15px", backgroundColor: "#009999" }}
            className="searchButton"
          >
            <SearchIcon sx={{ fontSize: "25px" }} />
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Video2;
