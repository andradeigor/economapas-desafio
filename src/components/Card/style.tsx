import styled from "styled-components";

export const CardsWarper = styled.section`
  position: absolute;
  top: 50%;
  transform: translate(50%, -45%);
  display: flex;
  gap: 60px;
  right: 50%;
  height: 600px;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const CardTitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardTitleWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  margin-top: 20px;
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.card};
`;

export const CardSubtitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.card};
  font-weight: 400;
`;

export const CardMainDivider = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.card};
  margin-top: 16px;
`;

export const CardImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-top: 20px;
  border: 5px solid ${({ theme }) => theme.colors.card};
  transition: all 0.3s ease-out;
`;

export const CardContainer = styled.div`
  width: 320px;
  height: 480px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
  box-shadow: rgba(9, 25, 51, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.3s ease-out;
  overflow: hidden;
  :hover {
    height: 560px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    height: 560;
  }
`;
export const CardPeopleContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardPeopleLogo = styled.img`
  width: 20px;
  height: 20px;
`;
export const CardPeopleText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.card};
  margin-left: 5px;
`;
export const CardSubDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.card};
  margin-top: 16px;
`;

export const CardLevelContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardLevelText = styled.p`
  font-weight: 800;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.card};
  margin-left: 5px;
`;

export const CardLevelButtonsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLevelButtons = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
`;

export const CardLevelButtonsText = styled.p`
  font-weight: 800;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.card};
  margin-bottom: 2px;
`;
export const CardLevelButtonsTextMinus = styled.p`
  font-weight: 800;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.purple};
`;
export const CardLevelButtonsTextPlus = styled.p`
  font-weight: 800;
  font-size: 34px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const CardPlayButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CardPlayButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const CardPlayButtonText = styled.p`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.purple};
`;
