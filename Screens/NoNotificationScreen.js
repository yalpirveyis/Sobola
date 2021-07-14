import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../assets/components/Header";
import { Colors, Constants } from "../assets/components/Constants";
import { TextMedium, TextBold } from "../assets/components/Text";

import * as Localization from "expo-localization";
import * as Content from "../assets/components/Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);
export default function NoNotificationScreen() {
  const [MessageHeader, setMessageHeader] = useState("Arabanı Çek");
  const [Message, setMessage] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor…"
  );
  const [NoNotification, setNoNotification] = useState(true);
  const [GoodPlace, setGoodPlace] = useState(true);
  const [StartHour, setStartHour] = useState("00");
  const [StartMinute, setStartMinute] = useState("00");
  const [EndHour, setEndHour] = useState("00");
  const [EndMinute, setEndMinute] = useState("00");

  return (
    <View style={styles.container}>
      <Header back={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.modalView}>
              {/* first item start */}
              <View
                style={{
                  width: Constants.FullWidthComponent - 60,
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 20,
                }}
              >
                <View
                  style={{
                    width: Constants.FullWidthComponent - 100,

                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextMedium FontSize={14} TextAlignCenter>
                    {Content[LanguageSlice]?.NoNotification_1Hour}
                  </TextMedium>
                </View>
                {NoNotification == false ? (
                  <View
                    style={{
                      position: "relative",
                      marginLeft: 10,
                      width: 40,
                      height: 28,
                    }}
                  >
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setNoNotification(true);
                        }}
                      >
                        <View
                          style={{
                            width: 23,
                            height: 23,
                            borderRadius: 23,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 6,
                            borderColor: Colors.Purple,
                          }}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 15,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Colors.Purple,
                        position: "absolute",
                        right: 0,
                        top: 7,
                        zIndex: -1,
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      position: "relative",
                      marginLeft: 10,
                      width: 40,
                      height: 28,
                    }}
                  >
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setNoNotification(false);
                        }}
                      >
                        <View
                          style={{
                            width: 23,
                            height: 23,
                            borderRadius: 23,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 6,
                            borderColor: Colors.Gray,
                          }}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 15,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Colors.Gray,
                        position: "absolute",
                        right: 0,
                        top: 7,
                        zIndex: -1,
                      }}
                    ></View>
                  </View>
                )}
              </View>
              {/* first item end */}
              {/* second item start */}
              <View
                style={{
                  width: Constants.FullWidthComponent - 60,
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    width: Constants.FullWidthComponent - 100,

                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TextMedium FontSize={14} TextAlignCenter>
                    {Content[LanguageSlice]?.NoNotification_GoodPlace}
                  </TextMedium>
                </View>
                {GoodPlace == false ? (
                  <View
                    style={{
                      position: "relative",
                      marginLeft: 10,
                      width: 40,
                      height: 28,
                    }}
                  >
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        position: "absolute",
                        right: 0,
                      }}
                    >
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setGoodPlace(true);
                        }}
                      >
                        <View
                          style={{
                            width: 23,
                            height: 23,
                            borderRadius: 23,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 6,
                            borderColor: Colors.Purple,
                          }}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 15,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Colors.Purple,
                        position: "absolute",
                        right: 0,
                        top: 7,
                        zIndex: -1,
                      }}
                    ></View>
                  </View>
                ) : (
                  <View
                    style={{
                      position: "relative",
                      marginLeft: 10,
                      width: 40,
                      height: 28,
                    }}
                  >
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 28,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        position: "absolute",
                        left: 0,
                      }}
                    >
                      <TouchableWithoutFeedback
                        onPress={() => {
                          setGoodPlace(false);
                        }}
                      >
                        <View
                          style={{
                            width: 23,
                            height: 23,
                            borderRadius: 23,
                            alignItems: "center",
                            justifyContent: "center",
                            borderWidth: 6,
                            borderColor: Colors.Gray,
                          }}
                        />
                      </TouchableWithoutFeedback>
                    </View>
                    <View
                      style={{
                        width: 40,
                        height: 15,
                        borderRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Colors.Gray,
                        position: "absolute",
                        right: 0,
                        top: 7,
                        zIndex: -1,
                      }}
                    ></View>
                  </View>
                )}
              </View>
              {/* second item end */}
              <TouchableOpacity
                style={{
                  width: Constants.FullWidthComponent - 70,
                  height: 40,
                  backgroundColor: Colors.Purple,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
                onPress={() => {}}
              >
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                >
                  Kaydet
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalView}>
              {/* uyarı saat*/}
              {StartHour < 0 ||
              StartHour > 24 ||
              EndHour < 0 ||
              EndHour > 24 ? (
                <View
                  style={{
                    backgroundColor: Colors.Red,
                    padding: 20,
                    borderRadius: 20,

                    margin: 10,
                  }}
                >
                  <TextMedium
                    Color={Colors.White}
                    FontSize={14}
                    TextAlignCenter
                  >
                    {Content[LanguageSlice]?.NoNotification_PleaseTrueHour}
                  </TextMedium>
                </View>
              ) : null}
              {/* uyarı dakika*/}
              {StartMinute < 0 ||
              StartMinute > 59 ||
              EndMinute < 0 ||
              EndMinute > 59 ? (
                <View
                  style={{
                    backgroundColor: Colors.Red,
                    padding: 20,
                    borderRadius: 20,
                    margin: 10,
                  }}
                >
                  <TextMedium
                    Color={Colors.White}
                    FontSize={14}
                    TextAlignCenter
                  >
                    {Content[LanguageSlice]?.NoNotification_PleaseTrueMinute}
                  </TextMedium>
                </View>
              ) : null}
              <TextMedium FontSize={14} TextAlignCenter>
                {Content[LanguageSlice]?.NoNotification_NoDistrubTime}
              </TextMedium>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TextInput
                  maxLength={2}
                  onChangeText={setStartHour}
                  value={StartHour}
                  keyboardType={"phone-pad"}
                  style={{
                    borderWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                    borderRadius: 10,
                    padding: 10,
                    width: 50,
                    margin: 5,
                  }}
                ></TextInput>
                <TextMedium FontSize={22}>:</TextMedium>
                <TextInput
                  maxLength={2}
                  onChangeText={setStartMinute}
                  value={StartMinute}
                  keyboardType={"phone-pad"}
                  style={{
                    borderWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                    borderRadius: 10,
                    padding: 10,
                    margin: 5,
                    width: 50,
                  }}
                ></TextInput>
                <View style={{ width: 20 }} />
                <TextInput
                  maxLength={2}
                  onChangeText={setEndHour}
                  value={EndHour}
                  keyboardType={"phone-pad"}
                  style={{
                    borderWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                    borderRadius: 10,
                    padding: 10,
                    width: 50,
                    margin: 5,
                  }}
                ></TextInput>
                <TextMedium FontSize={22}>:</TextMedium>
                <TextInput
                  maxLength={2}
                  onChangeText={setEndMinute}
                  value={EndMinute}
                  keyboardType={"phone-pad"}
                  style={{
                    borderWidth: 1,
                    borderColor: "#5A55A1",
                    fontSize: 18,
                    color: "#0D1724",
                    fontWeight: "bold",
                    borderRadius: 10,
                    padding: 10,
                    width: 50,
                    margin: 5,
                  }}
                ></TextInput>
              </View>
              {StartHour > 24 ||
              EndHour < 0 ||
              EndHour > 24 ||
              StartMinute < 0 ||
              StartMinute > 59 ||
              EndMinute < 0 ||
              EndMinute > 59 ? (
                <View
                  style={{
                    width: Constants.FullWidthComponent - 70,
                    height: 40,
                    backgroundColor: Colors.Gray,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                >
                  <TextBold Color={Colors.White} FontSize={14} TextAlignCenter>
                    {Content[LanguageSlice]?.NoNotification_PleaseFixError}
                  </TextBold>
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    width: Constants.FullWidthComponent - 70,
                    height: 40,
                    backgroundColor: Colors.Purple,
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 15,
                  }}
                  onPress={() => {}}
                >
                  <TextBold Color={Colors.White} FontSize={18} TextAlignCenter>
                    {Content[LanguageSlice]?.Save}
                  </TextBold>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
    padding: 25,
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
