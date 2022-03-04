import styled from "styled-components";

export const QuestionDisplayContainer = styled.div`
  width: 50%;
  height: inherit;
  margin-bottom: 50px;
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

export const QuestionDisplayOptionsButton = styled("button")<{
  selected: boolean;
}>`
  width: 360px;
  height: 90px;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.purple : props.theme.colors.card};
  box-shadow: rgba(9, 25, 51, 0.15) 4px 4px 4px;
  cursor: pointer;
  border: none;
  :hover {
    transform: scale(1.001) perspective(0px);
    box-shadow: 0 10px 10px rgba(9, 25, 51, 0.15);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionDisplayOptionsButtonTextContainer = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const QuestionDisplayOptionsButtonTextCircle = styled("div")<{
  selected: boolean;
}>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid
    ${(props) =>
      props.selected ? props.theme.colors.card : props.theme.colors.text};
`;
export const QuestionDisplayOptionsButtonTextCircleInside = styled("div")<{
  selected: boolean;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.card : "none"};
`;

export const QuestionDisplayOptionsButtonText = styled("p")<{
  selected: boolean;
}>`
  font-size: 24px;
  color: ${(props) =>
    props.selected ? props.theme.colors.card : props.theme.colors.text};
  font-weight: 600;
  margin-left: 20px;
  width: 200px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    overflow: visible;
    white-space: normal;
    height: auto;
    background-color: ${(props) =>
      props.selected ? props.theme.colors.purple : props.theme.colors.card};
  }
`;

export const QuestionDisplayNextButtonContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row-reverse;
`;

export const QuestionDisplayNextButton = styled.div`
  width: 360px;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: rgba(9, 25, 51, 0.15) 4px 4px 4px;
  cursor: pointer;
  border: none;
  :hover {
    transform: scale(1.001) perspective(0px);
    box-shadow: 0 10px 10px rgba(9, 25, 51, 0.15);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const QuestionDisplayNextButtonText = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.card};
  font-weight: 600;
`;
