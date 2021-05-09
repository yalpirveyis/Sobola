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
  Modal,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { TextMedium } from "../assets/components/Text";
import { Center } from "../assets/components/Center";
import { Constants, Colors, ContentTr } from "../assets/components/Constants";

export default function MembershipScreen({ navigation }) {
  var language = "Tr";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <ImageBackground
        source={require("../assets/backgroundImage/login.png")}
        style={{
          flex: 1,
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      ></ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Center>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 100,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/icons/logo.png")}
                  style={{
                    width: 137,
                    height: 72,
                    alignSelf: "center",
                    marginBottom: 20,
                  }}
                />
                <View style={{ alignItems: "center" }}>
                  <TextMedium
                    Color={Colors.Purple}
                    FontSize={Constants.FontMedium}
                  >
                    {language == "Tr" && ContentTr.MembershipSubTitle}
                  </TextMedium>
                </View>
                <View
                  style={{
                    position: "relative",
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      height: Constants.FullInputHeight,
                      width: Constants.FullInputWidth,
                      borderWidth: 1,
                      alignSelf: "center",
                      borderRadius: 30,
                      paddingHorizontal: 20,
                    }}
                    placeholder="Ad Soyad"
                    onChangeText={(text) => setName(text)}
                    value={name}
                  />
                  <Image
                    source={require("../assets/icons/inputUserIcon.png")}
                    style={{
                      width: 16,
                      height: 20,
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    position: "relative",
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      height: Constants.FullInputHeight,
                      width: Constants.FullInputWidth,
                      borderWidth: 1,
                      alignSelf: "center",
                      borderRadius: 30,
                      paddingHorizontal: 20,
                    }}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                  />
                  <Image
                    source={require("../assets/icons/inputEmail.png")}
                    style={{
                      width: 20,
                      height: 16,
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    position: "relative",
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      height: Constants.FullInputHeight,
                      width: Constants.FullInputWidth,
                      borderWidth: 1,
                      alignSelf: "center",
                      borderRadius: 30,
                      paddingHorizontal: 20,
                    }}
                    placeholder="Telefon"
                    onChangeText={(text) => setNumber(text)}
                    value={number}
                  />
                  <Image
                    source={require("../assets/icons/inputCall.png")}
                    style={{
                      width: 24,
                      height: 24,
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    position: "relative",
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      height: Constants.FullInputHeight,
                      width: Constants.FullInputWidth,
                      borderWidth: 1,
                      alignSelf: "center",
                      borderRadius: 30,
                      paddingHorizontal: 20,
                    }}
                    placeholder="Kullanıcı Adı"
                    onChangeText={(text) => setUserName(text)}
                    value={userName}
                  />
                  <Image
                    source={require("../assets/icons/inputUserIcon.png")}
                    style={{
                      width: 16,
                      height: 20,
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    position: "relative",
                    marginTop: 20,
                    flexDirection: "row",
                  }}
                >
                  <TextInput
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#FFFFFF",
                      height: Constants.FullInputHeight,
                      width: Constants.FullInputWidth,
                      borderWidth: 1,
                      alignSelf: "center",
                      borderRadius: 30,
                      paddingHorizontal: 20,
                    }}
                    placeholder="Şifre"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                  />
                  <Image
                    source={require("../assets/icons/inputLockIcon.png")}
                    style={{
                      width: 26,
                      height: 15,
                      alignSelf: "center",
                      position: "absolute",
                      right: 10,
                    }}
                  />
                </View>

                <View
                  style={{
                    width: Constants.FullInputWidth,
                    alignSelf: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <TouchableOpacity
                    //onPress={() => submit()}
                    style={{
                      width: 115,
                      height: 44,

                      backgroundColor: "#5A55A1",
                      borderRadius: 30,
                      justifyContent: "center",

                      marginTop: 20,
                    }}
                  >
                    <View
                      style={{
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ marginRight: 20 }}>
                        <TextMedium
                          Color={Colors.Gray}
                          FontSize={Constants.FontMedium}
                        >
                          {language == "Tr" && ContentTr.MemberButtonTitle}
                        </TextMedium>
                      </View>
                      <Image
                        source={require("../assets/icons/rightArrow.png")}
                        style={{
                          width: 20,
                          height: 20,
                          position: "absolute",
                          right: 10,
                          marginTop: 2,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: 270,
                    alignSelf: "center",
                    marginTop: 25,
                  }}
                >
                  <View style={{ flexDirection: "row", alignSelf: "center" }}>
                    <TextMedium
                      Color={Colors.Gray}
                      FontSize={Constants.FontMedium}
                    >
                      {language == "Tr" && ContentTr.HaveAccounts}
                    </TextMedium>
                    <TouchableOpacity
                      style={{ marginLeft: 5 }}
                      onPress={() => navigation.navigate("Login")}
                    >
                      <TextMedium
                        Color={Colors.Purple}
                        FontSize={Constants.FontMedium}
                      >
                        {language == "Tr" && ContentTr.BeLogin}
                      </TextMedium>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Center>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
