import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../assets/components/Header";
import { TextMedium } from "../assets/components/Text";
import { Colors } from "../assets/components/Constants";

import * as Localization from "expo-localization";
import * as Content from "../assets/components/Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);

export default function EditInformationScreen({ route }) {
  const [shouldShow, setShouldShow] = useState(false);
  const [password1, onChangeText1] = useState("");
  const [password2, onChangeText2] = useState("");
  return (
    <View style={styles.container}>
      <Header back={true} />

      <View style={styles.modalView}>
        <View style={{ margin: 30 }}>
          <TextMedium Color={Colors.Black} FontSize={14}>
            {Content[LanguageSlice]?.EditPassword_EditPassword}
          </TextMedium>
        </View>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 44,
            paddingHorizontal: 10,
          }}
          placeholder={Content[LanguageSlice]?.EditPassword_EditPassword}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 44,
            paddingHorizontal: 10,
            marginTop: 20,
          }}
          secureTextEntry={true}
          placeholder={Content[LanguageSlice]?.EditPassword_EditPassword}
          onChangeText={(text) => {
            onChangeText1(text);
            if (password1 == password2) {
              console.log("true");
              setShouldShow(true);
            } else {
              console.log("false");
              setShouldShow(false);
            }
          }}
          value={password1}
        ></TextInput>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 44,
            paddingHorizontal: 10,
            marginTop: 20,
          }}
          secureTextEntry={true}
          placeholder={Content[LanguageSlice]?.EditPassword_NewPasswordAgain}
          onChangeText={(text) => {
            onChangeText2(text);
            if (password1 == password2) {
              console.log("true");
              setShouldShow(true);
            } else {
              console.log("false");
              setShouldShow(false);
            }
          }}
          value={password2}
        ></TextInput>

        {shouldShow == true ? (
          <View
            style={{
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              width: 250,
              height: 44,
              borderRadius: 10,
              hidden: true,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              ??ifreler Farkl??
            </Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={{
            width: 250,
            height: 40,
            backgroundColor: "#5A55A1",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
          onPress={() => {}}
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Kaydet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    paddingTop: 24,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
