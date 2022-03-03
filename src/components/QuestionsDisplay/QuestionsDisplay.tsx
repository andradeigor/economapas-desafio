import { useEffect, useState } from "react";
import {
  QuestionDisplayContainer,
  QuestionDisplayNextButton,
  QuestionDisplayNextButtonContainer,
  QuestionDisplayNextButtonText,
  QuestionDisplayOptionsButton,
  QuestionDisplayOptionsButtonText,
  QuestionDisplayOptionsButtonTextCircle,
  QuestionDisplayOptionsButtonTextCircleInside,
  QuestionDisplayOptionsButtonTextContainer,
  QuestionDisplayOptionsContainer,
  QuestionDisplayQuestionContainer,
  QuestionDisplayQuestionText,
  QuestionDisplayTitleContainer,
  QuestionDisplayTitleCounter,
} from "./style";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
type Question = {
  id: number;
  question: string;
  description: string | null;
  answers: Array<string | null>;
  multiple_correct_answers: boolean;
  correct_answers: Array<string | null>;
};
type Sets = {
  SetQuestions: (data: any) => void;
  SetAnswers: (data: any) => void;
  SetCorrectAnswers: (data: any) => void;
};

export const QuestionsDisplay: React.FC<Sets> = ({
  SetQuestions,
  SetAnswers,
  SetCorrectAnswers,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const [optionSelected, setOptionSelected] = useState("");
  const [questionData, setQuestionData] = useState({
    question: "",
    answers: [""],
    correct_answer: "",
  });
  const [quizData, setQuizData] = useState<any>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnserws, setQuizAnserws] = useState<Array<string>>([]);

  const HandleClick = (target: string) => {
    setOptionSelected(target);
  };
  const HandleNext = () => {
    if (optionSelected === "") {
      return;
    } else {
      setQuizAnserws([...quizAnserws, optionSelected]);
      if (quizIndex + 1 >= 10) {
        SetQuestions(quizData);
        SetAnswers(quizAnserws);
      } else {
        setQuestionData(quizData[quizIndex + 1]);
        setQuizIndex(quizIndex + 1);
        setOptionSelected("");
      }
    }
  };
  useEffect(() => {
    if (!params?.tag || !params?.difficulty) {
      navigate("/");
    }
    axios
      .get(
        `https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&category=${params.tag}&limit=10&difficulty=${params.difficulty}`
      )
      .then((response) => {
        const data = response.data;
        const newData = data.map((Puredata: any) => {
          const { question, answers, correct_answer } = Puredata;
          return { question, answers, correct_answer };
        });
        setQuizData(newData);
        setQuestionData(newData[0]);
      });
  }, []);

  return (
    <QuestionDisplayContainer>
      <QuestionDisplayTitleContainer>
        <QuestionDisplayTitleCounter>
          Desafio Linux {quizIndex + 1}/10
        </QuestionDisplayTitleCounter>
      </QuestionDisplayTitleContainer>
      <QuestionDisplayQuestionContainer>
        <QuestionDisplayQuestionText>
          {questionData?.question}
        </QuestionDisplayQuestionText>
      </QuestionDisplayQuestionContainer>
      <QuestionDisplayOptionsContainer>
        {Object.values(questionData?.answers).map(
          (ans) =>
            ans && (
              <QuestionDisplayOptionsButton
                key={ans}
                onClick={() => HandleClick(ans)}
                selected={ans === optionSelected ? true : false}
              >
                <QuestionDisplayOptionsButtonTextContainer>
                  <QuestionDisplayOptionsButtonTextCircle
                    selected={ans === optionSelected ? true : false}
                  >
                    <QuestionDisplayOptionsButtonTextCircleInside
                      selected={ans === optionSelected ? true : false}
                    />
                  </QuestionDisplayOptionsButtonTextCircle>
                  <QuestionDisplayOptionsButtonText
                    selected={ans === optionSelected ? true : false}
                  >
                    {ans}
                  </QuestionDisplayOptionsButtonText>
                </QuestionDisplayOptionsButtonTextContainer>
              </QuestionDisplayOptionsButton>
            )
        )}
        <QuestionDisplayNextButtonContainer>
          <QuestionDisplayNextButton onClick={() => HandleNext()}>
            <QuestionDisplayNextButtonText>Next</QuestionDisplayNextButtonText>
          </QuestionDisplayNextButton>
        </QuestionDisplayNextButtonContainer>
      </QuestionDisplayOptionsContainer>
    </QuestionDisplayContainer>
  );
};
