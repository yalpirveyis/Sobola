// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextBold } from "./assets/components/Text";
import { Constants, Colors } from "./assets/components/Constants";

import StepperScreen from "./Screens/StepperScreen";
import LoginScreen from "./Screens/LoginScreen";
import MembershipScreen from "./Screens/MembershipScreen";
import MainScreen from "./Screens/MainScreen";
import Test from "./Screens/Test";
import MapScreen from "./Screens/MapScreen";
import QrScreen from "./Screens/QrScreen";
import MakeCallScreen from "./Screens/MakeCallScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import Tabbar from "./assets/components/Tabbar";

import EditInformationScreen from "./Screens/EditInformationScreen";
import EditPasswordScreen from "./Screens/EditPasswordScreen";
import EditCarScreen from "./Screens/EditCarScreen";
import MyCarsScreen from "./Screens/MyCarsScreen";

//var stepperCheck = false;
var log = false;
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{log == true ? "se" : "as"}</Text>
      <Button title="Go to TEst" onPress={() => navigation.navigate("Test")} />
      <Button
        title="MAkce Vall"
        onPress={() => navigation.navigate("MakeCall")}
      />
      <Button
        title="Go to stepper"
        onPress={() => navigation.navigate("Stepper")}
      />
      <TextBold FontSize={26}>TextBold</TextBold>
      <Tabbar />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createStackNavigator();
//headerShown: false using for hide default header

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Stepper"
          component={StepperScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Membership"
          component={MembershipScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Qr"
          component={QrScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MakeCall"
          component={MakeCallScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="EditInformation"
          component={EditInformationScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="EditPassword"
          component={EditPasswordScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MyCars"
          component={MyCarsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="EditCar"
          component={EditCarScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
