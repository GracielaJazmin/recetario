import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Item = ({title, cantidad}) => (
  <View style={styles.ingredientList}>
    <Text style={styles.ingredientListText}>{title}</Text>
    <Text style={styles.ingredientListText}>{cantidad}</Text>
  </View>
);

const IngredientsList = ({data}) => {
  const renderItem = ({item}) => (
    <Item title={item.nombre} cantidad={item.cantidad} />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  ingredientList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 17,
    marginRight: 17,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  ingredientListText: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
});

export default IngredientsList;
