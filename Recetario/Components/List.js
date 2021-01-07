import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const Item = ({title, image, navigation, servings, ingredients}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() =>
      navigation.navigate('Ingredients', {
        image: image,
        servings: servings,
        ingredients: ingredients,
        title: title,
      })
    }>
    <Image style={styles.imageStyles} source={image}></Image>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const List = ({data, navigation}) => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      image={item.image}
      navigation={navigation}
      servings={item.servings}
      ingredients={item.ingredients}
    />
  );
  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  title: {
    fontSize: 15,
    color: 'white',
  },
  imageStyles: {
    width: 100,
    height: 110,
    borderRadius: 10,
  },
});

export default List;
