import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium } from "./Text";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
      }}
    >
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <View
          //source={require("../icons/menu.png")}
          style={{
            width: 24,
            height: 16,
          }}
        />
      </TouchableOpacity>
      <Image
        source={require("../icons/logoSmall.png")}
        style={{
          width: 31,
          height: 34,
          alignSelf: "center",
        }}
      />
      <TouchableOpacity style={{ alignSelf: "center" }}>
        <Image
          source={require("../icons/menuSetting.png")}
          style={{
            width: 30,
            height: 26.3,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

/*
Using Component
 <Header></Header>
*/
