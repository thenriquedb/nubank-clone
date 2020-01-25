import React from 'react';

import { Text } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Content } from './styles';

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Card from "../../components/Card";
import Menu from "../../components/Menu";

const Main = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card />
      </Content>

      <Tabs />
    </Container>
  );
};

export default Main;
