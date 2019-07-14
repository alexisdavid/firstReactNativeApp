import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default (inputTemplate = locals => {
  return (
    <View style={styles.view}>
      <Input
        placeholder={locals.config.placeholder}
        password={locals.config.pasword}
        secureTextEntry={locals.config.password}
        leftIcon={{
          type: locals.config.iconType,
          name: locals.config.iconName,
          color: locals.config.color,
          size: locals.config.size
        }}
        leftIconContainerStyle={styles.icon}
        onChangeText={data => locals.onChange(data)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  view: {
    marginBottom: 40
  },
  icon: {
    paddingRight: 30
  }
});
