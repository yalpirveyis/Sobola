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
import CommentsListItem from "../assets/components/CommentsListItem";

export default function CommentsScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [Message, setMessage] = useState(
    "Mehtap sokaktaki arabayı çeker misiniz acaba"
  );
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#FFFFFF" }}>
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
        style={{ paddingTop: 10 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <CommentsListItem
          onPress={() => {
            navigation.navigate("AutoMessage");
          }}
          source={require("../assets/userImg/ae.jpg")}
          Header={"Nasip Elmas sa da s asdsadasdsad"}
          Message={Message.slice(0, 35) + "..."}
          star={4}
        />
        <CommentsListItem
          onPress={() => {
            navigation.navigate("AutoMessage");
          }}
          source={require("../assets/userImg/ae1.jpg")}
          Header={"Aykut Elmas"}
          Message={Message.slice(0, 35) + "..."}
          star={0}
        />
        <CommentsListItem
          onPress={() => {
            navigation.navigate("AutoMessage");
          }}
          source={require("../assets/userImg/ae2.jpg")}
          Header={"Babaanne Elmas"}
          Message={Message.slice(0, 35) + "..."}
          star={5}
        />

        {/*List End*/}
      </ScrollView>
    </View>
  );
}
