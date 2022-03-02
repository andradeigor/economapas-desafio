import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.purple};
  position: relative;
  overflow-x: visible;
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
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 36px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 24px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.card};
  margin-left: 30px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 10px;
  }
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
  z-index: 10;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 360px;
    height: 180px;
  }
`;

export const HeaderSeachBarWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const HeaderSeachBarTitleConteiner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 50%;
  }
`;

export const HeaderSeachBarTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 45px;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-left: 25px;
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 300px;
    height: 60px;
    margin-left: 15px;
    font-size: 24px;
  }
`;

export const HeaderCicleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  width: 500px;
  height: 100%;
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
