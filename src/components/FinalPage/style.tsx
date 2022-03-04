import styled from "styled-components";

export const QuestionCorrectDisplayOptionsButton = styled("button")<{
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

export const QuestionCorrectDisplayOptionsButtonTextContainer = styled.div`
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
`;
export const QuestionCorrectDisplayOptionsButtonTextCircle = styled("div")<{
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
export const QuestionCorrectDisplayOptionsButtonTextCircleInside = styled(
  "div"
)<{
  selected: boolean;
}>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.card : "none"};
`;

export const QuestionCorrectDisplayOptionsButtonText = styled("p")<{
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

export const NumberOfCorrects = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.purple};
  text-shadow: 0 10px 10px rgba(9, 25, 51, 0.15);
`;
