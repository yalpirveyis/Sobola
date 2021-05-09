import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Carousel from "react-native-snap-carousel";

import { Constants, Colors } from "../assets/components/Constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function StepperScreen({ navigation }) {
  const carouselItems = [
    {
      img: require("../assets/StepperImg/splash1.png"),
    },
    {
      img: require("../assets/StepperImg/splash2.png"),
    },
    {
      img: require("../assets/StepperImg/splash3.png"),
      button: "dolu",
    },
  ];

  function _renderItem({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          borderRadius: 5,
          height: windowHeight,
          position: "relative",
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>

        <Image
          style={{ flex: 1, width: "100%", height: "100%", marginTop: -41 }}
          source={item.img}
        />
        {item.button === "dolu" ? (
          <TouchableOpacity
            style={{
              backgroundColor: "#5A55A1",
              width: Constants.FullButtonWidth,
              height: Constants.FullButtonHeight,
              bottom: 70,
              zIndex: 110,
              position: "absolute",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,

              borderRadius: 28,
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            {/*
            <TextMedium Color={Colors.Green} FontSize={26}>
              TextBold
            </TextMedium>
            */}
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: Constants.FontMedium,
                  color: Colors.White,
                  fontWeight: "500",
                }}
              >
                Haydi Başlayalım
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 24 }}>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout={"default"}
          //ref={(ref) => (carousel = ref)}
          data={carouselItems}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={_renderItem}
          onSnapToItem={(index) => ({ activeIndex: index })}
        />
      </View>
    </SafeAreaView>
  );
}
