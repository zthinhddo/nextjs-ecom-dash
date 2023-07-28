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
import CloudIcon from '@mui/icons-material/Cloud';

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
  ...theme.mixins.toolbar,
  display: 'flex',
  // necessary for content to be below app bar
  justifyContent: 'center',
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
      elevation={0}
      variant="persistent"
      sx={{
        width: 180,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 180,
          boxSizing: "border-box",
        },
      }}
      transitionDuration={{
        enter: 200,
        exit: 200,
      }}
    >
      <DrawerHeader>
        <IconButton
          href="/"
          size="large"
          style={{ fontSize: "0.73em" }}
          disableFocusRipple
          disableRipple
        >
          <CloudIcon />
        </IconButton>
      </DrawerHeader>
      {/* <DrawerHeader>
        <IconButton onClick={toggleNavigationMenu}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader> */}
      {/* Content of the drawer: a list of menu item */}
      <List>
        {NAVIGATION_URL.map((menuItem, index) => {
          return (
            <ListItem key={`${menuItem.title}_${index}`} disablePadding>
              <ListItemButton href={menuItem.url}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </MyStyleDrawer>
  );
};

export default CustomDrawer;