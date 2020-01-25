import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "../src/pages/Main";

const Stack = createStackNavigator(
  {
    Main: {
      screen: Main
    }
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    }
  });

const Routes = createAppContainer(Stack);

export default Routes;