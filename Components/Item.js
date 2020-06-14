import React, { Component } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, Image, ScrollView, Alert } from "react-native";
import styles from './../style/style';
import axios from "axios";

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: this.props.route.params.beer,
      result: null
    }
    setTimeout(() => {
      this.fetchBeer()
    }, 1500);
  }

  fetchBeer = () => {
    axios.get(`http://api.brewerydb.com/v2/search?q=${this.state.beer}/&key=918ae85d8f9504fa85f2f174d34b3ec2`)
      .then((response) => {
        if (response.data.totalResults !== 0) {
          this.setState({ result: response.data.data[0] })
        }
        else {
          Alert.alert("Recherche Bière", "Ce texte ne correspant à aucune bière", [
            {
              text: "OK",
              onPress: () => { this.props.navigation.navigate('Search') }
            },
            {
              text: "Voir la liste",
              onPress: () => { this.props.navigation.navigate('Search'); this.props.navigation.navigate('List') }
            }
          ])
        }
      })
  }

  image = () => {
    let image = { uri: 'https://www.liquor.com/thmb/nzYXpum0AiReyEulV0dPqMBMxmY=/1440x1440/filters:fill(auto,1)/beer-0358105730dc469190b50f289962c910.png' };
    if (this.state.result.labels !== undefined) {
      image = { uri: this.state.result.labels.large };
    }
    return (<Image source={image} style={styles.imageItem} />)
  }

  render = () => {
    if (this.state.result === null) {
      return (
        <ScrollView style={{ paddingTop: 20 }}>
          <ActivityIndicator size="large" color={styles.black} />
        </ScrollView>
      );
    }
    else {
      return (
        <ScrollView style={styles.container}>
          {this.image()}
          <View style={styles.infoBeer}>
            <Text style={styles.txtInfo}>Nom: <Text style={{ color: styles.black }}>{this.state.result.nameDisplay}</Text></Text>
            <Text style={styles.txtInfo}>Catégorie: <Text style={{ color: styles.black }}>{this.state.result.style.category.name}</Text></Text>
            <Text style={[styles.txtInfo, styles.margBot]}>Style: <Text style={{ color: styles.black }}>{this.state.result.style.shortName}</Text></Text>
          </View>
          <Text style={{ fontSize: 15 }}>{this.state.result.style.description}</Text>
          <View style={styles.flex}>
            <View style={styles.infoItem}>
              <Text style={styles.txtInfo}>IBU</Text>
              <Text>{this.state.result.style.ibuMin} - {this.state.result.style.ibuMax}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.txtInfo}>ABV</Text>
              <Text>{this.state.result.style.abvMin} - {this.state.result.style.abvMax}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.txtInfo}>SRM</Text>
              <Text>{this.state.result.style.srmMin} - {this.state.result.style.srmMax}</Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  }
}
