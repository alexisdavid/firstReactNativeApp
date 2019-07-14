import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default class PreLoader extends Component {
  render() {
    return (
      <View style={styles.PreLoaderView}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PreLoaderView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009929"
  }
});
