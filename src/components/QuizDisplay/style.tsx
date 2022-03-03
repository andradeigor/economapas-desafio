import styled from "styled-components";

export const QuizDisplayContainer = styled.section`
  width: 100%;
  min-height: 75vh;
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: 100px;
  display: flex;
  justify-content: center;
`;
