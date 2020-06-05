import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  // const { navigation } = props; // HomeScreen 인자로 props를 받고 이렇게 비구조화 할당을 해도 된다.
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title='ComponentsScreen'
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title='ListScreen'
        onPress={() => {
          navigation.navigate("List");
        }}
      />
      <Button
        title='ImageScreen'
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title='CounterScreen'
        onPress={() => {
          navigation.navigate("Counter");
        }}
      />
      <Button
        title='ColorScreen'
        onPress={() => {
          navigation.navigate("Color");
        }}
      />
      <Button
        title='SquareScreen'
        onPress={() => {
          navigation.navigate("Square");
        }}
      />

      {/* <TouchableOpacity onPress={()=>{console.log('this is TouchableOpacity')}}>
        <Text>this is touchableOpacity tag</Text>
        <Text>this is touchableOpacity tag</Text>
        <Text>this is touchableOpacity tag</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "black",
    backgroundColor: "tomato",
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationColor: "black",
  },
});

export default HomeScreen;
