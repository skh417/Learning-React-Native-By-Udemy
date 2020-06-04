import React, { useState } from "react";
import { View, Button, FlatList, StyleSheet } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title='Add Colors'
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <View
        style={{
          width: 300,
          height: 60,
          backgroundColor: randomRgb(),
        }}
      ></View>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.random() * 256;
  const green = Math.random() * 256;
  const blue = Math.random() * 256;

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
