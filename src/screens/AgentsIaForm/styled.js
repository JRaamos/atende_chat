import styled from "styled-components";

export const ManageAgentsContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid ${p => p.theme.palette.colors.shadow};
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