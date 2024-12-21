import styled from "styled-components";

export const ManageAgentsContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid ${p => p.theme.palette.colors.shadow};
`;
export const ManageAgentsHeader = styled.div.attrs({})`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;