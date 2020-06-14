import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import styles from '../style/style';


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: ''
    }
  }

  setBeer = (beer) => {
    this.setState({ beer });
  }

  submit = () => {
    this.props.navigation.navigate("Item", { beer: this.state.beer });
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter votre texte ici"
          style={styles.textInput}
          value={this.state.beer}
          onChangeText={(txt) => this.setBeer(txt)}
        />
        <View style={{ width: '50%', marginLeft: 80 }}>
          <Button title="Rechercher" color={styles.beerColor} onPress={() => this.submit()} />
        </View>
      </View>
    );
  }
}
