import React from 'react';
import { MaterialIcons } from "@expo/vector-icons";

import {
  CardContainer,
  CardContent,
  Quantity,
  HeaderDescription,
  CardHeader,
  Description,
  CardFooter,
  Title,
  Annotation
} from './styles';

const Card = ({ translateY }) => {
  return (
    <CardContainer style={{
      transform: [{
        translateY: translateY,
      }]
    }}>
      <CardHeader>
        <MaterialIcons name="payment" size={28} color="#ccc" />
        <HeaderDescription> Cartão de crédito </HeaderDescription>
      </CardHeader>

      <CardContent>
        <Title>Fatura atual </Title>
        <Quantity>R$ 4500,00 </Quantity>
        <Description>Limite atual </Description>
      </CardContent>
      <CardFooter>
        <MaterialIcons name="shopping-cart" size={30} color="#ccc" />
        <Annotation>
          Compra mais recente em Supermercados BH no valor de R$ 20,00
        </Annotation>
        <MaterialIcons name="navigate-next" size={30} color="#ccc" />
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
