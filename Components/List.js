import React, { Component } from 'react';
import { Text, StyleSheet, View, Button, ActivityIndicator, FlatList } from "react-native";
import ListItem from "./ListItem";
import styles from './../style/style';
import axios from "axios";


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: null
    }
    setTimeout(() => {
      this.fetchBeers()
    }, 200);
  }

  fetchBeers = () => {
    axios.get(`http://api.brewerydb.com/v2/beers/?key=918ae85d8f9504fa85f2f174d34b3ec2`)
      .then((response) => { this.setState({ result: response.data.data }) })
  }

  itemSelected = (dt) => {
    this.props.navigation.navigate("Item", { beer: dt });
  }

  render = () => {
    if (this.state.result === null) {
      return (
        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator size="large" color={styles.black} />
        </View>
      );
    }
    else {
      return (
        <FlatList
          data={this.state.result}
          renderItem={({ item }) => <ListItem br={item} />}
          keyExtractor={(item, i) => i.toString()}
        />
      );
    }
  }
}