import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, useTheme } from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PeopleIcon from '@mui/icons-material/People';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

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
    justifyContent: 'flex-end', // Put the arrow to the right of header
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar, // This help set the height and responsive
}));

export const CustomDrawer = ({ isOpenMenu, handleCloseMenu }) => {
    const theme = useTheme();
    console.log('theme: ', theme);

    return (
          <Drawer anchor="left" open={isOpenMenu} onClose={handleCloseMenu} sx={{ marginTop: '10px' }} elevation={0}>
            {/* Header for drawer when open/close */}
            <DrawerHeader>
                <IconButton onClick={() => { console.log('Icon button clicked') }}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <MenuIcon />}
                </IconButton>
            </DrawerHeader>

            <Divider />
            
            {/* Content of the drawer: a list of menu item */}
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
    )
}

export default CustomDrawer;