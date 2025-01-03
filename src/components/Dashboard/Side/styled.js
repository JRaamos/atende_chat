import styled from 'styled-components'


export const DashboardMenuContainer = styled.div.attrs({
})`           
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 102;
     @media (max-width: 991px) {
        display: ${props => props.open ? 'block' : 'none'};
    }

`;

export const DashboardMenu = styled.div.attrs({
    className: 'menu-contant'
})`           
    max-width: 300px;
    background: ${props => props.theme.palette.colors.white};
    width: 100%;
    z-index: 101;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: auto;
    min-width: ${p => p.open ? '300px' : 'fit-content'};
    padding: 8px 16px;
    border-radius: 8px;
    border: 1px solid ${p => p.theme.palette.colors.shadow};

    overflow: auto;
    height: calc(100vh - 32px);

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 16px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
    }

    @media (max-width: 991px) {
        background: ${props => props.theme.palette.colors.white};
    }
`;

export const DashboardMenuHeader = styled.div.attrs({
})`     
    width: 100%; 
    border-bottom: 1px solid ${props => props.theme.palette.colors.shadow};
    padding: 8px;
    display: none;
    align-items: center;
    @media (max-width: 991px) {
        display: block;
    }
`;

export const DashboardMenuHeaderIcon = styled.img.attrs({
})`           
    margin-right: 20px;
    cursor: pointer;
    width: 24px;
    height: 24px;

`;

export const DashboardMenuHeaderUserContent = styled.div.attrs({
})`           
    padding: 27px 25px;
    margin-bottom: 28px;
    background: ${props => props.theme.palette.primary.main} ;
`;

export const DashboardMenuHeaderUserImage = styled.div.attrs({
})`           
    width: 160px;
    height: 160px; 
    border-radius: 80px; 
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
    padding: 14px 12px;
    font-family: Urbanist;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
    color: ${props => props.theme.palette.colors.grey};
    border-radius: 8px;

    &:hover {
        background: ${props => props.theme.palette.colors.white};
    }

    transition: all 0.3s ease;
    ${props => props.active ? `
        font-weight: 700;
        color: ${props.theme.palette.colors.black};
        background: ${props.theme.palette.colors.white};
        ` : ``
    }

    ${p => p.space ? `margin: 50px 0;` : ``}
`;

export const DashboardMenuContent = styled.div.attrs({
})` 
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const DashboardMenuFooter = styled.div.attrs({
})`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
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

export const OptionsContainer = styled.div.attrs({
})` 
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: Urbanist;
`;
export const HeaderItemIconBadge = styled.div.attrs({
})`
    width: 24px;
    height: 24px;
    border-radius: 24px;
    background: ${props => props.theme.palette.colors.red};
    color: ${props => props.theme.palette.white.main};
    padding: 1px;
    font-family: Sora;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MarketingContainer = styled.div.attrs({
})`
    padding: 24px 16px;
    background: ${props => props.theme.palette.lightgrey.main};
    border-radius: 16px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    margin: 50px 0;
`;

export const MarketingTitle = styled.div.attrs({
})`
    font-family: Urbanist;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    text-align: left;
    color: ${props => props.theme.palette.colors.black};

`;

export const MarketingText = styled.div.attrs({
})`
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    color: ${props => props.theme.palette.colors.black};
`;