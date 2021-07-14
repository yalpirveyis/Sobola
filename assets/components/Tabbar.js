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

import * as Localization from "expo-localization";
import * as Content from "./Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);

function Tabbar() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: Constants.TabbarHeight,
        width: Constants.TabbarWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          source={require("../icons/menuLocation.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10, maxWidth: 60 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {Content[LanguageSlice]?.Tabbar_First}
          </TextMedium>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Qr")}
      >
        <Image
          source={require("../icons/menuMessage.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10, maxWidth: 50 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            {Content[LanguageSlice]?.Tabbar_Second}
          </TextMedium>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => navigation.navigate("Settings")}
      >
        <Image
          source={require("../icons/menuSetting.png")}
          style={{
            maxWidth: Constants.TabbarIconWidth,
            maxHeight: Constants.TabbarIconWidth,
            resizeMode: "center",
          }}
        />
        <View style={{ marginLeft: 10, maxWidth: 60 }}>
          <TextMedium Color={Colors.Black} FontSize={13}>
            Settins
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
