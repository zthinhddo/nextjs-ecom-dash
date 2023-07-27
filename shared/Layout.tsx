'use client';

import { Box } from "@mui/material";
import { useState } from "react";
import { CustomDrawer } from ".";
import CustomHeader from "./components/CustomAppBar";
import Home from "./Home";


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
          <Box sx={{ display: 'flex' }}>
            <CustomHeader handleOpenMenu={handleOpenMenu}/>
            <CustomDrawer isOpenMenu={isOpenMenu} handleCloseMenu={handleCloseMenu} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Home />
          </Box>
        </div>
      </div>
    );
}

export default Layout;