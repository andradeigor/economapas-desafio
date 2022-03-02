import { Card } from "components/Card/Card";
import { useState } from "react";
import { TicketContainer, CardsWarper } from "./style";
import LinuxIconPath from "assets/LinuxIcon.png";
import CompIconPath from "assets/CompIcon.png";
interface ICard {
  id: number;
  title: string;
  subTitle: string;
  peopleNumber: number;
  level: string;
  path: string;
}
export const Main: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<ICard[]>([
    {
      id: 0,
      title: "Linux",
      subTitle: "Fácil",
      peopleNumber: 1,
      level: "Fácil",
      path: LinuxIconPath,
    },
    {
      id: 1,
      title: "Programação",
      subTitle: "Fácil",
      peopleNumber: 1,
      level: "Fácil",
      path: CompIconPath,
    },
  ]);
  return (
    <TicketContainer>
      <CardsWarper>
        {cardsInfo.map((card: ICard) => (
          <Card
            key={card.id}
            title={card.title}
            subTitle={card.subTitle}
            peopleNumber={card.peopleNumber}
            level={card.level}
            path={card.path}
          />
        ))}
      </CardsWarper>
    </TicketContainer>
  );
};
