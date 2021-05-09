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
import SettingsListItem from "../assets/components/SettingsListItem";

export default function SettingsScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
      {/* Header Start */}

      {/* Header Start */}
      {/* absolute aniamted tab bar*/}

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

      {/* Header End */}
      {/*List Start*/}
      {/*List İtem*/}
      <ScrollView
        style={{ paddingTop: 10 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <SettingsListItem
          onPress={() => {
            navigation.navigate("EditInformation");
          }}
          source={require("../assets/icons/user.png")}
          Text="Bilgilerimi Düzenle"
        />
        <SettingsListItem
          onPress={() => {
            navigation.navigate("EditPassword");
          }}
          source={require("../assets/icons/password.png")}
          Text="Şifremi Değiştir"
        />
        <SettingsListItem
          onPress={() => {
            navigation.navigate("MyCars");
          }}
          source={require("../assets/icons/steeringWheel.png")}
          Text="Araçlarım"
        />

        {/*List End*/}
      </ScrollView>
    </View>
  );
}
