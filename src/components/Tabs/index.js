import React from 'react';

import { View } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, TabsContainer, TabItem, TabText } from './styles';

const Tabs = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <MaterialIcons name="person-add" size={24} color="#fff" />
          <TabText> Indicar Amigos </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="smartphone" size={24} color="#fff" />
          <TabText>Recarga de celular </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#fff" />
          <TabText>Cobrar </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="attach-money" size={24} color="#fff" />
          <TabText>Empréstimos </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="arrow-downward" size={24} color="#fff" />
          <TabText>Depositar </TabText>
        </TabItem>


        <TabItem>
          <MaterialIcons name="arrow-upward" size={24} color="#fff" />
          <TabText>Transferir </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="sort" size={24} color="#fff" />
          <TabText>Ajustar limite </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="help-outline" size={24} color="#fff" />
          <TabText>Me Ajuda </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="credit-card" size={24} color="#fff" />
          <TabText>Pagar </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="lock" size={24} color="#fff" />
          <TabText>Bloquear cartão </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="payment" size={24} color="#fff" />
          <TabText>Cartão virtual </TabText>
        </TabItem>

        <TabItem>
          <MaterialIcons name="menu" size={24} color="#fff" />
          <TabText>Organizar atalhos </TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
