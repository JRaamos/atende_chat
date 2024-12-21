import styled from "styled-components";

export const TitleContainer = styled.div.attrs({
})`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const FormSpace = styled.div.attrs({
})`
  margin-top: 32px;
`;

export const WhiteBg = styled.div.attrs({
})`
`;

export const CheckContainer = styled.div.attrs({
})`
    margin-left: -6px;    
`;

export const HeaderUserImage = styled.div.attrs({
})`           
    width: 40px;
    height: 40px; 
    background: url(${p => p.url}) no-repeat center center / cover;
    overflow: hidden;
    border-radius: 20px;
`;

export const RowContainer = styled.div.attrs({
})`
  display: flex;
  gap: 6px;
  align-items: center;
`;