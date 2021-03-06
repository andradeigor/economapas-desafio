import styled from "styled-components";

export const TicketContainer = styled.section`
  width: 100%;
  height: 75vh;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const CardsWarper = styled.section`
  position: absolute;
  top: 50%;
  transform: translate(50%, -45%);
  display: flex;
  gap: 60px;
  right: 50%;
  height: 600px;
`;
