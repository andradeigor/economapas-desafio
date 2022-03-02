import { Card } from "components/Card/Card";
import { useState } from "react";
import { TicketContainer, CardsWarper } from "./style";

export const Main: React.FC = () => {
  return (
    <TicketContainer>
      <Card></Card>
    </TicketContainer>
  );
};
