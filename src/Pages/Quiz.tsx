import { Header } from "components/Header/Header";
import { QuizDisplay } from "components/QuizDisplay/QuizDisplay";

export const Quiz: React.FC<any> = ({ name, setUserName }) => {
  return (
    <>
      <Header name={name} setUserName={(name: string) => setUserName(name)} />
      <QuizDisplay />
    </>
  );
};
