import {
  QuestionDisplayContainer,
  QuestionDisplayNextButton,
  QuestionDisplayNextButtonContainer,
  QuestionDisplayNextButtonText,
  QuestionDisplayOptionsContainer,
  QuestionDisplayQuestionContainer,
  QuestionDisplayQuestionText,
  QuestionDisplayTitleContainer,
  QuestionDisplayTitleCounter,
} from "components/QuestionsDisplay/style";
import { useEffect, useState } from "react";
import {
  QuestionCorrectDisplayOptionsButton,
  QuestionCorrectDisplayOptionsButtonText,
  QuestionCorrectDisplayOptionsButtonTextCircle,
  QuestionCorrectDisplayOptionsButtonTextCircleInside,
  QuestionCorrectDisplayOptionsButtonTextContainer,
  NumberOfCorrects,
} from "./style";

import { useNavigate } from "react-router-dom";
export const FinalPage: React.FC<any> = ({ data, number }) => {
  const navigate = useNavigate();
  const [QuestionsData, setQuestionsData] = useState<any>([]);
  useEffect(() => {
    setQuestionsData(data);
    console.log(data);
  }, [data]);
  return (
    <>
      <NumberOfCorrects>Você acertou {number}/10</NumberOfCorrects>
      {QuestionsData?.map((question: any, index: number) => {
        return (
          <QuestionDisplayContainer>
            <QuestionDisplayTitleContainer>
              <QuestionDisplayTitleCounter>
                Desafio Linux {index + 1}/10
              </QuestionDisplayTitleCounter>
            </QuestionDisplayTitleContainer>
            <QuestionDisplayQuestionContainer>
              <QuestionDisplayQuestionText>
                {question?.question}
              </QuestionDisplayQuestionText>
            </QuestionDisplayQuestionContainer>
            <QuestionDisplayOptionsContainer>
              {Object.values(question?.answers).map(
                (ans: any) =>
                  ans && (
                    <QuestionCorrectDisplayOptionsButton
                      key={ans + "a"}
                      selected={
                        question?.correct_answer &&
                        ans === question?.answers[question?.correct_answer]
                          ? true
                          : false
                      }
                    >
                      <QuestionCorrectDisplayOptionsButtonTextContainer>
                        <QuestionCorrectDisplayOptionsButtonTextCircle
                          selected={
                            question?.correct_answer &&
                            ans === question?.answers[question?.correct_answer]
                              ? true
                              : false
                          }
                        >
                          <QuestionCorrectDisplayOptionsButtonTextCircleInside
                            selected={
                              question?.correct_answer &&
                              ans ===
                                question?.answers[question?.correct_answer]
                                ? true
                                : false
                            }
                          />
                        </QuestionCorrectDisplayOptionsButtonTextCircle>
                        <QuestionCorrectDisplayOptionsButtonText
                          selected={
                            question?.correct_answer &&
                            ans === question?.answers[question?.correct_answer]
                              ? true
                              : false
                          }
                        >
                          {ans}
                        </QuestionCorrectDisplayOptionsButtonText>
                      </QuestionCorrectDisplayOptionsButtonTextContainer>
                    </QuestionCorrectDisplayOptionsButton>
                  )
              )}
            </QuestionDisplayOptionsContainer>
          </QuestionDisplayContainer>
        );
      })}
      <QuestionDisplayNextButtonContainer>
        <QuestionDisplayNextButton onClick={() => navigate("/")}>
          <QuestionDisplayNextButtonText>Voltar</QuestionDisplayNextButtonText>
        </QuestionDisplayNextButton>
      </QuestionDisplayNextButtonContainer>
    </>
  );
};
