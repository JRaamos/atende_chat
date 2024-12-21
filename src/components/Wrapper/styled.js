import styled from "styled-components";

export const WrapperContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  `;

export const WrapperHeader = styled.div.attrs({})`
  width: 100%;
  background-color: ${p => p.theme.palette.colors.backgroundgrey};
  padding: 8px;
  cursor: pointer;

`;

export const ChevronIcon = styled.img.attrs((props) => (({
  src: '/icons/chevron.svg'
})))`
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform: rotate(90deg);
    margin-right: 10px;
    ${props => props.open ? `transform: rotate(180deg);`
    : ``
  }
`;

export const BehaviorContent = styled.div.attrs({})`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 24px 16px;
  
`;
