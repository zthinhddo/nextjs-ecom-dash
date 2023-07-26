import * as React from "react";
import { useContext, useState } from "react";
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
import { AppDefaultContext } from "@/app/context/context";

const CustomAppBar = () => {
  const [open, setOpen] = useState(false);

  const handleCloseAppBar = () => {
    if (open) setOpen(false);
  }

  return (
    <Drawer anchor="left" open={open} onClose={handleCloseAppBar}>
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
