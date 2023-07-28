'use client';

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";

import { useNavigationMenuContext } from "@/app/context";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import { theme } from "@/styles/theme";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
];

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MyStyleDrawer = styled(Drawer)(({ theme }) => ({
  marginTop: theme.mixins.toolbar.minHeight,
}));

export const CustomDrawer = () => {
  const { isOpen, toggleNavigationMenu } = useNavigationMenuContext();

  return (
    <MyStyleDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleNavigationMenu}
      elevation={0}
      variant="persistent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box'
        }
      }}
      transitionDuration={{
        enter: 200,
        exit: 200 
      }}
    >
      <DrawerHeader>
        <IconButton onClick={toggleNavigationMenu}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      </DrawerHeader>
      {/* Content of the drawer: a list of menu item */}
      <List>
        {NAVIGATION_URL.map((menuItem, index) => {
          return (
            <ListItem key={`${menuItem.title}_${index}`} disablePadding>
              <ListItemButton
                href={menuItem.url}
                onClick={() => toggleNavigationMenu()}
              >
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </MyStyleDrawer>
  );
};

export default CustomDrawer;