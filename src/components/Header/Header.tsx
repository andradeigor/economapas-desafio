import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaterTitle,
  HeaderSubTitle,
  HeaderSeachBarContainer,
} from "./style";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderSeachBarContainer />
      <HeaderTitleContainer>
        <HeaterTitle>Quiz App</HeaterTitle>
        <HeaderSubTitle>Dê o seu melhor!</HeaderSubTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
