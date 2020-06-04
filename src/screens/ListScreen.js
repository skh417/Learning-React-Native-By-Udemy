import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Jerry", age: 300 },
    { name: "Kellie", age: 2 },
    { name: "Johnson", age: 33 },
    { name: "Baker", age: 21 },
    { name: "Arron", age: 25 },
    { name: "Cheolsoo", age: 27 },
    { name: "Ashley", age: 90 },
    { name: "Fisher", age: 77 },
    { name: "Kellog", age: 5 },
  ];

  return (
    <View>
      <FlatList
        // horizontal={true} // 그냥 horizontal까지만 써도 된다. ( '={true}' 는 생략가능!)
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => {
          friend.name;
        }}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
    color: "tomato",
  },
});

export default ListScreen;
