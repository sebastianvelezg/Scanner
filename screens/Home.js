import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Scanner from "./Scanner";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Scanner")}
        className={"border p-4 border-blue-700 rounded bg-blue-700"}
      >
        <Text className="color-white text-center font-extrabold">Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgrowndColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
