import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  FlatList,
  ScrollViewBase,
  Animated,
} from "react-native";

import { Colors, Constants } from "../assets/components/Constants";
import { TextMedium, TextLight } from "../assets/components/Text";

import Header from "../assets/components/Header";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    who: 1,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    who: 2,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    who: 1,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d11",
    who: 2,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    who: 1,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d12",
    who: 2,
    title:
      "Lorem ipsum dolor ist amet Lorem ipsum dolor is asdast amet L asdorem ipsasd asdum dolorasdas ist amet Lorem ipsum dolor ist amet  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d78",
    who: 1,
    title: "Lorem ipsum  ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d18",
    who: 2,
    title: "Lorem  ",
  },
];
const Item = ({ title, who }) => (
  <View
    style={{
      backgroundColor: "#F1F6FB",
      padding: 10,
      borderRadius: 15,
      margin: 5,
      maxWidth: 250,
      alignSelf: "flex-start",
    }}
  >
    <TextLight Color="#4C5264">{title}</TextLight>
  </View>
);

const Item2 = ({ title, who }) => (
  <View
    style={{
      backgroundColor: "#5A57A7",
      padding: 10,
      borderRadius: 15,
      margin: 5,
      maxWidth: 250,
      alignSelf: "flex-end",
    }}
  >
    <TextLight Color="#FFFFFF">{title}</TextLight>
  </View>
);
export default function MessageDetailsScreen({ navigation }) {
  const [message, onChangeText] = useState("");
  const [who, setWho] = useState(2);

  const renderItem = ({ item }) => {
    if (item.who == 1) {
      return <Item title={item.title} />;
    } else {
      return <Item2 title={item.title} />;
    }
  };
  useEffect(() => {});
  return (
    <View
      style={{
        flex: 1,
        marginTop: 24,
        position: "relative",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Header back={true} />
      {/*List Start*/}
      {/*List İtem*/}
      <ScrollView style={{ flex: 1, marginBottom: 60 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/userImg/ae2.jpg")}
            style={{
              width: 80,
              height: 80,
              resizeMode: "center",
              borderRadius: 999,
              marginTop: 10,
            }}
          />
          <TextMedium fontSize={18} color="#4C5264">
            Ahmet Taner
          </TextMedium>
        </View>

        <FlatList
          scrollToIndex={7}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          flexDirection: "row",
          alignSelf: "center",
          width: Constants.FullWidthComponent,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#DEDEDE",
            width: Constants.FullWidthComponent - 50,
            height: 44,
            paddingHorizontal: 10,
          }}
          placeholder="Mesajınız"
          onChangeText={(text) => {
            onChangeText(text);
          }}
          value={message}
        ></TextInput>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
          }}
          onPress={() => {}}
        >
          <Image
            source={require("../assets/icons/send.png")}
            style={{
              width: 40,
              height: 40,
              resizeMode: "center",
              borderRadius: 999,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
