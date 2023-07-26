'use client';

import { Paper, Button, Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Drawer, Divider } from "@mui/material";
import { CustomAppBar } from ".";
import { useEffect, useState } from "react";
import CustomHeader from "./components/CustomHeader";
import { AppDefaultContext } from "@/app/context/context";
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PeopleIcon from '@mui/icons-material/People';

const NAVIGATION_URL = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: <DashboardIcon />
    },
    {
        title: 'Mail',
        url: '/mail',
        icon: <MailIcon />
    },
    {
        title: 'File',
        url: '/file',
        icon: <FileUploadIcon />
    },
    {
        title: 'User',
        url: '/user',
        icon: <PeopleIcon />
    }
]

const Layout = () => {

    const [isOpenMenu, setOpenMenu] = useState<boolean | undefined>(false);

    const handleCloseMenu = () => {
        if (isOpenMenu) setOpenMenu(false);
    }

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }

    return (
      <div
        id="app-layout"
        className="flex flex-row w-full h-full overflow-hidden bg-white relative"
      >
        <div className="flex flex-1 flex-col overflow-hidden relative">
          <CustomHeader handleOpenMenu={handleOpenMenu}/>
          <Drawer anchor="left" open={isOpenMenu} onClose={handleCloseMenu} sx={{ marginTop: '10px' }}>
            <Divider />
            <List>
              {NAVIGATION_URL.map((menuItem, index) => {
                return (
                  <ListItem key={`${menuItem.title}_{index}`} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {menuItem.icon}
                      </ListItemIcon>
                      <ListItemText primary={menuItem.title}></ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Divider />
            <List>
              {["Dashboard", "Mail", "File", "User"].map((text, index) => {
                return (
                  <ListItem key={`${text}_{index}`} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <DashboardIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text}></ListItemText>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </div>
      </div>
    );
}

export default Layout;