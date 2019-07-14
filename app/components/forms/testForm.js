import React from "react";
import t from "tcomb-form-native";
import InputCustom from "./template/input";

const Form = t.form.Form;

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: InputCustom,

      config: {
        placeholder: "usuario",
        secureTextEntry: false,
        password: false,
        iconType: "font-awesome",
        iconName: "user",
        size: 20,
        color: "blue"
      }
    },
    password: {
      template: InputCustom,
      config: {
        placeholder: "password",
        secureTextEntry: true,
        password: true,
        iconType: "font-awesome",
        iconName: "lock",
        size: 20,
        color: "blue"
      }
    }
  }
};
