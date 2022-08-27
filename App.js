import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {title: "Home"}
    },
    Components: {
      screen: ComponentsScreen,
      navigationOptions: {title: "Components"}
    },
    List: {
      screen: ListScreen,
      navigationOptions: {title: "List"}
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerLeft: () => null // disables back navigation button
    },
  }
);

export default createAppContainer(navigator);
