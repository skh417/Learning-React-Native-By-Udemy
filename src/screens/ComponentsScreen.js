import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const greeting = (
    <Text
      style={{ textAlign: "center", fontSize: 25, backgroundColor: "orange" }}
    >
      Hello Korea! 🇰🇷
    </Text>
  );
  const name = "Simple Key";

  return (
    <View>
      <Text style={styles.text}>This is ComponentsScreen!</Text>
      {greeting}
      <Text style={styles.subTitle}>My Name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "orange",
    textAlign: "left",
    backgroundColor: "black",
  },
  subTitle: {
    fontSize: 20,
    color: "orange",
    textAlign: "right",
    backgroundColor: "black",
  },
});

export default ComponentsScreen;
