import { Card } from "components/Card/Card";
import { useState } from "react";
import { TicketContainer, CardsWarper } from "./style";
interface ICard {
  id: number;
  title: string;
  subTitle: string;
  peopleNumber: number;
  level: string;
}
export const Main: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<ICard[]>([
    {
      id: 0,
      title: "Linux",
      subTitle: "Fácil",
      peopleNumber: 1,
      level: "Fácil",
    },
    {
      id: 1,
      title: "Programação",
      subTitle: "Fácil",
      peopleNumber: 1,
      level: "Fácil",
    },
  ]);
  return (
    <TicketContainer>
      <CardsWarper>
        {cardsInfo.map((card: ICard) => (
          <Card key={card.id} />
        ))}
      </CardsWarper>
    </TicketContainer>
  );
};
