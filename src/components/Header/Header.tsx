import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaterTitle,
  HeaderSubTitle,
  HeaderSeachBarContainer,
  HeaderSeachBarWraper,
  HeaderSeachBarTitleConteiner,
  HeaderSeachBarTitle,
  HeaderSeachBarInput,
  HeaderCicleOne,
  HeaderCicleTwo,
  HeaderCicleThree,
  HeaderCicleContainer,
} from "./style";
import ciclePath from "assets/circle.svg";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderCicleContainer>
        <HeaderCicleOne src={ciclePath} />
        <HeaderCicleTwo src={ciclePath} />
        <HeaderCicleThree src={ciclePath} />
      </HeaderCicleContainer>
      <HeaderSeachBarContainer>
        <HeaderSeachBarWraper>
          <HeaderSeachBarTitleConteiner>
            <HeaderSeachBarTitle>Digite seu nome:</HeaderSeachBarTitle>
          </HeaderSeachBarTitleConteiner>
          <HeaderSeachBarInput placeholder="Ex:João"></HeaderSeachBarInput>
        </HeaderSeachBarWraper>
      </HeaderSeachBarContainer>
      <HeaderTitleContainer>
        <HeaterTitle>Quiz App</HeaterTitle>
        <HeaderSubTitle>Dê o seu melhor!</HeaderSubTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
