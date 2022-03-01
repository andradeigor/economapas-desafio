import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.purple};
  position: relative;
`;

export const HeaderTitleContainer = styled.section`
  width: 40%;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const HeaterTitle = styled.h1`
  font-size: 64px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.card};
  margin-top: 30px;
  margin-left: 30px;
`;

export const HeaderSubTitle = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.card};
  margin-left: 30px;
`;

export const HeaderSeachBarContainer = styled.div`
  width: 800px;
  background-color: ${({ theme }) => theme.colors.card};
  height: 70px;
  border-radius: 8px;
  box-shadow: rgba(9, 25, 51, 0.15) 1.95px 1.95px 2.6px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const HeaderSeachBarWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const HeaderSeachBarTitleConteiner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderSeachBarTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 45px;
`;

export const HeaderSeachBarInput = styled.input`
  margin-left: 40px;
  width: 470px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  padding-left: 16px;
  font-size: 16px;
  font-family: "Mukta";
  ::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;

export const HeaderCicleOne = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, -30%);
`;
export const HeaderCicleTwo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-30%, -10%);
`;
export const HeaderCicleThree = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(20%, 30%);
`;
