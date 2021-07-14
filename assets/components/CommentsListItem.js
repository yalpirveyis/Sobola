import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium, TextLight } from "./Text";
import { Stars } from "./Stars";

function CommentsListItem(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        width: Constants.FullWidth,
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderBottomColor: Colors.Black,
        borderBottomWidth: 0.3,
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        position: "relative",
      }}
      onPress={props.onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={props.source}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            alignSelf: "center",
          }}
        />
        <View style={{ marginLeft: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: Constants.FullWidthComponent - 160 }}>
              <TextMedium>{props.Header}</TextMedium>
            </View>
            {props.star >= 0 ? <Stars star={props.star} /> : null}
          </View>
          <View
            style={{
              width: Constants.FullWidthComponent - 65,
            }}
          >
            <TextLight>{props.Message}</TextLight>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CommentsListItem;
