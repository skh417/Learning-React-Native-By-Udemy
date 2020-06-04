import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imgSource, price }) => {
  return (
    <View>
      <Image source={imgSource} />
      <Text style={styles.title}>{title}</Text>
      <Text style={{ color: "red" }}>
        PRICE{" "}
        {price.toLocaleString("en", { style: "currency", currency: "USD" })}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "lightblue",
  },
});

export default ImageDetail;
