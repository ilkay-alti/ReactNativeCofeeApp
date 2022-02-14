import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignIn</Text>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
