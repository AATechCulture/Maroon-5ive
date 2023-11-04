import {
  createStackNavigator,
  createAppContainer,
} from "@react-navigation/stack";

import Page2 from "../screens/Page2";
import Page1 from "../screens/Page1";
import Page3 from "../screens/Page2";
import Page4 from "../screens/Page2";
import Page5 from "../screens/Page2";

const screens = {
  Page1: {
    screen: Page1,
  },
  Page2: {
    screen: Page2,
  },
  Page3: {
    screen: Page3,
  },
  Page4: {
    screen: Page4,
  },
  Page5: {
    screen: Page5,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
