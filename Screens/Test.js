import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Test() {
  const [value, setValue] = useState(null);
  const [storeValue, setStoreValue] = useState(null);

  const [error, setError] = React.useState(null);
  function runWithCatch(block) {
    return async () => {
      try {
        setError(null);
        await block();
      } catch (e) {
        setError("Caught: " + e.message || e);
        console.log(error);
      }
    };
  }
  async function saveValue() {
    await AsyncStorage.setItem("token", value);

    console.log("save");
  }
  async function readValue() {
    const token = await AsyncStorage.getItem("token");
    setStoreValue(token);
    console.log(storeValue);
  }
  useEffect(() => {
    readValue();
  }, [readValue]);
  return (
    <View style={styles.container}>
      <Text>store:{storeValue}</Text>
      <Text>val:{value}</Text>
      <TextInput
        style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
        onChangeText={setValue}
        value={value}
        placeholder="useless placeholder"
      />

      <Button title="Read" onPress={runWithCatch(readValue)} />
      <Button title="Save" onPress={runWithCatch(saveValue)} />

      <StatusBar style="auto" />
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
});
