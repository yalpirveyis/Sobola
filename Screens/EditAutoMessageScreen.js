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
export default function EditAutoMessageScreen() {
  const [MessageHeader, setMessageHeader] = useState("Arabanı Çek");
  const [Message, setMessage] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor…"
  );

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
              <Text style={{ margin: 10, color: "#1A1A1A" }}>
                Mesajı Düzenle
              </Text>

              <TextInput
                onChangeText={setMessageHeader}
                value={MessageHeader}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: "#DEDEDE",
                  width: 250,
                  height: 44,
                  paddingHorizontal: 10,
                }}
                placeholder="Başlık"
              ></TextInput>

              {/* İos keyboar avoiding view çalışmadıpı için 2 farklı varsiyon mevcut*/}
              {Platform.OS === "ios" ? (
                <TextInput
                  onChangeText={setMessage}
                  value={Message}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#DEDEDE",
                    minHeight: 90,
                    width: 250,
                    padding: 10,
                    marginTop: 20,
                  }}
                  placeholder="Message"
                ></TextInput>
              ) : (
                <TextInput
                  onChangeText={setMessage}
                  value={Message}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "#DEDEDE",
                    minHeight: 90,
                    width: 250,
                    padding: 10,
                    marginTop: 20,
                  }}
                  placeholder="Message"
                  multiline={true}
                ></TextInput>
              )}

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
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                >
                  Kaydet
                </Text>
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
