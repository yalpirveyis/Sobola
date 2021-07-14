import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium, TextLight } from "./Text";

function CarsListItem(props) {
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
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 20,
      }}
      onPress={props.onPress}
    >
      <View style={{ marginLeft: 10 }}>
        <TextMedium>{props.Text}</TextMedium>
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

export default CarsListItem;
