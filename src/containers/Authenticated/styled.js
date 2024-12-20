import styled from 'styled-components'

export const DashboardPage = styled.div.attrs({
})`            
    width: 100%;
    min-height: 100vh;
`;

export const DashboardBody = styled.div.attrs({
})`       
    display: flex;  
    justify-content: flex-end;  
    width: 100%;
    // max-width: 1512px;
    // margin: 0 auto;

`;

export const DashboardBodyContent = styled.div.attrs({
})`  
    min-height: calc(100vh);
    overflow: auto;
    padding: 0 32px 32px 32px;
    width: ${props => props.open ? 'calc(100% - 98px)' : 'calc(100% - 270px)'};
    @media (max-width: 991px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const Content = styled.div.attrs({
})`           
    overflow:hidden;

`; 