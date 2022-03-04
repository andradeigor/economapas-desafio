import { Header } from "components/Header/Header";
import { Main } from "components/Main/Main";

export const Home: React.FC<any> = ({ name, setUserName }) => {
  return (
    <>
      <Header name={name} setUserName={(name: string) => setUserName(name)} />
      <Main />
    </>
  );
};
