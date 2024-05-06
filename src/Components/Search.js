import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import data from '../../Events.json'

function Search(props) {
  const { dataEv, setDataEv } = props;

  const handleSearch = (text) => {
    if (text === '') {
      setDataEv(data);
    } else {
      const filteredEvents = dataEv.filter((s) =>
        s.title.toLowerCase().includes(text.toLowerCase())
      );
      setDataEv(filteredEvents);
    }
  };

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm sự kiện"
        placeholderTextColor="gray"
        onChangeText={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default Search; 