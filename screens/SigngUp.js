import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SigngUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SigngUp</Text>
    </SafeAreaView>
  );
};

export default SigngUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
