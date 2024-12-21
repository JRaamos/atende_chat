import styled from "styled-components";

export const ManageAgentsContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; 
  border-radius: 8px;
`;
export const ManageAgentsHeader = styled.div.attrs({})`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${p => p.theme.palette.colors.shadow};
`;