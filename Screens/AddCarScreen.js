import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../assets/components/Header";
export default function AddCarScreen() {
  return (
    <View style={styles.container}>
      <Header back={true} />

      <View style={styles.modalView}>
        <Text style={{ margin: 30, color: "#1A1A1A" }}>Yeni Araç Ekle</Text>

        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 44,
            paddingHorizontal: 10,
          }}
          placeholder="Plaka"
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
          placeholder="Sobola Id"
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
