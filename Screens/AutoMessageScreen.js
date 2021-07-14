import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  Animated,
  Modal,
  View,
  Alert,
} from "react-native";
import Tabbar from "../assets/components/Tabbar";
import Header from "../assets/components/Header";
import AutoMessageListItem from "../assets/components/AutoMessageListItem";
import { Constants, Colors } from "../assets/components/Constants";
import { TextMedium } from "../assets/components/Text";

export default function AutoMessageScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 24,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",

        opacity: Platform.OS === "ios" ? (modalVisible == true ? 0.4 : 1) : 1,
      }}
    >
      {/* Modal Start */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
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
          <TextMedium FontSize={14}>
            Otomatik Mesajı Silmek İstiyor musunuz ?
          </TextMedium>

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
                Sil
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
                Vazgeç
              </TextMedium>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Header Start */}

      {/* Header Start */}
      {/* absolute aniamted tab bar*/}

      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#FFFFFF",
          transform: [{ translateY: translateY }],
          elevation: 4,
          zIndex: 100,
          width: Dimensions.get("window").width,
        }}
      >
        <Tabbar></Tabbar>
      </Animated.View>

      <Header back={true} />

      {/* Header End */}
      {/*List Start*/}
      {/*List İtem*/}
      <ScrollView
        style={{ paddingTop: 10, flex: 1 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <AutoMessageListItem
          Header={"Arabanı Çek"}
          Adress={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor…"
          }
          EditOnPress={() => navigation.navigate("EditAutoMessage")}
          DeleteOnPress={() => setModalVisible(true)}
        />

        <TouchableOpacity
          style={{
            width: Constants.FullWidthComponent,
            height: 50,
            backgroundColor: "#5A55A1",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 15,
          }}
          onPress={() => navigation.navigate("AddAutoMessage")}
        >
          <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
            Adres Ekle
          </Text>
        </TouchableOpacity>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}
