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
        borderBottomColor: Colors.Gray,
        borderBottomWidth: 0.25,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
      }}
      onPress={props.onPress}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          width: 20,
          height: 20,
        }}
      />
    </TouchableOpacity>
  );
}

export default SettingsListItem;
