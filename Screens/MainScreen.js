import React, { useState, useEffect } from "react";

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

import { Constants, Colors } from "../assets/components/Constants";

import * as Location from "expo-location";

import * as Localization from "expo-localization";
import * as Content from "../assets/components/Content.json";
var LanguageSlice = Localization.locale.slice(0, 2);

export default function MainScreen({ navigation }) {
  const [Longitude, setLongitude] = useState(0);
  const [Latitude, setLatitude] = useState(0);
  const [MapLongitude, setMapLongitude] = useState(0);
  const [MapLatitude, setMapLatitude] = useState(0);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [LocationUpdated, setLocationUpdated] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(Number(JSON.stringify(location.coords.latitude)));
      setLongitude(Number(JSON.stringify(location.coords.longitude)));
    })();
  }, []);

  let text = "";
  if (errorMsg) {
    text = errorMsg;
  }
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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 24,
        backgroundColor: "white",
      }}
    >
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
            source={require("../assets/icons/story3.jpg")}
            onPress={() => Alert.alert("story3")}
          />

          <Story
            source={require("../assets/icons/story1.jpg")}
            onPress={() => Alert.alert("story1")}
          />
          <Story
            source={require("../assets/icons/story2.jpg")}
            onPress={() => Alert.alert("story2")}
          />
          <Story
            source={require("../assets/icons/story0.jpg")}
            onPress={() => Alert.alert("story0")}
          />
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
              {Content[LanguageSlice]?.Main_Hello}
            </TextMedium>

            <TextBold Color={Colors.Purple} FontSize={32}>
              Aykut Elma
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
                    region={{
                      latitude: MapLatitude,
                      longitude: MapLongitude,
                      latitudeDelta: 0.001,
                      longitudeDelta: 0.001,
                    }}
                  >
                    <MapView.Marker
                      coordinate={{
                        latitude: Latitude,
                        longitude: Longitude,
                      }}
                      onPress={() => {}}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",

                          width: 26,
                          height: 30,
                        }}
                      >
                        <Image
                          source={require("../assets/icons/pin.png")}
                          style={{
                            width: "100%",
                            height: "100%",
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
          {LocationUpdated == false ? (
            <View
              style={{
                flexDirection: "row",
                marginTop: 40,
                width: Constants.FullWidthComponent - 50,
                justifyContent: "center",
              }}
            >
              <TextLight Color={Colors.Red} FontSize={12} TextAlignCenter>
                {Content[LanguageSlice]?.Main_LocationNote}
              </TextLight>
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                marginTop: 40,
                width: Constants.FullWidthComponent - 50,
                justifyContent: "center",
              }}
            >
              <TextLight Color={Colors.Green} FontSize={12} TextAlignCenter>
                {Content[LanguageSlice]?.Main_LocationUpdated}
              </TextLight>
            </View>
          )}
          {Longitude == 0 || Latitude == 0 ? (
            <View
              style={{
                marginTop: 15,
                paddingVertical: 10,
                backgroundColor: Colors.Gray,
                width: Constants.FullWidthComponent - 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
            >
              <TextBold Color={Colors.White} FontSize={24}>
                {Content[LanguageSlice]?.Main_UpdateCarLocation}
              </TextBold>
            </View>
          ) : (
            <TouchableOpacity
              style={{
                marginTop: 15,
                paddingVertical: 10,
                backgroundColor: Colors.Yellow,
                width: Constants.FullWidthComponent - 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 40,
              }}
              onPress={() => {
                setLocationUpdated(true);
                setMapLongitude(Longitude);
                setMapLatitude(Latitude);
              }}
            >
              <TextBold Color={Colors.White} FontSize={24}>
                {Content[LanguageSlice]?.Main_UpdateCarLocation}
              </TextBold>
            </TouchableOpacity>
          )}

          {Longitude != 0 && Latitude != 0 && (
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TextLight Color={Colors.Gray} FontSize={10}>
                {Content[LanguageSlice]?.Main_Longitude} :{Longitude}
              </TextLight>
              <View style={{ width: 20 }} />
              <TextLight Color={Colors.Gray} FontSize={10}>
                {Content[LanguageSlice]?.Main_Latitude} :{Latitude}
              </TextLight>
            </View>
          )}
          <View
            style={{
              alignSelf: "center",
              marginBottom: 30,
              marginTop: 15,
            }}
          >
            <TextBold Color={Colors.Purple} FontSize={24}>
              {Content[LanguageSlice]?.Main_Calls}
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
            <TouchableOpacity
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
              onPress={() => navigation.navigate("IncomingCall")}
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
            </TouchableOpacity>
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
            {Content[LanguageSlice]?.Main_ServiceInfo}
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
            {Content[LanguageSlice]?.Main_SubscriptionType} :{" "}
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
            {Content[LanguageSlice]?.Main_ExpireDate} :{" "}
          </TextLight>
          <TextBold Color={Colors.Purple} FontSize={14}>
            21 Gün
          </TextBold>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Payment")}
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
              {Content[LanguageSlice]?.Main_ExtendService}
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
