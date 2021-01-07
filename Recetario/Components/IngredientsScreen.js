import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import IngredientsList from './IngredientsList';

const IngrdientsScreen = ({route, navigation}) => {
  const {image, servings, ingredients, title} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageStyles} source={image}>
        <View style={styles.imageContainer}>
          <View style={styles.imageContainerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                style={styles.imageContainerIconsClose}
                name="close"
                type="evilicon"
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="share-apple" type="evilicon" color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon name="heart" type="evilicon" color="white" />
            </TouchableOpacity>
          </View>

          <Text style={styles.imageTextCategory}>CATEGORIA</Text>
          <Text style={styles.imageTextTitle}>{title}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.middleText}>Ingredients For {servings} servings</Text>

      <IngredientsList data={ingredients} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    flex: 1,
  },
  imageStyles: {
    width: '100%',
    height: 190,
  },
  imageContainerIcons: {
    flexDirection: 'row',
    marginBottom: 75,
    padding: 5,
  },
  imageContainerIconsClose: {
    marginRight: 250,
  },
  imageContainer: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  imageTextCategory: {
    color: 'white',
    fontSize: 20,
    marginLeft: 3,
  },
  imageTextTitle: {
    color: 'white',
    fontSize: 30,
    marginLeft: 3,
  },
  middleText: {
    justifyContent: 'flex-start',
    fontSize: 20,
    padding: 15,
    color: 'white',
  },
});

export default IngrdientsScreen;
