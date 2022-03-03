import styled from "styled-components";

export const QuestionDisplayContainer = styled.div`
  width: 50%;
  height: inherit;
`;

export const QuestionDisplayTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const QuestionDisplayTitleCounter = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.questionCounter};
`;

export const QuestionDisplayQuestionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
`;
export const QuestionDisplayQuestionText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const QuestionDisplayOptionsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;

export const QuestionDisplayOptionsButton = styled.button`
  width: 360px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: rgba(9, 25, 51, 0.15) 4px 4px 4px;
  cursor: pointer;
  border: none;
  :hover {
    transform: scale(1.001) perspective(0px);
    box-shadow: 0 10px 10px rgba(9, 25, 51, 0.15);
  }
`;
