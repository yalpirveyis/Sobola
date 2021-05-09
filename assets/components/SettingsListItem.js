import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium, TextLight } from "./Text";

function SettingsListItem(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: Constants.FullWidth,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        borderBottomColor: Colors.Black,
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
      }}
      onPress={props.onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={props.source}
          style={{
            width: 30,
            height: 30,
          }}
        />
        <View style={{ marginLeft: 20 }}>
          <TextMedium>{props.Text}</TextMedium>
        </View>
      </View>
      <Image
        source={require("../icons/arrowRight.png")}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  );
}

export default SettingsListItem;
