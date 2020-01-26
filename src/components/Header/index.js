import React from 'react';

import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../../assets/Nubank_Logo.png";

import { Container, Top, Logo, Title, OpenMenuButton } from './styles';

const Header = ({ openMenu }) => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title> Thiago </Title>
      </Top>
      <OpenMenuButton onPress={openMenu}>
        <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
      </OpenMenuButton>
    </Container>
  );
};

export default Header;
