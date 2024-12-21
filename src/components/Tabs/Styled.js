import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 768px;
  background: ${(p) => p.theme.palette.colors.white};
  padding: 0 54px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 442px) {
    padding: 0 20px;
  }
`;

export const Tab = styled.div`
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) =>
    props.isActive
      ? props.theme.palette.colors.black
      : props.theme.palette.colors.lightgrey};
  padding: 19px 0;
  font-family: Plus Jakarta Sans;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.64px;
  text-align: center;
  z-index: 10;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.palette.colors.black};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 14px 10px;
  }
`;

export const FullWidthBorder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 82%;
  height: 2px;
  margin: 0 auto;
  background-color: ${(p) => p.theme.palette.colors.shadow};
  z-index: 1;
  transform: translateY(-50%);
  top: 50%;
  @media (max-width: 768px) {
    width: 80%;
  }

    @media (max-width: 612px) {
    width: 75%;
    }
    @media (max-width: 520px) {
      width: 72%;
    }

    @media (max-width: 480px) {
      display: none;
    }

`;

export const Content = styled.div`
  margin-top: 24px;
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const TabContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  position: relative;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 7px;
  border-radius: 50%;
  background: ${(p) =>
    p.isActive
      ? p.theme.palette.secondary.main
      : p.theme.palette.colors.lightgrey};
  color: ${(p) =>
    p.isActive
      ? p.theme.palette.colors.white
      : p.theme.palette.colors.darkgrey};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Label = styled.div`
  position: absolute;
  bottom: -48px;
  color: ${(p) =>
    p.isActive
      ? p.theme.palette.colors.black
      : p.theme.palette.colors.lightgrey};
  white-space: nowrap;
  transition: color 0.3s ease;
    height: 40px;
  @media (max-width: 768px) {
    font-size: 12px;
    white-space: wrap;
  }
`;