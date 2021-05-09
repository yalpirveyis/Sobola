import React from "react";
import { View } from "react-native";

function Center(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {props.children}
    </View>
  );
}

export { Center };
/*
Using Component
 <Center >
        Items
      </Center>
*/
