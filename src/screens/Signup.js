import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignupForm from "../components/SignupForm";

class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Signup</Text>
        <View>
          <SignupForm />
          <Button title="Login" color="#0000FF" />
          <Button title="Home" color="#008000" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default Signup;
