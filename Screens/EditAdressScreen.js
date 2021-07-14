import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../assets/components/Header";

import * as Location from "expo-location";
import { TextMedium, TextBold } from "../assets/components/Text";

import { Constants, Colors } from "../assets/components/Constants";

import * as Localization from "expo-localization";
import * as Content from "../assets/components/Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);
export default function EditAdressScreen() {
  const [AdressHeader, setAdressHeader] = useState("Ev Adresi");
  const [Longitude, setLongitude] = useState(0);
  const [Latitude, setLatitude] = useState(0);

  const [Adress, setAdress] = useState(
    "Şair Mehmet Emin Caddesi 11/10 Keçiören (Kavacık Subayevleri Mah.)"
  );

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(JSON.stringify(location.coords.latitude));
      setLongitude(JSON.stringify(location.coords.longitude));
    })();
  }, []);

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  }
  return (
    <View style={styles.container}>
      <Header back={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.modalView}>
              <View style={{ margin: 10 }}>
                <TextMedium Color={Colors.Black} FontSize={13}>
                  {Content[LanguageSlice]?.EditAdress_EditAdress}
                </TextMedium>
              </View>

              {Longitude == 0 ? (
                <View style={{ margin: 10 }}>
                  <TextMedium Color={Colors.Red} FontSize={13} TextAlignCenter>
                    {Content[LanguageSlice]?.AddAdress_WaitingLocation}
                  </TextMedium>
                </View>
              ) : (
                <View style={{ margin: 10 }}>
                  <TextMedium
                    Color={Colors.Green}
                    FontSize={13}
                    TextAlignCenter
                  >
                    {Content[LanguageSlice]?.AddAdress_Locationtaken}
                  </TextMedium>
                </View>
              )}

              <TextInput
                onChangeText={setAdressHeader}
                value={AdressHeader}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#DEDEDE",
                  width: 250,
                  height: 44,
                  paddingHorizontal: 10,
                }}
                placeholder={Content[LanguageSlice]?.AddAdress_Input_Header}
              ></TextInput>
              <TextInput
                onChangeText={setLatitude}
                keyboardType={"phone-pad"}
                value={Latitude}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#DEDEDE",
                  width: 250,
                  height: 44,
                  paddingHorizontal: 10,
                  marginTop: 20,
                }}
                placeholder={Content[LanguageSlice]?.AddAdress_Input_Latitude}
              ></TextInput>
              <TextInput
                keyboardType={"phone-pad"}
                onChangeText={setLongitude}
                value={Longitude}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#DEDEDE",
                  width: 250,
                  height: 44,
                  paddingHorizontal: 10,
                  marginTop: 20,
                }}
                placeholder={Content[LanguageSlice]?.AddAdress_Input_Longitude}
              ></TextInput>
              <TextInput
                onChangeText={setAdress}
                value={Adress}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#DEDEDE",
                  minHeight: 90,
                  width: 250,
                  padding: 10,
                  marginTop: 20,
                }}
                placeholder={Content[LanguageSlice]?.AddAdress_Input_Adress}
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
                <TextBold Color={Colors.White} FontSize={18} TextAlignCenter>
                  {Content[LanguageSlice]?.Save}
                </TextBold>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
