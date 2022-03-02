import {
  CardContainer,
  CardImage,
  CardImageContainer,
  CardLevelButtons,
  CardLevelButtonsContainer,
  CardLevelButtonsText,
  CardLevelButtonsTextMinus,
  CardLevelContainer,
  CardLevelText,
  CardMainDivider,
  CardPeopleContainer,
  CardPeopleLogo,
  CardPeopleText,
  CardPlayButton,
  CardPlayButtonContainer,
  CardPlayButtonText,
  CardSubDivider,
  CardSubtitle,
  CardTitle,
  CardTitleContainer,
  CardTitleWraper,
  CardLevelButtonsTextPlus,
  CardsWarper,
} from "./style";
import LinuxIconPath from "assets/LinuxIcon.png";
import CompIconPath from "assets/CompIcon.png";
import UserLogoPath from "assets/User.svg";
import { useState } from "react";

export const Card: React.FC = () => {
  const [equivalents, setEquivalents] = useState([
    ["Fácil", "easy"],
    ["Médio", "medium"],
    ["Difícil", "hard"],
  ]);
  const [cardsLevel, setCardsLevel] = useState(["Fácil", "Fácil"]);
  const [cardsPeople, setCardsPeople] = useState([1, 1]);

  const HandleClick = (action: number, index: number) => {
    if (action > 2 || action < 0) {
      return;
    }
    const newDataLevel = cardsLevel;
    const newDataPeople = cardsPeople;
    newDataLevel[index] = equivalents[action][0];
    newDataPeople[index] = action + 1;
    console.log(action, index);
    setCardsLevel([...newDataLevel]);
    setCardsPeople([...newDataPeople]);
  };
  console.log(cardsPeople);
  return (
    <CardsWarper>
      <CardContainer>
        <CardTitleContainer>
          <CardTitleWraper>
            <CardTitle>Desafio Linux</CardTitle>
            <CardSubtitle>Nível {cardsLevel[0]}</CardSubtitle>
          </CardTitleWraper>
        </CardTitleContainer>
        <CardMainDivider />
        <CardImageContainer>
          <CardImage src={LinuxIconPath} />
        </CardImageContainer>
        <CardPeopleContainer>
          <CardPeopleLogo src={UserLogoPath} />
          <CardPeopleText>{cardsPeople[0]} Pessoa</CardPeopleText>
        </CardPeopleContainer>
        <CardSubDivider />
        <CardLevelButtonsContainer>
          <CardLevelButtons onClick={() => HandleClick(cardsPeople[0] - 1, 0)}>
            <CardLevelButtonsTextMinus>-</CardLevelButtonsTextMinus>
          </CardLevelButtons>
          <CardLevelButtonsText>{cardsLevel[0]}</CardLevelButtonsText>
          <CardLevelButtons onClick={() => HandleClick(cardsPeople[0], 0)}>
            <CardLevelButtonsTextPlus>+</CardLevelButtonsTextPlus>
          </CardLevelButtons>
        </CardLevelButtonsContainer>
        <CardPlayButtonContainer>
          <CardPlayButton>
            <CardPlayButtonText>Jogar</CardPlayButtonText>
          </CardPlayButton>
        </CardPlayButtonContainer>
      </CardContainer>
    </CardsWarper>
  );
};
