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
  const [cardsPeople, setCardsPeople] = useState([0, 0]);

  const HandleClick = (action: number, index: number) => {
    if (cardsPeople[index] + action > 2 || cardsPeople[index] + action < 0) {
      return;
    } else {
      const oldCards = cardsPeople;
      oldCards[index] += action;
      setCardsPeople([...oldCards]);
    }
  };
  return (
    <CardsWarper>
      <CardContainer>
        <CardTitleContainer>
          <CardTitleWraper>
            <CardTitle>Linux</CardTitle>
            <CardSubtitle>Nível {equivalents[cardsPeople[0]][0]}</CardSubtitle>
          </CardTitleWraper>
        </CardTitleContainer>
        <CardMainDivider />
        <CardImageContainer>
          <CardImage src={LinuxIconPath} />
        </CardImageContainer>
        <CardPeopleContainer>
          <CardPeopleLogo src={UserLogoPath} />
          <CardPeopleText>
            {cardsPeople[0] + 1 === 1
              ? `${cardsPeople[0] + 1} Pessoa`
              : `${cardsPeople[0] + 1} Pessoas`}
          </CardPeopleText>
        </CardPeopleContainer>
        <CardSubDivider />
        <CardLevelButtonsContainer>
          <CardLevelButtons onClick={() => HandleClick(-1, 0)}>
            <CardLevelButtonsTextMinus>-</CardLevelButtonsTextMinus>
          </CardLevelButtons>
          <CardLevelButtonsText>
            {equivalents[cardsPeople[0]][0]}
          </CardLevelButtonsText>
          <CardLevelButtons onClick={() => HandleClick(1, 0)}>
            <CardLevelButtonsTextPlus>+</CardLevelButtonsTextPlus>
          </CardLevelButtons>
        </CardLevelButtonsContainer>
        <CardPlayButtonContainer>
          <CardPlayButton>
            <CardPlayButtonText>Jogar</CardPlayButtonText>
          </CardPlayButton>
        </CardPlayButtonContainer>
      </CardContainer>
      <CardContainer>
        <CardTitleContainer>
          <CardTitleWraper>
            <CardTitle>Programação</CardTitle>
            <CardSubtitle>Nível {equivalents[cardsPeople[1]][0]}</CardSubtitle>
          </CardTitleWraper>
        </CardTitleContainer>
        <CardMainDivider />
        <CardImageContainer>
          <CardImage src={CompIconPath} />
        </CardImageContainer>
        <CardPeopleContainer>
          <CardPeopleLogo src={UserLogoPath} />
          <CardPeopleText>
            {cardsPeople[1] + 1 === 1
              ? `${cardsPeople[1] + 1} Pessoa`
              : `${cardsPeople[1] + 1} Pessoas`}
          </CardPeopleText>
        </CardPeopleContainer>
        <CardSubDivider />
        <CardLevelButtonsContainer>
          <CardLevelButtons onClick={() => HandleClick(-1, 1)}>
            <CardLevelButtonsTextMinus>-</CardLevelButtonsTextMinus>
          </CardLevelButtons>
          <CardLevelButtonsText>
            {equivalents[cardsPeople[1]][0]}
          </CardLevelButtonsText>
          <CardLevelButtons onClick={() => HandleClick(1, 1)}>
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
