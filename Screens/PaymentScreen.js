import React, { useState } from "react";
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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../assets/components/Header";
import { TextMedium, TextBold } from "../assets/components/Text";
import { Colors } from "../assets/components/Constants";
//import { Colors, Constants, ContentTr } from "../assets/components/Constants";
function PaymentScreen() {
  const [NameSurname, setNameSurname] = useState("Adınız Soyadınız");
  const [CardNumber, setCardNumber] = useState("1111222233334444");
  const [Year, setYear] = useState("20");
  const [Month, setMonth] = useState("01");
  return (
    <View style={{ flex: 1, marginTop: 24 }}>
      {/* Header Start */}

      <Header back={true} />
      {/* Header End */}

      {/* Credit Card Start */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{ flexGrow: 1 }}>
            <ImageBackground
              source={require("../assets/backgroundImage/creditCard.png")}
              imageStyle={{ borderRadius: 15 }}
              style={{
                width: 285,
                height: 184,
                marginTop: 20,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  flexDrection: "row",
                  position: "relative",
                  height: 50,
                }}
              >
                <Text
                  style={{
                    position: "absolute",
                    left: 20,
                    marginTop: 10,
                    color: "#D6D6D6",
                    fontSize: 16,
                  }}
                >
                  Credit Card
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    marginTop: 10,
                    color: "#D6D6D6",
                    fontSize: 16,
                  }}
                >
                  Bank Name
                </Text>
              </View>
              <Image
                source={require("../assets/icons/chip.png")}
                imageStyle={{ borderRadius: 15 }}
                style={{
                  width: 38,
                  height: 30,
                  marginLeft: 20,
                }}
              />
              <View
                style={{
                  justifyContent: "space-around",
                  flexDirection: "row",
                  marginTop: 15,
                  paddingHorizontal: 5,
                }}
              >
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>
                  {CardNumber.slice(0, 4)}
                </Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>
                  {CardNumber.slice(4, 8)}
                </Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>
                  {CardNumber.slice(8, 12)}
                </Text>
                <Text style={{ color: "#D6D6D6", fontSize: 18 }}>
                  {CardNumber.slice(12, 16)}
                </Text>
              </View>
              <View
                style={{
                  height: 15,
                  flexDirection: "row-reverse",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>{Month}</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>/</Text>
                <Text style={{ color: "#D6D6D6", fontSize: 14 }}>{Year}</Text>
                <View style={{ marginHorizontal: 10 }}>
                  <Text style={{ color: "#D6D6D6", fontSize: 6 }}>VALID</Text>
                  <Text style={{ color: "#D6D6D6", fontSize: 6 }}>THRU</Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#D6D6D6",
                  marginLeft: 20,
                }}
              >
                {NameSurname}
              </Text>
            </ImageBackground>
            {/* Credit Card End */}
            {/* İnput Start */}

            <View style={{ padding: 40 }}>
              <TextMedium FontSize={14}>Adınız Soyadınız</TextMedium>
              <TextInput
                maxLength={40}
                onChangeText={setNameSurname}
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#5A55A1",
                  fontSize: 18,
                  color: "#0D1724",
                  fontWeight: "bold",
                }}
              ></TextInput>
              <View style={{ marginTop: 20 }}>
                <TextMedium FontSize={14}> Kart Numaranız </TextMedium>
              </View>
              <TextInput
                maxLength={16}
                keyboardType={"phone-pad"}
                onChangeText={setCardNumber}
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#5A55A1",
                  fontSize: 18,
                  color: "#0D1724",
                  fontWeight: "bold",
                }}
              ></TextInput>
            </View>
            <View
              style={{
                paddingHorizontal: 40,
                flexDirection: "row",
                marginTop: -20,
              }}
            >
              <View style={{ width: 50 }}>
                <TextMedium FontSize={14}> Ay </TextMedium>
                <TextInput
                  maxLength={2}
                  onChangeText={setMonth}
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                  }}
                ></TextInput>
              </View>

              <View style={{ width: 50, marginLeft: 10 }}>
                <TextMedium FontSize={14}> Yıl </TextMedium>
                <TextInput
                  maxLength={2}
                  onChangeText={setYear}
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                  }}
                ></TextInput>
              </View>
              <View style={{ width: 70, marginLeft: 95 }}>
                <TextMedium FontSize={14}> CVV </TextMedium>
                <TextInput
                  keyboardType={"phone-pad"}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                    marginBottom: 30,
                  }}
                ></TextInput>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#5A55A1",
                borderRadius: 10,
                width: 300,
                alignSelf: "center",
                height: 55,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => null}
            >
              <TextBold Color={Colors.White} FontSize={18}>
                Ödeme Yap
              </TextBold>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* İnput End */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});

export default PaymentScreen;
