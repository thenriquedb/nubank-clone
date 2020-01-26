import React from 'react';

import { MaterialIcons } from "@expo/vector-icons";

import qrcode from "../../../assets/qrcode.png";

import {
  Container,
  QRCodeArea,
  QRCode,
  AccountDetailsArea,
  AccountInfo,
  AccountLabelText,
  AccountContentText,
  Nav,
  NavItem,
  NavText,
  NavDescription,
  ExitButton,
  ExitButtonText
} from './styles';

const Menu = ({ translateY }) => {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 400],
          outputRange: [0, 1]
        })
      }}>
      <QRCodeArea>
        <QRCode source={qrcode} />
      </QRCodeArea>

      <AccountDetailsArea>
        <AccountInfo>
          <AccountLabelText> Banco </AccountLabelText>
          <AccountContentText> 260 - Nu Pagamentos S.A. </AccountContentText>
        </AccountInfo>

        <AccountInfo>
          <AccountLabelText> Agência </AccountLabelText>
          <AccountContentText> 0001 </AccountContentText>
        </AccountInfo>

        <AccountInfo>
          <AccountLabelText> Conta </AccountLabelText>
          <AccountContentText> 1234567-8 </AccountContentText>
        </AccountInfo>
      </AccountDetailsArea>

      <Nav>
        <NavItem>
          <NavDescription>
            <MaterialIcons name="help-outline" size={25} color="#fff" />
            <NavText>Me ajuda </NavText>
          </NavDescription>
          <MaterialIcons name="navigate-next" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <NavDescription>
            <MaterialIcons name="person-outline" size={25} color="#fff" />
            <NavText>Perfil </NavText>
          </NavDescription>
          <MaterialIcons name="navigate-next" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <NavDescription>
            <MaterialIcons name="attach-money" size={25} color="#fff" />
            <NavText> Configurar NuConta </NavText>
          </NavDescription>
          <MaterialIcons name="navigate-next" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <NavDescription>
            <MaterialIcons name="credit-card" size={25} color="#fff" />
            <NavText> Configurar cartão </NavText>
          </NavDescription>
          <MaterialIcons name="navigate-next" size={25} color="#fff" />
        </NavItem>

        <NavItem>
          <NavDescription>
            <MaterialIcons name="smartphone" size={25} color="#fff" />
            <NavText> Configurações do App </NavText>
          </NavDescription>
          <MaterialIcons name="navigate-next" size={25} color="#fff" />
        </NavItem>

        <ExitButton onPress={() => { }}>
          <ExitButtonText> Sair da conta </ExitButtonText>
        </ExitButton>
      </Nav>
    </Container>
  );
};

export default Menu;
