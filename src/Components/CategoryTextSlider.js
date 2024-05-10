import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color'
import data from '../../Events.json'

function CategoryTextSlider(props) {
    const { dataEv, setDataEv } = props;

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

    const onCategoryClick = (id) => {
        setActive(id);
        if (id === 1) {   
            setDataEv(data);
        } else {
            const  filteredData = data.filter(event => event.category == categoryList[id - 1].name);
            setDataEv(filteredData);
        }
    };

    return (
        <View style={{ marginLeft:8, marginHorizontal:"3%" }}>
            <FlatList
                data={categoryList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
                        <Text style={
                            item.id == active ? styles.category_select
                                : styles.category_unselect}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    category_unselect: {
        marginRight: 20,
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
        marginRight: 20,
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

export default CategoryTextSlider;