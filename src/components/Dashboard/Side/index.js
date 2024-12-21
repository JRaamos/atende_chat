import React, { useContext, useState } from "react";

import { useHistory } from 'react-router-dom';

import {

    DashboardMenuContainer,
    DashboardMenu,
    DashboardMenuHeader,
    DashboardMenuHeaderIcon,

    DashboardMenuHeaderUserContent,
    DashboardMenuHeaderUserImage,

    DashboardMenuOption,
    DashboardMenuContent,
    DashboardMenuFooter,

    DashboardVersionContent,
    DashboardVersionText,
    OptionsContainer,
    HeaderItemIconBadge,
    MarketingContainer,
    MarketingTitle,
    MarketingText

} from "./styled";

import Button from "components/Form/Button";
import { DoLogout } from "services/authentication";
import { Icon } from "ui/styled";
import { CoreContext } from "context/CoreContext";

export default function DashboardSide({ opened, setOpened }) {

    const history = useHistory();
    const navigate = to => history.push(`/${to}`);
    const pathname = history.location.pathname;

    const { noTitle, setNoTitle } = useContext(CoreContext)

    const verifyClose = e => {
        if (!e.target.closest('.menu-contant')) {
            setOpened(false)
        }
    }

    const page = pathname.split('/')[1]

    const menuItems = [
        {
            name: "Gerenciar Agentes",
            page: 'manage-agents',
            icon: 'users',
        },
        {
            name: "Gerenciar Token",
            page: 'manage-tokens',
            icon: 'setting',
            iconActive: 'add-user-black'
        },

    ];

    const handleClick = (page) => {
        if (page) {
            navigate(page)
        }
        return;
    }

    return (
        <>
            {
                <DashboardMenuContainer onClick={verifyClose} open={opened} >
                    <DashboardMenu open={!noTitle}>
                        {/* <DashboardMenuHeader >
                            <DashboardMenuHeaderIcon src={'/icons/close.svg'} onClick={() => setOpened(false)} />
                            <Icon icon={noTitle ? "logo-mini" : "home-logo"} />
                        </DashboardMenuHeader> */}
                        <DashboardMenuHeader>

                            <DashboardMenuHeaderIcon src={'/icons/close-big.svg'} onClick={() => setOpened(false)} />
                        </DashboardMenuHeader>
                        <DashboardMenuContent>
                            {
                                menuItems.map((item, index) => (
                                    <DashboardMenuOption key={index}
                                        onClick={() => handleClick(item?.page)}
                                        active={page === item.page}
                                    >
                                        <OptionsContainer>
                                            <Icon icon={item.icon} nomargin />
                                            {noTitle ? null : item.name}
                                        </OptionsContainer>
                                    </DashboardMenuOption>
                                ))
                            }
                        </DashboardMenuContent>
                    </DashboardMenu>
                </DashboardMenuContainer>
            }
        </>
    );
}