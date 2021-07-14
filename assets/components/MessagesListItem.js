import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium, TextLight } from "./Text";
import { Stars } from "./Stars";

function MessagesListItem(props) {
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
        borderBottomColor: Colors.Gray,
        borderBottomWidth: 0.25,
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
              <TextMedium FontSize={16}>{props.Header}</TextMedium>
            </View>
            <TextLight FontSize={12}>{props.Time}</TextLight>
          </View>
          <View
            style={{
              width: Constants.FullWidthComponent - 65,
              flexDirection: "row",

              justifyContent: "space-between",
              paddingRight: 20,
            }}
          >
            <TextLight>{props.Message}</TextLight>
            {props.Notification == true && (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 15,
                  marginTop: 5,
                  backgroundColor: "#6607F6",
                }}
              />
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MessagesListItem;
