import styled from 'styled-components';

export const UploadContent = styled.div.attrs({
})`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

export const UploadContainer = styled.div.attrs({
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: flex-end;
  border: 2px dashed ${props => props.theme.palette.colors.shadow};
  border-radius: 4px;
  padding: 20px;
  color: white;
  cursor: pointer;
  flex: 1;
  margin: auto;
  width: 100%;
  ${p => p.image ? `background:url(${p.image}) no-repeat center center / cover` : ``}
`;

export const HiddenInput = styled.input.attrs({
  type: 'file'
})`
  display: none;
`;

export const UploadBodyContent = styled.div.attrs({
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


export const UploadContainerIcon = styled.div.attrs({
})`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  align-items: center;

  justify-content: center;
  position: relative;
  overflow: visible;
  `;

export const UploadIcon = styled.img.attrs({
})`
  width: 100%;
  height: 100%;
  animation: go-up 0.7s infinite alternate;
  @keyframes go-up {
  from {
    transform: translatey(8px);
  }
  to {
    transform: translatey(0);
  }

`;

export const StyledSVG = styled.svg.attrs({
  viewBox: "0 0 50 50",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  animation: loop 1.2s linear infinite;
  animation: loop2 1s linear infinite;

  @keyframes loop {
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  }
  @keyframes loop2 {
    0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
  }
`;

export const StyledCircle = styled.circle.attrs({
  cx: 25, cy: 25, r: 24,
})`
  fill: none;
  stroke: ${props => props.theme.palette.primary.main};
  stroke-width: 1; 
  stroke-dasharray: 157; 
  stroke-dashoffset: 157;
  animation: progress 2s linear infinite alternate;
  @keyframes progress {
     0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 157;
  }
  }
  
`;

export const UploadInstructions = styled.div.attrs({
})`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


export const UploadInstructionsLabel = styled.div.attrs({
})`

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.format ? props.theme.palette.colors.background : props.theme.palette.colors.tertiary};

  ${props => props.sub ? `
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.24px;
    color: ${props.theme.palette.colors.grey};
  ` : ''}
    }
`;

export const ImageContainer = styled.div.attrs({
})`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: 20px;
`;

export const Image = styled.div.attrs({
})`
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 8px;
    background: url(${props => props.src}) center center / cover no-repeat;
     border: 2px solid ${props => props.theme.palette.colors.secondary};
   ${props => props.src ? `
    border: none;
    ` : ``}
   ${props => props.big ? `
    width: 96px;
    height: 96px;
    ` : ``}
`;

export const ButtonRemove = styled.img.attrs({
  src: '/icons/trash-red.svg'
})`
    cursor: pointer;
    position: absolute;
    right: 3.852px;
    top: 3.078px;
    display: flex;
    padding: 4px;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: ${props => props.theme.palette.colors.background};
    border-radius: 4px;

`;

export const ContentTitle = styled.div.attrs({
})` 
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const PdfContainer = styled.div.attrs({
})`
 position: relative;
`;

export const TrashContainer = styled.div.attrs({
})`
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  z-index: 1;  
  background: ${props => props.theme.palette.primary.main};
  border-radius: 4px;
  padding: 2px;
`;