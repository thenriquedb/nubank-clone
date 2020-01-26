
import { Animated } from "react-native";
import styled from 'styled-components/native';

export const CardContainer = styled(Animated.View)`
  flex: 1;
  background-color: #fff;
  border-radius: 4px;
  margin: 0 20px;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  /* top: 500px; */
  top: 0px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 30px;
`;

export const HeaderDescription = styled.Text`
  color: #ccc;
  margin-left: 5px;
  font-size: 18px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;


export const Title = styled.Text`
  font-size: 16px;
  color: #00BBCA;
  text-transform: uppercase;
  font-weight: bold
`;

export const Quantity = styled.Text`
  font-size: 42px;
  color: #00BBCA;
  margin-top: 3px;
`;


export const Description = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 3px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 30px 20px;
  background-color: #eee;
  border-radius: 4px;
`;


export const Annotation = styled.Text`
  padding-left: 10px;
  font-size: 12px;
  max-width: 230px;
`;


