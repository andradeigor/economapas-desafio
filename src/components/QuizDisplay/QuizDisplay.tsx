import { QuestionsDisplay } from "components/QuestionsDisplay/QuestionsDisplay";
import { QuizDisplayContainer } from "./style";

export const QuizDisplay: React.FC = () => {
  return (
    <QuizDisplayContainer>
      <QuestionsDisplay></QuestionsDisplay>
    </QuizDisplayContainer>
  );
};
