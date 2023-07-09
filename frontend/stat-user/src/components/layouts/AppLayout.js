import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../dashboard/navbar/sideBar";

export default function AppLayout() {
    return (
        <SideBar>
            <Outlet />
        </SideBar>
    );
}
