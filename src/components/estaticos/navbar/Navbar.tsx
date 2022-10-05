import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Luca Coding
            </Typography>
          </Box>
          <Grid container justifyContent="flex-end">
            <Box display="flex" justifyContent="space-around">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Posts
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Themes
                </Typography>
              </Box>
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Register Theme
                </Typography>
              </Box>
              <Link to="/login" className="text-decorator-none ">
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                    Logout
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
