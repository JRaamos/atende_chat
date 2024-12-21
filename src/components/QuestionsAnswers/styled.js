import styled from "styled-components";


export const QuestionsAnswersContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 20px;
  background: ${p => p.theme.palette.colors.backgroundgrey};
  border-radius: 8px;
`;

export const RadiosContainer = styled.div.attrs({})`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;