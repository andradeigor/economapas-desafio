import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaterTitle,
  HeaderSubTitle,
  HeaderSeachBarContainer,
  HeaderSeachBarWraper,
  HeaderSeachBarTitleConteiner,
  HeaderSeachBarTitle,
} from "./style";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderSeachBarContainer>
        <HeaderSeachBarWraper>
          <HeaderSeachBarTitleConteiner>
            <HeaderSeachBarTitle>Digite seu nome:</HeaderSeachBarTitle>
          </HeaderSeachBarTitleConteiner>
        </HeaderSeachBarWraper>
      </HeaderSeachBarContainer>
      <HeaderTitleContainer>
        <HeaterTitle>Quiz App</HeaterTitle>
        <HeaderSubTitle>Dê o seu melhor!</HeaderSubTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
