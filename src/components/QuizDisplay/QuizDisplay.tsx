import { FinalPage } from "components/FinalPage/FinalPage";
import { QuestionsDisplay } from "components/QuestionsDisplay/QuestionsDisplay";
import { useEffect, useState } from "react";
import { QuizDisplayContainer } from "./style";

export const QuizDisplay: React.FC = () => {
  const [FinalPageData, setFinalPageData] = useState<any>([]);
  const [Switch, setSwich] = useState(false);
  const [questionData, setQuestionData] = useState<any>([]);
  const [answersData, setAnswerData] = useState<any>([]);
  useEffect(() => {
    const FinalPageDataPure = [];
    for (let index = 0; index < answersData.length; index++) {
      const correctAlternativa = questionData[index].correct_answer;
      if (
        questionData[index].answers[correctAlternativa] === answersData[index]
      ) {
        FinalPageDataPure.push({ ...questionData[index], correct: true });
      } else {
        FinalPageDataPure.push({ ...questionData[index], correct: false });
      }
    }
    setFinalPageData(FinalPageDataPure);
  }, [questionData, answersData]);
  useEffect(() => {
    setSwich(!Switch);
  }, [FinalPageData]);
  return (
    <QuizDisplayContainer>
      {Switch ? (
        <FinalPage data={FinalPageData}></FinalPage>
      ) : (
        <QuestionsDisplay
          SetQuestions={(data: any) => setQuestionData(data)}
          SetAnswers={(data: any) => setAnswerData(data)}
          SetCorrectAnswers={(data: any) => setFinalPageData(data)}
        ></QuestionsDisplay>
      )}
    </QuizDisplayContainer>
  );
};
