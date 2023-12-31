import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";

function NavHeader() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <HomeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Primeiro Projeto
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavHeader;
