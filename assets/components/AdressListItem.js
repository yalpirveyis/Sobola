import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Constants, Colors, ContentTr } from "./Constants";
import { TextMedium, TextLight, TextBold } from "./Text";

import * as Localization from "expo-localization";
import * as Content from "./Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);

import * as Linking from "expo-linking";
function SettingsListItem(props) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: Constants.FullWidthComponent,
        alignSelf: "center",
        alignContent: "center",
        borderRadius: 20,
        backgroundColor: Colors.White,
        marginBottom: 10,
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View style={{ flexDirection: "row", padding: 20, alignItems: "center" }}>
        <Image
          source={require("../icons/adress.png")}
          style={{
            width: 25,
            height: 25,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <TextBold Color={Colors.Purple} FontSize={14}>
            {props.Header}
          </TextBold>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TextLight Color={Colors.Black} FontSize={14}>
          {props.Adress}
        </TextLight>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Colors.Purple,
            height: 40,
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={props.EditOnPress}
        >
          <TextMedium Color={Colors.White} FontSize={14}>
            {Content[LanguageSlice]?.AdressListItem_Edit}
          </TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: Colors.Purple,
            borderWidth: 0.6,
            backgroundColor: Colors.White,
            height: 40,
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
          }}
          onPress={props.DeleteOnPress}
        >
          <TextMedium Color={Colors.Purple} FontSize={14}>
            {Content[LanguageSlice]?.AdressListItem_Delete}
          </TextMedium>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: Colors.Purple,
            borderWidth: 0.6,
            backgroundColor: Colors.White,
            height: 40,
            borderRadius: 10,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
          }}
          onPress={() => {
            Linking.openURL(
              "https://www.google.com/maps?q=" +
                props.DirectionsLatitude +
                "," +
                props.DirectionsLongitude
            );
          }}
        >
          <TextMedium Color={Colors.Purple} FontSize={14}>
            {Content[LanguageSlice]?.AdressListItem_Directions}
          </TextMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingsListItem;
