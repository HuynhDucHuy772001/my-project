import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color'
import { AntDesign } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Markdown from 'react-native-markdown-display';

function EventDetail() {
    const navigation = useNavigation()
    const event = useRoute().params.event;

    return (
        <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1, height: "100%" }}>
            <View style={styles.container_heading}>
                <TouchableOpacity onPress={() => navigation.navigate("listevents")}>
                    <AntDesign name="left" size={23} color="white" />
                </TouchableOpacity>

                <Text style={styles.heading}>Sự kiện</Text>
            </View>
            <ScrollView style={{ height: Dimensions.get('screen').height * 0.82, backgroundColor: "white" }}>
                <View style={{ backgroundColor: Colors.white, height: "100%" }}>
                    <Text style={{ fontWeight: '900', fontSize: 26, padding: 5 }}>{event.title}</Text>
                    <Text style={{ color: Colors.main, paddingLeft: 5, paddingBottom: 15 }}>{event.datepost}</Text>
                    <Image source={{ uri: event.image }} style={{ height: 230, width: "95%", marginLeft: "2%", marginRight: "2%" }} />
                    <Text style={{ fontSize: 18, paddingTop: 5, paddingLeft: 5 }}><Text style={{ fontWeight: "bold" }}>Thời gian:</Text> {event.time}</Text>
                    <Text style={{ fontSize: 18, paddingLeft: 5 }}><Text style={{ fontWeight: "bold" }}>Địa điểm:</Text> {event.place}</Text>
                    <Markdown style={markdownStyles}>
                        {event.content}
                    </Markdown>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const markdownStyles = StyleSheet.create({
    body:{
        paddingLeft:5,
        fontSize:18
    }
})

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
    },
});

export default EventDetail