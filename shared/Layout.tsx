'use client';

import { Paper, Button } from "@mui/material";
import { CustomAppBar } from ".";
import { useEffect, useState } from "react";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState<boolean | undefined>(false);

    useEffect(() => {
        console.log('openMenu: ', openMenu);
    }, [openMenu]);

    const handleOpenMenu = () => {
        if (!openMenu) setOpenMenu(!openMenu);
    }

    return (
        <div id="app-layout" className="flex flex-row w-full h-full overflow-hidden bg-white relative">
            <div className="flex flex-1 flex-col overflow-hidden relative">
                <CustomAppBar />
                <div>
                    <Button sx={{ width: 200, padding: 1 }} color="primary" variant='outlined' onClick={handleOpenMenu}>Open menu</Button>
                </div>
            </div>
        </div>
    )
}

export default Layout;