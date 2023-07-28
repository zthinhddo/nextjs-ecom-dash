'use client';

import { MouseEventHandler, createContext, useContext, useState } from "react";

// Define interface (Providing default values purpose)
interface NavigationMenuContextValue {
    isOpen: boolean,
    toggleNavigationMenu: () => void,
}

const NavigationMenuContext = createContext<NavigationMenuContextValue>({
    isOpen: false,
    toggleNavigationMenu: function (): void {
        throw new Error("Function not implemented.");
    }
});

export const NavigationMenuProvider = ({ children } : { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useState(false);

    const toggleNavigationMenu = () => {
        console.log('menu button clicked');
        setOpen(!isOpen);
    }

    return (
        <NavigationMenuContext.Provider value={{ isOpen, toggleNavigationMenu }}>
            {children}
        </NavigationMenuContext.Provider>
    )
}

export const useNavigationMenuContext = () => useContext(NavigationMenuContext);