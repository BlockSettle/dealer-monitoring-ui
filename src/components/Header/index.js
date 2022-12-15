import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { logoMain } from "assets/images/image";
import { useLocation, Link } from "react-router-dom";
import { GlobalContext } from "context/Provider";
import ThemeToggle from "assets/theme/themetoggle";
// import ThemeToggle from 'assets/theme/themetoggle'

function Header() {

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={1}>
          <Toolbar className="app-bar">
            <Box sx={{ flexGrow: 1 }}>
              <img src={logoMain} alt="logo" className="logo-img" width={50} />
            </Box>
            <ThemeToggle />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

export default Header;
