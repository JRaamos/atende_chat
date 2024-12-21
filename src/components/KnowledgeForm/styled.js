import styled from "styled-components";

export const KnowledgeContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 20px;
`;

export const KnowledgeFormOptions = styled.div.attrs({})`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 4px;
  background: ${p => p.theme.palette.lightBlue.main};
  width: fit-content;
  border-radius: 4px;
`;

export const KnowledgeOption = styled.div.attrs({})`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  background: ${p => p?.active ? p.theme.palette.colors.white : 'transparent'};
  cursor: pointer;
  transition: background 0.3s;
`;
