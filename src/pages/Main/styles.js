import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #772B98;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;