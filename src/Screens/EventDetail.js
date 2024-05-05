import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color'
import { AntDesign } from '@expo/vector-icons';

function EventDetail() {
    const navigation = useNavigation()
    const event=useRoute().params.event;

    return (
        <ScrollView style={{height:"100%", backgroundColor:"white"}}>
            <View style={styles.container_heading}>
                <TouchableOpacity onPress={() => navigation.navigate("listevents")}>
                    <AntDesign name="left" size={23} color="white" />
                </TouchableOpacity>

                <Text style={styles.heading}>Sự kiện</Text>
            </View>
            <View style={{backgroundColor:Colors.white, height:"100%"}}>
                <Text style={{fontWeight:'900', fontSize:22, padding:5}}>{event.title}</Text>
                <Text style={{color:Colors.main, paddingLeft:5, paddingBottom:15}}>{event.datepost}</Text>
                <Image source={{uri: event.image}} style={{ height: 230, width:"95%", marginLeft:"2%", marginRight:"2%"}} />
                <Text style={{fontSize:14, paddingTop:5, paddingLeft:5}}><Text style={{fontWeight:"bold"}}>Thời gian:</Text> {event.time}</Text>
                <Text style={{fontSize:14, paddingLeft:5}}><Text style={{fontWeight:"bold"}}>Địa điểm:</Text> {event.place}</Text>
                <Text style={{paddingTop:20, paddingLeft:5}}> {event.content}</Text>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container_heading: {
        display: 'flex',
        flexDirection: 'row',
        color: Colors.white,
        backgroundColor: Colors.main,
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        marginLeft: '32%'
    }
});

export default EventDetail