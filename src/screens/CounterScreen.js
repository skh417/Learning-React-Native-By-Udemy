import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button
        title='⬆︎Increase⬆︎'
        onPress={() => {
          setCount(count + 100);
        }}
      />
      <Text style={{ textAlign: "center" }}>현재 숫자 : {count}</Text>
      <Button
        title='⬇︎Decrease⬇︎'
        onPress={() => {
          setCount(count - 100);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
