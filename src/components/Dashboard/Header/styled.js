import styled from 'styled-components'

export const DashboardHeaderContainer = styled.div.attrs({
})`           
    height: 96px;
    background: ${props => props.theme.palette.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 16px;
    margin-right: 32px;
    ${props => props.open ? `left: 130px;` : `left: 300px;`}
    z-index: 104;
    padding: 16px;
    border-radius: 8px;
    width: ${props => props.open ? 'calc(100% - 160px)' : 'calc(100% - 334px)'};
    @media (max-width: 991px) {
        right: 16px;
        left: 16px;
        width: calc(100% - 32px);
        z-index: 102;
    }
`;


export const DashboardHeaderAction = styled.div.attrs({
})`           
    color: ${props => props.theme.palette.colors.white};
    font-size: 15px;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    @media (max-width: 991px) {
        display: block;
    }
`;

export const AppLogo = styled.img.attrs({
    src: `/logo1024.png`,
    alt: "logo-icon",
    height: 50
})`            
`;

export const DashboardHeaderActionIcon = styled.img.attrs({
})`           
    margin-right: 10px;
`;

export const DashboardMenuContainer = styled.div.attrs({
})`           
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
    background: ${props => props.theme.palette.colors.shadow};
`;

export const DashboardMenu = styled.div.attrs({
    className: 'menu-contant'
})`           
    max-width: 389px;
    background: ${props => props.theme.palette.colors.white};
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const DashboardMenuHeader = styled.div.attrs({
})`           
    height: 60px;
    width: 100%; 
    display: flex;
    align-items: center;
    padding: 0 20px;

    text-transform: uppercase;
    font-size: 15px;
    color: ${props => props.theme.palette.colors.white};
    cursor: pointer;
`;

export const DashboardMenuHeaderIcon = styled.img.attrs({
})`           
    margin-right: 20px;
    cursor: pointer;
`;

export const DashboardMenuHeaderUserContent = styled.div.attrs({
})`           
    padding: 27px 25px;
    border-bottom: 1px solid ${props => props.theme.palette.colors.lightgrey};
    margin-bottom: 28px;
`;

export const DashboardMenuHeaderUserImage = styled.div.attrs({
})`           
    width: 160px;
    height: 160px; 
    background: ${props => props.theme.palette.colors.grey} url(/logo1024.png) no-repeat center center / cover;
    margin: 0 auto 12px;
    overflow: hidden;
`;

export const DashboardMenuHeaderUserText = styled.div.attrs({
})`           
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.palette.colors.grey};
    margin-bottom: 12px; 
`;

export const DashboardMenuOption = styled.div.attrs({
})`           
    padding: 20px 30px;
    font-size: 15px;
    color: ${props => props.theme.palette.colors.grey};
    cursor: pointer; 

    &:hover{
        text-decoration: underline;
    }
    
    ${props => props.active ? `
            background: ${props.theme.palette.primary.main};
            font-size: 15px;
            font-weight: bold;
            color: ${props.theme.palette.colors.white};
        ` : ``
    }
`;

export const DashboardMenuContent = styled.div.attrs({
})` 
    flex:1;
`;

export const DashboardMenuFooter = styled.div.attrs({
})`
    padding: 20px;
`;

export const DashboardVersionContent = styled.div.attrs({
})` 
    margin: 24px 0;
`;

export const DashboardVersionText = styled.div.attrs({
})`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.palette.colors.grey};
    text-align: center; 
`;

export const HeaderContainer = styled.div.attrs({
})`           
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderItem = styled.div.attrs({
})`           
    display: flex;
    align-items: center;
    gap: 32px;
    cursor: pointer;
    padding: 8px 16px;
    height: 40px;
    background: ${p => p.theme.palette.lightgrey.main};
    @media (max-width: 454px) {
        display: none;
    }
`;
export const HeaderItemTitle = styled.div.attrs({
})`           
    font-family: Urbanist;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: ${p => p.theme.palette.colors.black};
`;

export const HeaderPlanTitle = styled.div.attrs({
})`           
    font-family: Urbanist;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    color: ${p => p.theme.palette.colors.black};
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HeaderItemText = styled.div.attrs({
})`           
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: ${p => p.theme.palette.colors.black};
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const HeaderUserContainer = styled.div.attrs({
})`           
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    background: ${p => p.theme.palette.colors.white};
    padding: 8px;
    border-radius: 8px;
    @media (max-width: 768px) {
        gap: 8px;
    }
`;

export const HeaderUserImage = styled.div.attrs({
})`           
    width: 48px;
    height: 48px; 
    background: url(${p => p.url}) no-repeat center center / cover;
    overflow: hidden;
    border-radius: 4px;
`;