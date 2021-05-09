import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium } from "./Text";

function Tabbar() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: Constants.TabbarHeight,
        width: Constants.TabbarWidth,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../icons/menuLocation.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {ContentTr.TabbarFirstButtonFirstRow}
          </TextMedium>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {ContentTr.TabbarFirstButtonSecondRow}
          </TextMedium>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../icons/menuMessage.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {ContentTr.TabbarSecondButtonFirstRow}
          </TextMedium>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {ContentTr.TabbarSecondButtonSecondRow}
          </TextMedium>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../icons/menuSetting.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {ContentTr.TabbarThirdButtonRow}
          </TextMedium>
        </View>
      </TouchableOpacity>
    </View>
  );
}

/*
Using Component
 <Tabbar></Tabbar>
*/

export default Tabbar;
