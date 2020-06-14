import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import globalStyle from './../style/style';

export default class ListItem extends Component {


  image = () => {
    let image = { uri: 'https://www.liquor.com/thmb/nzYXpum0AiReyEulV0dPqMBMxmY=/1440x1440/filters:fill(auto,1)/beer-0358105730dc469190b50f289962c910.png' };
    if (this.props.br.labels !== undefined) {
      image = { uri: this.props.br.labels.medium };
    }
    return (<Image source={image} style={{ width: 60, height: 60 }} />)
  }
  render() {
    return (
      <View style={[styles.viewContainer, styles.flex]}  >
        {this.image()}
        <View style={styles.info}>
          <Text style={{ textAlign: "right", fontSize: 18, fontWeight: 'bold' }} onPress={() => {
            this.props.navigation.navigate("Item", { beer: this.props.br.name })
          }} >{this.props.br.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: globalStyle.black,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  }
})