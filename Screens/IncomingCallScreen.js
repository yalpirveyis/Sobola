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
} from "react-native";
import Tabbar from "../assets/components/Tabbar";
import Header from "../assets/components/Header";
import { TextBold, TextLight } from "../assets/components/Text";
import { Constants, Colors } from "../assets/components/Constants";
import MessagesListItem from "../assets/components/MessagesListItem";

export default function IncomingCallScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
      <Header back={true} />
      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 60,
        }}
      >
        <View
          style={{
            paddingTop: 10,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flex: 1,
          }}
        >
          <TextBold Color={Colors.Purple} FontSize={22}>
            Gelen Çağrı
          </TextBold>
          <View
            style={{
              backgroundColor: Colors.Purple,
              width: Constants.FullWidthComponent - 110,
              height: Constants.FullWidthComponent / 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <TextBold Color={Colors.White} FontSize={20}>
              06 BM 4210
            </TextBold>
          </View>
          <View style={{ height: 40 }} />
          <TextBold Color={Colors.Purple} FontSize={22}>
            Çağrıyı Yapan
          </TextBold>
          <View
            style={{
              backgroundColor: Colors.White,
              borderColor: Colors.Purple,
              borderWidth: 1,
              width: Constants.FullWidthComponent - 110,
              height: Constants.FullWidthComponent / 5,
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <TextBold Color={Colors.Purple} FontSize={20}>
              06 BM 4210
            </TextBold>
          </View>
          <View style={{ height: 40 }} />
          <TextBold Color={Colors.Purple} FontSize={20}>
            Mesaj:
          </TextBold>
          <View
            style={{
              width: Constants.FullWidthComponent - 100,
              alignSelf: "center",
              paddingTop: 20,
              marginBottom: 80,
            }}
          >
            <TextLight Color={Colors.Purple} FontSize={14}>
              Lorem ipsum dolor sit amet, consectetur adipi consectetur adipi
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labor…
            </TextLight>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
