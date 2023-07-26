import { createContext } from "react";

interface AppContextType {
    isOpenMenu?: boolean,
}

export const AppDefaultContext = createContext<AppContextType | null>({});