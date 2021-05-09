import React, { useState } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Linking from "expo-linking";

import { TextMedium, TextBold, TextLight } from "../assets/components/Text";
import { Constants, Colors, ContentTr } from "../assets/components/Constants";
export default function MapScreen({ route, navigation }) {
  //const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/*
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#020B48",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Kapat
              </Text>
            </TouchableOpacity>
            <Image
              source={require("../assets/icons/car.png")}
              style={{ width: 120, height: 50 }}
            />
            <Text style={{ margin: 10 }}>Arabanızın</Text>
            <Text style={{ color: "red" }}>
              Enlem<Text style={{ color: "black" }}>39,2654</Text>
            </Text>
            <Text style={{ color: "red" }}>
              Boylam:<Text style={{ color: "black" }}>28,3514654</Text>
            </Text>

            <Text style={{ marginTop: 10, color: "black" }}>
              Arabanızın konumuna gitmek için yol tarifi alın
            </Text>

            <TouchableOpacity
              style={{
                width: 100,
                height: 40,
                backgroundColor: "#020B48",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
              }}
              onPress={() => {
                Linking.openURL(
                  "https://www.google.com/maps?q=37.8341413,32.4758212&z=17&hl=tr"
                );
              }}
            >
              <Text
                style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
              >
                Yol Tarifi Al
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
     */}
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          left: 10,
          top: 30,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/icons/back.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          right: 20,
          bottom: 30,
          zIndex: 1,
          position: "absolute",
        }}
        onPress={() => navigation.navigate("qr")}
      >
        <Image
          source={require("../assets/icons/qr.png")}
          style={{
            width: 80,
            height: 80,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 150,
          height: 40,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
          left: Constants.FullWidth / 2 - 75,
          top: 30,
          zIndex: 1,
          position: "absolute",
          backgroundColor: Colors.White,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
        onPress={() => {
          Linking.openURL(
            "https://www.google.com/maps?q=37.8341413,32.4758212&z=17&hl=tr"
          );
        }}
      >
        <TextMedium Color={Colors.Purple} FontSize={18}>
          Yol Tarifi Al
        </TextMedium>
      </TouchableOpacity>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 39.9166,
          longitude: 32.8617,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 39.9166,
            longitude: 32.8617,
          }}
          /*
          onPress={() => {
            setModalVisible(true);
          }}
         */
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/pin.png")}
              style={{
                width: 14 * 1.8,
                height: 17.9 * 1.8,
              }}
            />
          </View>
        </MapView.Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
