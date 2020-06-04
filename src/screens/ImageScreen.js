import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        imgSource={require("../../assets/forest.jpg")}
        price={5000}
      />
      <ImageDetail
        title='Beach'
        imgSource={require("../../assets/beach.jpg")}
        price={999900}
      />
      <ImageDetail
        title='Mountain'
        imgSource={require("../../assets/mountain.jpg")}
        price={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
