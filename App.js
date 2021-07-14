// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TextBold } from "./assets/components/Text";
import { Constants, Colors, ContentTr } from "./assets/components/Constants";

import StepperScreen from "./Screens/StepperScreen";
import LoginScreen from "./Screens/LoginScreen";
import MembershipScreen from "./Screens/MembershipScreen";
import MainScreen from "./Screens/MainScreen";
import MapScreen from "./Screens/MapScreen";
import QrScreen from "./Screens/QrScreen";
import MakeCallScreen from "./Screens/MakeCallScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import Tabbar from "./assets/components/Tabbar";

import EditInformationScreen from "./Screens/EditInformationScreen";
import EditPasswordScreen from "./Screens/EditPasswordScreen";
import EditCarScreen from "./Screens/EditCarScreen";
import AddCarScreen from "./Screens/AddCarScreen";
import MyCarsScreen from "./Screens/MyCarsScreen";
import MessagesScreen from "./Screens/MessagesScreen";
import AdressScreen from "./Screens/AdressScreen";
import AddAdressScreen from "./Screens/AddAdressScreen";
import EditAdressScreen from "./Screens/EditAdressScreen";
import AutoMessageScreen from "./Screens/AutoMessageScreen";
import EditAutoMessageScreen from "./Screens/EditAutoMessageScreen";
import CommentsScreen from "./Screens/CommentsScreen";
import NoNotificationScreen from "./Screens/NoNotificationScreen";
import MessageDetailsScreen from "./Screens/MessageDetailsScreen";
import AddAutoMessageScreen from "./Screens/AddAutoMessageScreen";
import IncomingCallScreen from "./Screens/IncomingCallScreen";
import Test from "./Screens/Test";

import * as Localization from "expo-localization";
import * as Content from "./assets/components/Content.json";
//var stepperCheck = false;
var log = false;
var LanguageSlice = Localization.locale.slice(0, 2);
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text>{Content[LanguageSlice]?.Main_Hello}</Text>

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
          name="Test"
          component={Test}
          options={() => {
            return { headerShown: false };
          }}
        />
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
        <Stack.Screen
          name="AddCar"
          component={AddCarScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Adress"
          component={AdressScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="AddAdress"
          component={AddAdressScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="EditAdress"
          component={EditAdressScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="AutoMessage"
          component={AutoMessageScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="EditAutoMessage"
          component={EditAutoMessageScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="AddAutoMessage"
          component={AddAutoMessageScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="MessageDetails"
          component={MessageDetailsScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="NoNotification"
          component={NoNotificationScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
        <Stack.Screen
          name="IncomingCall"
          component={IncomingCallScreen}
          options={() => {
            return { headerShown: false };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
