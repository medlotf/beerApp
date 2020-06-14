import React, { Component } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Components/Home";
import Search from "./Components/Search";
import Item from "./Components/Item";
import ListItem from "./Components/ListItem";
import List from "./Components/List";
import styles from './style/style';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

let icons = {
  h: require("./assets/navIcons/home.png"),
  hc: require("./assets/navIcons/homeC.png"),
  s: require("./assets/navIcons/search.png"),
  sc: require("./assets/navIcons/searchC.png"),
  l: require("./assets/navIcons/list.png"),
  lc: require("./assets/navIcons/listC.png")
}

const options = {
  headerStyle: styles.header,
  headerTitleStyle: styles.headerTitle
}

function StackSearch() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} options={{ ...options, title: 'Rechercher une bière' }} />
      <Stack.Screen name="Item" component={Item} options={{ ...options, title: `Information d'une bière` }} />
    </Stack.Navigator>
  );
}

function StackList() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} options={{ ...options, title: 'List des bières' }} />
      <Stack.Screen name="Item" component={Item} options={{ ...options, title: "Information d'une bière" }} />
      <Stack.Screen name="ListItem" component={ListItem} options={{ ...options, title: 'List des bières' }} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'hc'
              : 'h';
          } else if (route.name === 'Search') {
            iconName = focused
              ? 'sc'
              : 's';
          } else if (route.name === 'List') {
            iconName = focused
              ? 'lc'
              : 'l';
          }
          let imagePath = icons[iconName];
          return <Image source={imagePath} style={{ width: 30, height: 30 }} />;
        }
      })}
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          backgroundColor: styles.blueColor
        }
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={StackSearch} />
      <Tab.Screen name="List" component={StackList} />
    </Tab.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
