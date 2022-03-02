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
} from "./style";

import UserLogoPath from "assets/User.svg";
type Card = {
  title: string;
  subTitle: string;
  peopleNumber: number;
  level: string;
  path: string;
};
export const Card: React.FC<Card> = ({
  title,
  subTitle,
  peopleNumber,
  level,
  path,
}) => {
  return (
    <CardContainer>
      <CardTitleContainer>
        <CardTitleWraper>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>Nível {subTitle}</CardSubtitle>
        </CardTitleWraper>
      </CardTitleContainer>
      <CardMainDivider />
      <CardImageContainer>
        <CardImage src={path} />
      </CardImageContainer>
      <CardPeopleContainer>
        <CardPeopleLogo src={UserLogoPath} />
        <CardPeopleText>{peopleNumber} Pessoa</CardPeopleText>
      </CardPeopleContainer>
      <CardSubDivider />
      <CardLevelButtonsContainer>
        <CardLevelButtons>
          <CardLevelButtonsTextMinus>-</CardLevelButtonsTextMinus>
        </CardLevelButtons>
        <CardLevelButtonsText>{level}</CardLevelButtonsText>
        <CardLevelButtons>
          <CardLevelButtonsTextPlus>+</CardLevelButtonsTextPlus>
        </CardLevelButtons>
      </CardLevelButtonsContainer>
      <CardPlayButtonContainer>
        <CardPlayButton>
          <CardPlayButtonText>Jogar</CardPlayButtonText>
        </CardPlayButton>
      </CardPlayButtonContainer>
    </CardContainer>
  );
};
