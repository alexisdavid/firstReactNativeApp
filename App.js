import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import t from "tcomb-form-native";
import PreLoader from "./app/components/preLoader";

import { LoginOptions, LoginStruct } from "./app/components/forms/testForm";
const Form = t.form.Form;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        user: "",
        password: ""
      },
      testFormError: "",
      loader: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: true
      });
    }, 3000);
  }
  setFormData = formData => {
    this.setState({ formData });
  };
  sendFormData = () => {
    const validate = this.refs.Form.getValue();

    if (validate) {
      console.log("Accepted");
      this.setState({
        testFormError: ""
      });
    } else {
      console.log("denied");
      this.setState({
        testFormError: "error al iniciar sesion"
      });
    }
  };

  render() {
    const { formData, testFormError, loader } = this.state;

    if (!loader) {
      return <PreLoader />;
    } else {
      return (
        <View style={styles.container}>
          <Form
            ref="Form"
            type={LoginStruct}
            options={LoginOptions}
            value={formData}
            onChange={data => this.setFormData(data)}
          />
          <Button title="login" onPress={this.sendFormData.bind(this)} />
          <Text style={styles.error}>{testFormError}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FBEF",
    // alignItems: "center",
    padding: 40,
    justifyContent: "center"
  },
  text: { color: "#fff", fontSize: 30 },
  button: {
    backgroundColor: "white"
  },
  error: {
    color: "red",
    textAlign: "center",
    fontSize: 30
  }
});
