import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium } from "./Text";

export default function Header(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
      }}
    >
      <TouchableOpacity
        style={{ alignSelf: "center" }}
        onPress={() => navigation.goBack()}
      >
        {props.back == true ? (
          <Image
            source={require("../icons/back.png")}
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
        ) : (
          <View
            style={{
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
          />
        )}
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
