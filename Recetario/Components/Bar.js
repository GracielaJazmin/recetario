import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const Bar = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchBar
      styles={styles.searchBar}
      placeholder="What do you want yo eat?"
      onChangeText={setSearch}
      value={search}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 10,
    marginTop: 50,
  },
});

export default Bar;
