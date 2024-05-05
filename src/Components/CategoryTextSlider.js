import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color'

function CategoryTextSlider() {

    const [active,setActive]=useState(1)
    const categoryList=[
        {
            id:1,
            name: 'Tất cả'
        },
        {
            id:2,
            name: 'Lễ hội - Vui chơi'
        },
        {
            id:3,
            name: 'Giáo dục'
        },
        {
            id:4,
            name: 'Chính trị'
        },
        {
            id:5,
            name: 'Văn hóa'
        },
        {
            id:6,
            name: 'Xã hội'
        },
        {
            id:7,
            name: 'Khác'
        },
    ]

    const onCategoryClick=(id)=>{
        setActive(id)
    }

    return (
        <View style={{marginLeft:"1%"}}>
            <FlatList
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>onCategoryClick(item.id)}>
                    <Text style={
                        item.id==active?styles.catagory_select 
                        :styles.catagory_unselect}>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    catagory_unselect: {
        marginRight:20, 
        fontSize:18, 
        fontWeight:'bold', 
        backgroundColor: Colors.white,
        color: Colors.silver, 
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.silver,
    },

    catagory_select: {
        marginRight:20, 
        fontSize:18, 
        fontWeight:'bold', 
        backgroundColor: Colors.main,
        color: Colors.white, 
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.main,
    },
});

export default CategoryTextSlider
