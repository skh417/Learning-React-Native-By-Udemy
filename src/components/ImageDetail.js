import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imgSource }) => {
  return (
    <View>
      <Image source={imgSource} />
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
