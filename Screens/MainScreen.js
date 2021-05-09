import React, { useState } from "react";

import {
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from "react-native";

import AppLoading from "expo-app-loading";

import { AnimatedCircularProgress } from "react-native-circular-progress";

import MapView from "react-native-maps";
import Tabbar from "../assets/components/Tabbar";
import Header from "../assets/components/Header";
import { TextMedium, TextBold, TextLight } from "../assets/components/Text";
import { Center } from "../assets/components/Center";
import { Story } from "../assets/components/Story";
import { Constants, Colors, ContentTr } from "../assets/components/Constants";

export default function MainScreen({ navigation }) {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 5);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 0],
    outputRange: [0, 100],
  });

  const [map, setMap] = useState(0);

  const callsData = [
    {
      date: "04.10.2021",
      time: "21:12:22",
      plate: "06 BM 4210",
    },
    {
      date: "08.10.2021",
      time: "00:00:22",
      plate: "42 CYZ 054",
    },
    {
      date: "11.11.2011",
      time: "11:11:11",
      plate: "11 CYZ 111",
    },
  ];

  const [calls, setCalls] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 24 }}>
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

      <Header></Header>

      {/* Header End */}

      {/*All Page Start */}
      <ScrollView
        style={{
          width: Constants.FullWidth,
        }}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        {/* Story Start */}
        <ScrollView
          style={{
            flexDirection: "row",
            marginVertical: 20,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Story
            source={require("../assets/icons/story.png")}
            onPress={() => Alert.alert("Simple Button pressed")}
          ></Story>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: Constants.FullWidth,
            justifyContent: "center",
          }}
        >
          <View style={{ width: Constants.HalfWidthComponent }}>
            <TextMedium Color={Colors.Yellow} FontSize={13}>
              {ContentTr.Hello}
            </TextMedium>

            <TextBold Color={Colors.Purple} FontSize={32}>
              Taha Gür
            </TextBold>
            <TextBold Color={Colors.Yellow} FontSize={18}>
              06 BM 4210
            </TextBold>
            <Image
              source={require("../assets/icons/car.png")}
              style={{
                width: 242,
                height: 112,
                alignSelf: "center",
                marginTop: 60,
                transform: [{ rotateZ: "-30deg" }],
                marginLeft: -75,
              }}
            />
          </View>

          <View
            style={{
              width: Constants.HalfWidthComponent,
              marginLeft: 5,
            }}
          >
            <View
              style={{
                alignSelf: "center",
                shadowColor: "#000",

                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                width: 152,
                height: 232,
                padding: 1,
                borderRadius: 20,
                elevation: 5,
              }}
            >
              {map == 0 ? (
                <TouchableHighlight
                  style={{
                    width: 150,
                    height: 230,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                  onPress={() => navigation.navigate(Map)}
                >
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
                      onPress={() => {}}
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
                </TouchableHighlight>
              ) : (
                <TouchableHighlight
                  style={{
                    width: 150,
                    height: 230,
                    borderRadius: 20,
                    overflow: "hidden",
                    justifyContent: "center",
                    paddingHorizontal: 40,
                    backgroundColor: Colors.Yellow,
                  }}
                  onPress={() => navigation.navigate(Map)}
                >
                  <View>
                    <TextMedium Color={Colors.Red} FontSize={18}>
                      sisteme kayıtlı {map}. araç yok
                    </TextMedium>
                    <TextMedium Color={Colors.Black} FontSize={12}>
                      Not:Haritayı açmak için dokun
                    </TextMedium>
                  </View>
                </TouchableHighlight>
              )}
            </View>
            <View
              style={{
                alignSelf: "center",
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              {map <= 0 ? (
                <View
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: "center",
                    marginRight: 10,
                  }}
                >
                  <Image
                    source={require("../assets/icons/arrowl.png")}
                    style={{
                      width: 40,
                      height: 40,
                      opacity: 0.5,
                    }}
                  />
                </View>
              ) : (
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    alignSelf: "center",
                    marginRight: 10,
                  }}
                  onPress={() => setMap(map - 1)}
                >
                  <Image
                    source={require("../assets/icons/arrowl.png")}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  alignSelf: "center",
                  marginleft: 10,
                }}
                onPress={() => setMap(map + 1)}
              >
                <Image
                  source={require("../assets/icons/arrowr.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              marginBottom: 30,
              marginTop: 30,
            }}
          >
            <TextBold Color={Colors.Purple} FontSize={24}>
              {ContentTr.CallsHeaders}
            </TextBold>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: Constants.FullWidth,
            }}
          >
            {calls <= 0 ? (
              <Image
                source={require("../assets/icons/arrowl.png")}
                style={{
                  width: 40,
                  height: 40,
                  opacity: 0.5,
                }}
              />
            ) : (
              <TouchableOpacity onPress={() => setCalls(calls - 1)}>
                <Image
                  source={require("../assets/icons/arrowl.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            )}
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                padding: 5,
                borderColor: "#DEDEDE",
                backgroundColor: "#FFFFFF",
                width: 219,
                height: 169,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../assets/icons/call.png")}
                style={{
                  width: 52,
                  height: 52,
                  alignSelf: "center",
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <TextMedium Color={Colors.Purple} FontSize={14}>
                  {callsData[calls].date} - {callsData[calls].time}
                </TextMedium>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <TextMedium Color={Colors.Yellow} FontSize={16}>
                  {callsData[calls].plate}
                </TextMedium>
              </View>
              <Image
                source={require("../assets/icons/car.png")}
                style={{
                  position: "absolute",
                  width: 95,
                  height: 44,
                  alignSelf: "center",
                  marginTop: 60,
                  transform: [{ rotateZ: "-45deg" }],
                  bottom: -15,
                  right: 0,
                }}
              />
            </View>
            {calls < callsData.length - 1 ? (
              <TouchableOpacity onPress={() => setCalls(calls + 1)}>
                <Image
                  source={require("../assets/icons/arrowr.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <Image
                source={require("../assets/icons/arrowr.png")}
                style={{
                  width: 40,
                  height: 40,
                  opacity: 0.5,
                }}
              />
            )}
          </View>
        </View>
        <View
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <TextBold Color={Colors.Purple} FontSize={24}>
            {ContentTr.ServiceInformationsHeader}
          </TextBold>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TextLight Color={Colors.Gray} FontSize={14}>
            {ContentTr.MembershipType} :{" "}
          </TextLight>
          <TextBold Color={Colors.Purple} FontSize={14}>
            Aylık
          </TextBold>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            marginTop: 10,
          }}
        >
          <TextLight Color={Colors.Gray} FontSize={14}>
            {ContentTr.RemainingDays} :{" "}
          </TextLight>
          <TextBold Color={Colors.Purple} FontSize={14}>
            21 Gün
          </TextBold>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 30,
            alignItems: "center",
            marginBottom: 50,
            position: "relative",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFA200",
              width: 234,
              height: 56,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextMedium Color={Colors.White} FontSize={18}>
              {ContentTr.ExtendServiceButtonHeader}
            </TextMedium>
          </View>
          <Image
            source={require("../assets/icons/qr.png")}
            style={{
              width: 82,
              height: 82,
              position: "absolute",
              right: 30,
              bottom: 0,
            }}
          />
        </TouchableOpacity>
        <View style={{ height: 35 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: 150,
    height: 230,
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
