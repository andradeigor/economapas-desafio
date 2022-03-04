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
  HeaderName,
} from "./style";
import ciclePath from "assets/circle.svg";
import { useState } from "react";

export const Header: React.FC<any> = ({ name, setUserName }) => {
  const OnChangeText = (ev: any) => {
    setUserName(ev.target.value);
  };
  return (
    <HeaderContainer>
      <HeaderCicleContainer>
        <HeaderCicleOne src={ciclePath} />
        <HeaderCicleTwo src={ciclePath} />
        <HeaderCicleThree src={ciclePath} />
        <HeaderName>{name}</HeaderName>
      </HeaderCicleContainer>
      <HeaderSeachBarContainer>
        <HeaderSeachBarWraper>
          <HeaderSeachBarTitleConteiner>
            <HeaderSeachBarTitle>Digite seu nome:</HeaderSeachBarTitle>
          </HeaderSeachBarTitleConteiner>
          <HeaderSeachBarInput
            placeholder="Ex:João"
            onChange={OnChangeText}
          ></HeaderSeachBarInput>
        </HeaderSeachBarWraper>
      </HeaderSeachBarContainer>
      <HeaderTitleContainer>
        <HeaterTitle>Quiz App</HeaterTitle>
        <HeaderSubTitle>Dê o seu melhor!</HeaderSubTitle>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};
