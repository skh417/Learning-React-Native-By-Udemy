import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_ICREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  //   const setColor = (color, change) => {
  //     if (color === "red") {
  //       if (red + change > 255 || red + change < 0) {
  //         return;
  //       } else {
  //         setRed(red + change);
  //       }
  //     }
  //   };

  // 위 if문 사용한 코드를 switch 문으로 바꿀 수 있다.

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_ICREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_ICREMENT)}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_ICREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_ICREMENT)}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_ICREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_ICREMENT)}
        color='Blue'
      />
      <View
        style={{
          height: 150,
          width: 420,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
      <Text
        style={{
          color: `rgb(${red},${green},${blue})`,
          fontSize: 20,
          textAlign: "center",
          textDecorationLine: "underline",
        }}
      >
        Current Color: RGB({`${red}, ${green}, ${blue}`})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    // color: `rgb(${red},${green},${blue})`,
  },
});

export default SquareScreen;
