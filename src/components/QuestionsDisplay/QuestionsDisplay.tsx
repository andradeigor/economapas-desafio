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
type Question = {
  id: number;
  question: string;
  description: string | null;
  answers: Array<string | null>;
  multiple_correct_answers: boolean;
  correct_answers: Array<string | null>;
};
export const QuestionsDisplay: React.FC = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [questionData, setQuestionData] = useState({
    question: "",
    answers: [""],
    correct_answer: [""],
  });
  const [quizData, setQuizData] = useState<any>([
    {
      id: 653,
      question: "What is the ls switch  to view the inode numbers",
      description: null,
      answers: {
        answer_a: "-i",
        answer_b: "-n",
        answer_c: "-d",
        answer_d: "-a",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "BASH" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 737,
      question:
        "How to delete a pod in Kubernetes using the type and name specified in pod.json?",
      description: null,
      answers: {
        answer_a: "kubectl delete ./pod.json",
        answer_b: "kubectl delete -f ./pod.json",
        answer_c: "kubectl remove -f ./pod.json",
        answer_d: "kubectl remove ./pod.json",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "Kubernetes" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 42,
      question:
        "Which of the answers listed below refers to a Linux command that allows for assuming the identity of a different system user and executing commands with security privileges of that user account?",
      description: null,
      answers: {
        answer_a: "sync",
        answer_b: "id",
        answer_c: "usermod",
        answer_d: "su",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_d",
      explanation: null,
      tip: null,
      tags: [{ name: "Linux" }],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 19,
      question: "Crontab gives administrators the ability to do what?",
      description: null,
      answers: {
        answer_a: "Identify users on the system",
        answer_b: "Call up a list of open files",
        answer_c: "View the status of Linux kernel modules",
        answer_d: "Set up scheduled tasks on a system",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_d",
      explanation: null,
      tip: null,
      tags: [{ name: "Linux" }],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 7,
      question: "How do we change permissions on files",
      description: null,
      answers: {
        answer_a: "chown",
        answer_b: "chmod",
        answer_c: "chattr",
        answer_d: "lsattr",
        answer_e: "We Can't change them",
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "Linux" }, { name: "BASH" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 34,
      question: "Which command is used to create file archives in Linux?",
      description: null,
      answers: {
        answer_a: "arc",
        answer_b: "zip",
        answer_c: "ps",
        answer_d: "tar",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "true",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_d",
      explanation: null,
      tip: null,
      tags: [{ name: "Linux" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 22,
      question:
        "tcpdump is a packet-sniffing Linux command that offers administrators the ability to monitor what?",
      description: null,
      answers: {
        answer_a: "Server performance",
        answer_b: "Network traffic and activity",
        answer_c: "Application performance",
        answer_d: "Files and directories",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_b",
      explanation: null,
      tip: null,
      tags: [{ name: "Linux" }],
      category: "Linux",
      difficulty: "Hard",
    },
    {
      id: 648,
      question:
        "Which command can be used to determine file type by its content?",
      description: null,
      answers: {
        answer_a: "file",
        answer_b: "ls \u2013l",
        answer_c: "type",
        answer_d: "None of the above.",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "BASH" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 720,
      question: "Cronjobs in kubernetes run in",
      description: null,
      answers: {
        answer_a: "UTC only",
        answer_b: "Based on NTP settings",
        answer_c: "Master node local timezone",
        answer_d: "GMT only",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "Kubernetes" }],
      category: "Linux",
      difficulty: "Easy",
    },
    {
      id: 726,
      question: "How to list a particular Kubernetes deployment?",
      description: null,
      answers: {
        answer_a: "kubectl info deployment my-dep",
        answer_b: "kubectl get deployment my-dep",
        answer_c: "kubectl describe deployment my-dep",
        answer_d: "kubectl ls deployment my-dep",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_a",
      explanation: null,
      tip: null,
      tags: [{ name: "Kubernetes" }],
      category: "Linux",
      difficulty: "Easy",
    },
  ]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnserws, setQuizAnserws] = useState([]);

  const HandleClick = (target: string) => {
    console.log(target);
    setOptionSelected(target);
  };
  const HandleNext = () => {};
  useEffect(() => {
    const newData = quizData.map((data: any) => {
      const { question, answers, correct_answer } = data;
      return { question, answers, correct_answer };
    });
    setQuizData(newData);
    setQuestionData(quizData[0]);
  }, []);

  return (
    <QuestionDisplayContainer>
      <QuestionDisplayTitleContainer>
        <QuestionDisplayTitleCounter>
          Desafio Linux 10/10
        </QuestionDisplayTitleCounter>
      </QuestionDisplayTitleContainer>
      <QuestionDisplayQuestionContainer>
        <QuestionDisplayQuestionText>
          {questionData.question}
        </QuestionDisplayQuestionText>
      </QuestionDisplayQuestionContainer>
      <QuestionDisplayOptionsContainer>
        {Object.values(questionData.answers).map(
          (ans) =>
            ans && (
              <QuestionDisplayOptionsButton
                key={ans}
                onClick={() => HandleClick(ans)}
                selected={ans == optionSelected ? true : false}
              >
                <QuestionDisplayOptionsButtonTextContainer>
                  <QuestionDisplayOptionsButtonTextCircle
                    selected={ans == optionSelected ? true : false}
                  >
                    <QuestionDisplayOptionsButtonTextCircleInside
                      selected={ans == optionSelected ? true : false}
                    />
                  </QuestionDisplayOptionsButtonTextCircle>
                  <QuestionDisplayOptionsButtonText
                    selected={ans == optionSelected ? true : false}
                  >
                    {ans}
                  </QuestionDisplayOptionsButtonText>
                </QuestionDisplayOptionsButtonTextContainer>
              </QuestionDisplayOptionsButton>
            )
        )}
        <QuestionDisplayNextButtonContainer>
          <QuestionDisplayNextButton>
            <QuestionDisplayNextButtonText>Next</QuestionDisplayNextButtonText>
          </QuestionDisplayNextButton>
        </QuestionDisplayNextButtonContainer>
      </QuestionDisplayOptionsContainer>
    </QuestionDisplayContainer>
  );
};
