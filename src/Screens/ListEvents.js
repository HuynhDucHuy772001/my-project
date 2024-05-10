import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Components/CategoryTextSlider'
import Colors from '../color';
import { AntDesign } from '@expo/vector-icons';
import Search from '../Components/Search';
import ListEv from '../Components/ListEv';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import dataEv from "../../Events.json"
import Time from '../Components/Time';

function ListEvents() {
    const navigation=useNavigation();
    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(dataEv);
      }, []);
       

    return (
        <SafeAreaView style={{backgroundColor:Colors.white, flex:1}}>
            <View style={styles.container_title}>
                <TouchableOpacity onPress={()=>navigation.navigate("home")}>
                    <AntDesign name="left" size={23} color="white" />
                </TouchableOpacity>

                <Text style={styles.title}>Sự kiện</Text>
            </View>
            <Search dataEv = {events} setDataEv={setEvents}/>
            <CategoryTextSlider dataEv = {events} setDataEv={setEvents} />
            <Time dataEv = {events} setDataEv={setEvents}/>
            <ListEv dataEv = {events} setDataEv={setEvents}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container_title: {
        display: 'flex',
        flexDirection: 'row',
        color: Colors.white,
        backgroundColor: Colors.main,
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        marginLeft: '32%'
    }
});

export default ListEvents