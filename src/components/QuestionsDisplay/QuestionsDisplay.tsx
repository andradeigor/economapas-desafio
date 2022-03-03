import {
  QuestionDisplayContainer,
  QuestionDisplayOptionsButton,
  QuestionDisplayOptionsContainer,
  QuestionDisplayQuestionContainer,
  QuestionDisplayQuestionText,
  QuestionDisplayTitleContainer,
  QuestionDisplayTitleCounter,
} from "./style";

export const QuestionsDisplay: React.FC = () => {
  return (
    <QuestionDisplayContainer>
      <QuestionDisplayTitleContainer>
        <QuestionDisplayTitleCounter>
          Desafio Linux 10/10
        </QuestionDisplayTitleCounter>
      </QuestionDisplayTitleContainer>
      <QuestionDisplayQuestionContainer>
        <QuestionDisplayQuestionText>
          Which command can be used to count characters in a text file?
        </QuestionDisplayQuestionText>
      </QuestionDisplayQuestionContainer>
      <QuestionDisplayOptionsContainer>
        <QuestionDisplayOptionsButton></QuestionDisplayOptionsButton>
        <QuestionDisplayOptionsButton></QuestionDisplayOptionsButton>
        <QuestionDisplayOptionsButton></QuestionDisplayOptionsButton>
        <QuestionDisplayOptionsButton></QuestionDisplayOptionsButton>
      </QuestionDisplayOptionsContainer>
    </QuestionDisplayContainer>
  );
};
