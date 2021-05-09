import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../assets/components/Header";
export default function EditInformationScreen({ route }) {
  return (
    <View style={styles.container}>
      <Header back={true} />

      <View style={styles.modalView}>
        <Text style={{ margin: 30, color: "#1A1A1A" }}>
          Bilgilierimi Düzenle
        </Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 44,
            paddingHorizontal: 10,
          }}
          placeholder="Ad Soyad"
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
          placeholder="Telefon Numaranız"
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
          placeholder="E Posta Adresiniz"
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
          placeholder="TC Kimlik No"
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
  },
});
