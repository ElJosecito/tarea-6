import { View, Text } from "react-native";
import React from "react";
//mavigation
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNav from "./Navigations/DrawerNav";

//components
import GenderGuess from "../screens/GenderGuess";
import AgeGuess from "../screens/AgeGuess";
import UniversityList from "../screens/UniversityList";
import WeatherScreen from "../screens/WeatherScreen";
import ContactMeScreen from "../screens/ContactMeScreen";

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="DrawerNav">
        <Drawer.Screen name="GenderGuess" component={GenderGuess} />
        <Drawer.Screen name="AgeGuess" component={AgeGuess} />
        <Drawer.Screen name="UniversityList" component={UniversityList} />
        <Drawer.Screen name="WeatherScreen" component={WeatherScreen} />
        <Drawer.Screen name="ContactMeScreen" component={ContactMeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
