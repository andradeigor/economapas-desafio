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
import LinuxIconPath from "assets/LinuxIcon.png";
import CompIconPath from "assets/CompIcon.png";
import UserLogoPath from "assets/User.svg";

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <CardTitleContainer>
        <CardTitleWraper>
          <CardTitle>Meia Entrada</CardTitle>
          <CardSubtitle>Dia de Semana</CardSubtitle>
        </CardTitleWraper>
      </CardTitleContainer>
      <CardMainDivider />
      <CardImageContainer>
        <CardImage src={LinuxIconPath} />
      </CardImageContainer>
      <CardPeopleContainer>
        <CardPeopleLogo src={UserLogoPath} />
        <CardPeopleText>1 Pessoa</CardPeopleText>
      </CardPeopleContainer>
      <CardSubDivider />
      <CardLevelButtonsContainer>
        <CardLevelButtons>
          <CardLevelButtonsTextMinus>-</CardLevelButtonsTextMinus>
        </CardLevelButtons>
        <CardLevelButtonsText>Testando</CardLevelButtonsText>
        <CardLevelButtons>
          <CardLevelButtonsTextPlus>+</CardLevelButtonsTextPlus>
        </CardLevelButtons>
      </CardLevelButtonsContainer>
      <CardPlayButtonContainer>
        <CardPlayButton>
          <CardPlayButtonText>Comprar</CardPlayButtonText>
        </CardPlayButton>
      </CardPlayButtonContainer>
    </CardContainer>
  );
};
