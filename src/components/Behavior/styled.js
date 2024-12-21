import styled from "styled-components";

export const BehaviorContainer = styled.div.attrs({})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 20px;
`;

export const CheckContainer = styled.div.attrs({})`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;


export const Content = styled.div.attrs({})`
  flex: 1;
  min-width: 300px;
  @media (max-width: 400px) {
    min-width: 100%;
  }
`;

export const Container = styled.div.attrs({})`
`;