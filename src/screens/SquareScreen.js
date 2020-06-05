import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_ICREMENT = 15;

//reducer 함수는 일반적으로 컴포넌트 밖에서 만들어준다.
const reducer = (state, action) => {
  // state === {red: number, green: number, blue:number}
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  // action은 state를 어떻게 바꿔줄 것인가 즉, 결과적으로 바뀔 오브젝트를 의미한다.

  switch (action.colorToChange) {
    case "red":
      return { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return;
  }
};
const SquareScreen = () => {
  // (1) useState를 사용하는 경우
  //   const [red, setRed] = useState(0);
  //   const [green, setGreen] = useState(0);
  //   const [blue, setBlue] = useState(0);

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

  //   const setColor = (color, change) => {
  //     switch (color) {
  //       case "red":
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //         return;
  //       case "green":
  //         green + change > 255 || green + change < 0
  //           ? null
  //           : setGreen(green + change);
  //         return;
  //       case "blue":
  //         blue + change > 255 || blue + change < 0
  //           ? null
  //           : setBlue(blue + change);
  //         return;
  //       default:
  //         return;
  //     }
  //   };

  // (2) useReducer를 사용하는 경우
  // useState를 사용했을대는 red, green, blue를 각각 state로 관리했지만 useReducer를 사용하면
  // 하나의 오브젝트에 담아 state를 관리할 수 있습니다.

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log(state);
  return (
    <View>
      {/* 아래는 useState를 사용할 때 */}
      {/* <ColorCounter
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
      /> */}
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "red", amount: COLOR_ICREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", amount: -1 * COLOR_ICREMENT });
        }}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "green", amount: COLOR_ICREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", amount: -1 * COLOR_ICREMENT });
        }}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_ICREMENT });
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_ICREMENT });
        }}
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
