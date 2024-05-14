import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View, FlatList, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../color';
import data from '../../Events.json';

function removeDiacritics(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterSearchAndCategory(props) {
  const { dataEv, setDataEv } = props;

  const searchTimeoutRef = useRef(null);

  const [active, setActive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: 'Tất cả'
    },
    {
      id: 2,
      name: 'Lễ hội - Vui chơi'
    },
    {
      id: 3,
      name: 'Giáo dục - Thể thao'
    },
    {
      id: 4,
      name: 'Chính trị'
    },
    {
      id: 5,
      name: 'Văn hóa - Xã hội'
    }
  ];

  const handleSearch = (text) => {
    clearTimeout(searchTimeoutRef.current);
    if (text === '') {
      if (active === 1) {
        setDataEv(data);
      } else {
        const filteredData = data.filter(event => event.category === categoryList[active - 1].name);
        setDataEv(filteredData);
      }
    } else {
      const keywordWithoutDiacritics = removeDiacritics(text.toLowerCase());
      searchTimeoutRef.current = setTimeout(() => {
        const filteredEvents = data.filter((event) => {
          const eventTitleWithoutDiacritics = removeDiacritics(event.title.toLowerCase());
          const categoryMatch = active === 1 || event.category === categoryList[active - 1].name;
          return categoryMatch && eventTitleWithoutDiacritics.includes(keywordWithoutDiacritics);
        });
        setDataEv(filteredEvents);
      }, 600)
    }
  };

  const onCategoryClick = (id) => {
    setActive(id);
    if (id === 1) {
      setDataEv(data);
    } else {
      const filteredData = data.filter(event => event.category === categoryList[id - 1].name);
      setDataEv(filteredData);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <AntDesign name="search1" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm sự kiện"
          placeholderTextColor="gray"
          onChangeText={handleSearch}
        />
      </View>
      <View style={{ marginLeft: 5, marginHorizontal: "2%" }}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
              <Text style={
                item.id === active ? styles.category_select
                  : styles.category_unselect}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
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
    marginHorizontal: 5,
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
    height: Dimensions.get('screen').height * 0.04
  },
  category_unselect: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: Colors.white,
    color: Colors.silver,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.silver,
  },
  category_select: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: Colors.main,
    color: Colors.white,
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.main,
  },
});

export default filterSearchAndCategory;