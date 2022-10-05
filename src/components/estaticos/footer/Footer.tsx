import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import purple from "@material-ui/core/colors/purple";

import "./Footer.css";

const roxin = purple[300];

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="texto"
              >
                Follow me on my social medias{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/luca.andrey14" target="_blank">
                <FacebookIcon className="redes" />
              </a>
              <a href="https://www.instagram.com/lucaandrey/" target="_blank">
                <InstagramIcon className="redes" />
              </a>
              <a href="https://www.linkedin.com/in/lucaandrey" target="_blank">
                <LinkedInIcon className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="texto"
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a
                className="text-decorator-none"
                target="_blank"
                href="https://github.com/lucaandrey"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className="texto"
                  align="center"
                >
                  Luca Coding
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
