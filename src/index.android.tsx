import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import HelloWorld from "./components/HelloWorld/index";

export default function Rengage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Rengage android
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.TextStyle,

  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.TextStyle,

  helloworld: {
    marginVertical: 15,
  } as React.ViewStyle,
});
