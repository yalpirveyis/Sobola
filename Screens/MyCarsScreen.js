import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Animated,
  Modal,
  View,
} from "react-native";
import Tabbar from "../assets/components/Tabbar";
import Header from "../assets/components/Header";
import CarsListItem from "../assets/components/CarsListItem";

export default function MyCarsScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 24,
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          right: 20,
          bottom: 70,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/icons/add.png")}
          style={{
            width: 60,
            height: 60,
          }}
        />
      </TouchableOpacity>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#FFFFFF",
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
          width: Dimensions.get("window").width,
        }}
      >
        <Tabbar></Tabbar>
      </Animated.View>

      <Header back={true} />

      <ScrollView
        style={{ paddingTop: 10 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <CarsListItem
          onPress={() => {
            navigation.navigate("EditCar");
          }}
          Text="42 CYZ 53"
        />
        <CarsListItem
          onPress={() => {
            navigation.navigate("EditCar");
          }}
          Text="42 AAA 53"
        />

        <CarsListItem
          onPress={() => {
            navigation.navigate("EditCar");
          }}
          Text="42 BBB 53"
        />

        {/*List End*/}
      </ScrollView>
    </View>
  );
}
