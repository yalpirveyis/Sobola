import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { Colors, Constants } from "../assets/components/Constants";
import { TextMedium } from "../assets/components/Text";

import * as Localization from "expo-localization";
import * as Content from "../assets/components/Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);
import Header from "../assets/components/Header";
export default function EditCarScreen({ route }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        opacity: Platform.OS === "ios" ? (modalVisible == true ? 0.4 : 1) : 1,
        paddingTop: 24,
      }}
    >
      {/* Modal Start */}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            zIndex: 30,
            width:
              Constants.FullWidthComponent - Constants.HalfWidthComponent / 2,

            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: Constants.FullHeight / 2 - 100,
            backgroundColor: "white",
            borderRadius: 20,

            padding: 20,

            alignItems: "center",
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
          <TextMedium FontSize={14}>Adresi Silmek İstiyor musunuz ?</TextMedium>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.Red,
                height: 40,
                borderRadius: 10,
                width: 65,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(false)}
            >
              <TextMedium Color={Colors.White} FontSize={14}>
                {Content[LanguageSlice]?.Delete}
              </TextMedium>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.Green,
                height: 40,
                borderRadius: 10,
                width: 65,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
              onPress={() => setModalVisible(false)}
            >
              <TextMedium Color={Colors.White} FontSize={14}>
                {Content[LanguageSlice]?.Cancel}
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header back={true} />

      <View style={styles.modalView}>
        <View style={{ margin: 30 }}>
          <TextMedium Color={Colors.Black} FontSize={14}>
            {Content[LanguageSlice]?.EditCar_EditCarInformation}
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
          placeholder={Content[LanguageSlice]?.EditCar_Plate}
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
          placeholder={Content[LanguageSlice]?.EditCar_SobolaId}
        ></TextInput>

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
            {Content[LanguageSlice]?.Save}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 250,
            height: 40,
            backgroundColor: Colors.Red,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            {Content[LanguageSlice]?.Delete}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
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
