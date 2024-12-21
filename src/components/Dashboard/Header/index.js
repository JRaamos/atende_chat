import React, { useContext, useState } from "react";

import DashboardSide from "../Side";
import {
    DashboardHeaderContainer,
    DashboardHeaderAction,
    DashboardHeaderActionIcon,
    HeaderContainer,
    HeaderItem,
    HeaderItemTitle,
    HeaderItemText,
    HeaderUserContainer,
    HeaderUserImage,
    HeaderPlanTitle
} from "./styled";
import { CoreContext } from "context/CoreContext";
import { Icon, Overlay } from "ui/styled";


export default function DashboardHeader() {

    const [opened, setOpened] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const { noTitle, user } = useContext(CoreContext)

    return (
        <>
            <DashboardHeaderContainer open={noTitle}>
                <DashboardHeaderAction onClick={() => setOpened(true)}>
                    {opened ? null : <DashboardHeaderActionIcon src={`/icons/menu.svg`} alt="menu-icon" />}
                </DashboardHeaderAction>
            </DashboardHeaderContainer>
            <DashboardSide opened={opened} setOpened={setOpened} />
        </>
    );
};