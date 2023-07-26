import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';

type Anchor = "left" | "top";

const CustomAppBar = () => {

  const [open, setOpen] = useState(); // open sidebar by default

  const toggleSideBar = (status: boolean) => {
    setOpen(status);
  }

  const handleCloseSideBar = () => {
    setOpen(false);
  }

  return (
    <Drawer anchor="left" open={open} onClose={handleCloseSideBar}>
      <Box>
        <List>
          {
            ['Dashboard', 'Mail', 'File', 'User' ].map((text, index) => (
              <ListItem key={`${text}_{index}`}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
}
export default CustomAppBar;
