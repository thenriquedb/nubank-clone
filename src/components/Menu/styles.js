import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;

export const QRCodeArea = styled.View`
  padding: 5px;
  background-color: #fff;
  align-self: center
`;

export const QRCode = styled.Image`
  width: 100px;
  height: 100px;
`;

export const AccountDetailsArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const AccountInfo = styled.View`
  flex-direction: row;
`;

export const AccountLabelText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const AccountContentText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Nav = styled.View`
  margin-top: 20px;
  align-self: stretch;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255,255,255,0.4);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255,255,255,0.4);
`;

export const NavDescription = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const NavText = styled.Text`
  color: #fff;
  font-size: 16px;
  max-width: 230px;
  margin-left: 20px;
`;

export const ExitButton = styled.TouchableOpacity`
  border: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255,255,255,0.4);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 15px;
  margin-top: 20px;
`;

export const ExitButtonText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;