import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../dashboard/navbar/SideBar";

export default function AppLayout() {
    return (
        <SideBar>
            <Outlet />
        </SideBar>
    );
}
