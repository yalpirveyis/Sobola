import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

import { Constants, Colors } from "./Constants";

import { AnimatedCircularProgress } from "react-native-circular-progress";

export function Story(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ position: "relative" }}>
      <AnimatedCircularProgress
        style={{ marginHorizontal: 10 }}
        size={93}
        width={5}
        backgroundWidth={5}
        fill={49}
        tintColor="#5A55A1"
        backgroundColor="#E6E6E6"
        arcSweepAngle={360}
        rotation={180}
        lineCap="round"
      />
      <Image
        source={props.source}
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 70,
        }}
      />
    </TouchableOpacity>
  );
}

/*
Using Component
            <Story
            source={require("../assets/icons/story.png")}
            onPress={() => Alert.alert("Simple Button pressed")}>
            </Story>
*/
