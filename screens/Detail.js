import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Detail</Text>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
