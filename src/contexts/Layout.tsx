import React, { useState, createContext } from "react";

import UserStore from "store/Users";

export const LayoutContext: any = createContext({});

export default function Layout({ children }: any) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { user } = UserStore;

    const LayoutProps = {
        sidebarOpen: sidebarOpen,
        setSidebarOpen: setSidebarOpen,
        user: user
    }

    return (
        <LayoutContext.Provider value={LayoutProps}>
            <LayoutContext.Consumer>{children}</LayoutContext.Consumer>
        </LayoutContext.Provider>
    )
}
