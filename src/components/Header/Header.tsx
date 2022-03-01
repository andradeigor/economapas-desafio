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
} from "./style";
import ciclePath from "assets/circle.svg";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderCicleOne src={ciclePath} />
      <HeaderCicleTwo src={ciclePath} />
      <HeaderCicleThree src={ciclePath} />
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
