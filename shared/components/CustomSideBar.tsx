import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

function CustomSideBar() {
  return (
    <AppBar position="static">
      <Toolbar component="div" disableGutters>
        <IconButton aria-label="open-menu">
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Next.js 13 Demo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default CustomSideBar;