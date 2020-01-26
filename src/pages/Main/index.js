import React from 'react';

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Card from "../../components/Card";
import Menu from "../../components/Menu";

import {
  Container,
  Content,
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

const Main = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ], {
    useNativeDriver: true
  }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      let opened = false; // indica se o menu ta aberto ou nao

      offset += translationY;

      if (translationY >= 200) {
        opened = true; // indica se o menu ta aberto ou nao
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 500 : 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 500 : 0
        translateY.setOffset(offset);
        translateY.setValue(0);
      });

    }
  }

  function openMenu() {

  }

  return (
    <Container >
      <Header openMenu={openMenu} />

      <Content>
        <Menu
          translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <CardContainer style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 500],
                outputRange: [-50, 0, 500],
                extrapolate: 'clamp'
              }),
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
