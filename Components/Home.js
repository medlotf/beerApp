import React, { Component } from 'react';
import { Text, ImageBackground } from "react-native";
import styles from "./../style/style";

export default class Home extends Component {
  render = () => {
    return (
      <ImageBackground
        source={require('./../assets/background.jpg')}
        style={styles.background}
      >
        <Text style={styles.textHome}>Don't Worry BEER Happy</Text>
      </ImageBackground>
    );
  }
}