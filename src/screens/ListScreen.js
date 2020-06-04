import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Jerry" },
    { name: "Kellie" },
    { name: "Johnson" },
    { name: "Baker" },
    { name: "Arron" },
    { name: "Cheolsoo" },
    { name: "Ashley" },
    { name: "Fisher" },
    { name: "Kellog" },
  ];

  return (
    <View>
      <Text>this is ListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
