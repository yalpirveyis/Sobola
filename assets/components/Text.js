import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";

import { Constants, Colors } from "./Constants";

function TextBold(props) {
  const [loaded] = useFonts({
    FiraSans_Bold: require("../fonts/FiraSans-Bold.ttf"),
  });

  return (
    <Text
      style={
        loaded
          ? {
              fontFamily: "FiraSans_Bold",
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
          : {
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
      }
    >
      {props.children}
    </Text>
  );
}

function TextMedium(props) {
  const [loaded] = useFonts({
    FiraSans_Medium: require("../fonts/FiraSans-Medium.ttf"),
  });

  return (
    <Text
      style={
        loaded
          ? {
              fontFamily: "FiraSans_Medium",
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
          : {
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
      }
    >
      {props.children}
    </Text>
  );
}

function TextSemiBold(props) {
  const [loaded] = useFonts({
    FiraSans_SemiBold: require("../fonts/FiraSans-SemiBold.ttf"),
  });

  return (
    <Text
      style={
        loaded
          ? {
              fontFamily: "FiraSans_SemiBold",
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
          : {
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
      }
    >
      {props.children}
    </Text>
  );
}

function TextLight(props) {
  const [loaded] = useFonts({
    FiraSans_Light: require("../fonts/FiraSans-Light.ttf"),
  });

  return (
    <Text
      style={
        loaded
          ? {
              fontFamily: "FiraSans_Light",
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
          : {
              color: props.Color ? props.Color : Colors.Black,
              fontSize: props.FontSize ? props.FontSize : Constants.FontMedium,
            }
      }
    >
      {props.children}
    </Text>
  );
}
export { TextBold, TextSemiBold, TextMedium, TextLight };
/*
Using Component
 <TextBold Color={Colors.Green} FontSize={26}>
        TextBold
      </TextBold>
 <TextMedium Color={Colors.Green} FontSize={26}>
        TextBold
      </TextMedium>
 <TextSemiBold Color={Colors.Green} FontSize={26}>
        TextBold
      </TextSemiBold>
 <TextLight Color={Colors.Green} FontSize={26}>
        TextBold
      </TextLight>
*/
