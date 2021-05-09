import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Header from "../assets/components/Header";
export default function MakeCallScreen({ route, navigation }) {
  const [selectedValue, setSelectedValue] = useState("Araç Seç");
  const [selectedValue2, setSelectedValue2] = useState("Mesaj Seç");
  const { data, type } = route.params;
  return (
    <View style={styles.container}>
      <Header back={true} />

      <View style={styles.modalView}>
        <Text>data {JSON.stringify(data)}</Text>
        <Text>type: {JSON.stringify(type)}</Text>
        <Text style={{ margin: 30, color: "#1A1A1A" }}>
          Araç Sahibi Ali K***T
        </Text>
        <View
          style={{
            height: 44,
            width: 250,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Picker
            style={{ color: "#1A1A1A" }}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Araç Seç" value="0" />
            <Picker.Item label="Toyota" value="1" />
            <Picker.Item label="Mercedes" value="2" />
          </Picker>
        </View>
        <View
          style={{
            height: 44,
            width: 250,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Picker
            style={{ color: "#1A1A1A" }}
            selectedValue={selectedValue2}
            onValueChange={(itemValue2, itemIndex) =>
              setSelectedValue2(itemValue2)
            }
          >
            <Picker.Item label="Mesaj Seç" value="0" />
            <Picker.Item label="Kayıtlı Mesaj 1" value="1" />
            <Picker.Item label="Kayıtlı Mesaj 2" value="2" />
          </Picker>
        </View>
        <Text style={{ marginBottom: 20 }}>veya</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: 250,
            height: 100,
            paddingHorizontal: 10,
          }}
          multiline
          numberOfLines={4}
          placeholder="Mesajını Yaz"
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
            Gönder
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
