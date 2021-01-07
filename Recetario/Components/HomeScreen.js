import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Bar from './Bar';
import List from './List';

const DATA = [
  {
    id: '1',
    title: 'Galletas',
    image: require('../images/cookies.jpg'),
    servings: 3,
    ingredients: [
      {
        id: '1',
        nombre: 'Harina',
        cantidad: '280 gramos',
      },
      {
        id: '2',
        nombre: 'Azucar',
        cantidad: '100 gramos',
      },
      {
        id: '3',
        nombre: 'Mantequilla',
        cantidad: '125 gramos',
      },
      {
        id: '4',
        nombre: 'Huevos',
        cantidad: 3,
      },
      {
        id: '5',
        nombre: 'Lecha',
        cantidad: '125 gramos',
      },
    ],
  },
  {
    id: '2',
    title: 'Cream Soup',
    image: require('../images/creamSoup.jpg'),
    servings: 1,
    ingredients: [
      {
        id: '1',
        nombre: 'Manteca',
        cantidad: '1 cucharada',
      },
      {
        id: '2',
        nombre: 'Diente de ajo',
        cantidad: 1,
      },
      {
        id: '3',
        nombre: 'Cebolla',
        cantidad: 1,
      },
      {
        id: '4',
        nombre: 'Agua',
        cantidad: '?',
      },
      {
        id: '5',
        nombre: 'Caldo deshidratado',
        cantidad: '1 cucharada',
      },
      {
        id: '6',
        nombre: 'Queso crema',
        cantidad: '1 rodaja',
      },
      {
        id: '7',
        nombre: 'Sal',
        cantidad: '?',
      },
      {
        id: '8',
        nombre: 'Pimienta',
        cantidad: '?',
      },
      {
        id: '9',
        nombre: 'Perejil',
        cantidad: '?',
      },
    ],
  },
  {
    id: '3',
    title: 'Tacos',
    image: require('../images/tacos.jpg'),
    servings: 5,
    ingredients: [
      {
        id: '1',
        nombre: 'Tortillas',
        cantidad: '10',
      },
      {
        id: '2',
        nombre: 'Carne',
        cantidad: '1.5 Kg',
      },
    ],
  },
  {
    id: '4',
    title: 'Pizza',
    image: require('../images/italianPizza.jpg'),
    servings: 2,
    ingredients: [
      {
        id: '1',
        nombre: 'Masa',
        cantidad: '10',
      },
      {
        id: '2',
        nombre: 'Queso',
        cantidad: '1.5 Kg',
      },
    ],
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Bar />
      <Text style={styles.text1}>TRENDING</Text>
      <List data={DATA} navigation={navigation} />
      <Text style={styles.text1}>RECENTS</Text>
      <List data={DATA} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: '#282828',
    flex: 1,
  },
  text1: {
    fontSize: 20,
    width: 300,
    marginLeft: 10,
    marginTop: 15,
    color: 'white',
  },
});

export default HomeScreen;
