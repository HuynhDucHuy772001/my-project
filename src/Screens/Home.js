import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation=useNavigation()
    return (
        <SafeAreaView style={{backgroundColor:Colors.white, height:"100%"}}>
            <View>
                <View style={styles.heading}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                    />
                    <Text style={{ fontWeight: 'bold', color: Colors.main, textTransform: 'uppercase', fontSize: 20, width: 190 }}> Danang Smart City</Text>
                    <FontAwesome style={styles.icon} name="bell" size={20} color="#00A3FF" />
                    <FontAwesome name="user-circle" size={60} color="#00A3FF" />
                </View>
                <Text style={{ marginLeft: '3%', alignItems: 'center', justifyContent: 'center' }}>Chủ đề năm 2024: Năm đẩu mạnh cải cách...</Text>
            </View>
            <View style={{ backgroundColor: "#EEEEEE", margin: "3%" }}>
                <View>
                    <Text style={styles.title}>Công dân số</Text>
                </View>
                <TouchableOpacity style={{padding:"2%", width:"25%"}} onPress={()=>navigation.navigate("listevents")}>
                    <Image
                        source={require('../../assets/logo.png')}
                        style={styles.sukien}
                    />
                    <Text style={{fontSize:18, color:Colors.main, marginLeft:"11%"}}>Sự kiện</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginLeft: '3%',
        height: 60,
        width: 60
    },
    heading: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        marginLeft: "8%",
        marginTop: "5%",
        paddingRight: 10
    },
    title: {
        color: Colors.main,
        fontSize: 18,
        fontWeight: '500'
    },
    sukien: {
        marginLeft: '3%',
        height: 70,
        width: 70,
    },
});

export default Home