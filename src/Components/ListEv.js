import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListEv(props) {
    const {dataEv, setDataEv} = props

    const navigation = useNavigation()
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://gist.githubusercontent.com/HuynhDucHuy772001/75be02f643adfc2e2b85bdc44dd8ed89/raw/e6a5d1d7a2c70054c1721a1f658fa30973ad4cd2/events.json');
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };

    //     fetchData();
    //   }, []);

    // const getAPI = () => {
    //     const apiURL = 'https://662f51fc43b6a7dce30f170d.mockapi.io/events';
    //     fetch(apiURL)
    //         .then((res) => res.json())
    //         .then((resJson) => {
    //             setEvents(resJson)
    //         }
    //         ).catch((err) => {
    //             console.log('Error:', err);
    //         })
    // }

    // useEffect(() => {
    //     getAPI();

    // }, []);

    // useEffect(() => {
    //     setDataEv(dataEv);
    // }, []);

    return (
        <FlatList style={{ height: '79%' }}
            data={dataEv}
            renderItem={({item,id}) => (//View List

                <View key={id} style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("eventdetail", { event: item })}>
                        <Image source={{ uri: item.image }} style={{ height: 95, width: 120 }} />
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate("eventdetail", { event: item })}>
                            <Text style={{ color: "black", marginLeft: "3%", width: Dimensions.get('screen').width * 0.62, fontWeight: '700' }}>{item.title}</Text>
                        </TouchableOpacity>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <FontAwesome6 name="clock" size={15} color="black" style={{ marginLeft: "3%", marginTop: "0.5%" }} />
                            <Text style={{ color: "black", marginLeft: "3%"}}>{item.time}</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <MaterialCommunityIcons name="map-marker-outline" size={20} color="black" style={{ marginLeft: "2%", marginTop: "0.5%" }} />
                            <Text style={{ color: "black", marginLeft: "2%", marginTop:"0.5%" }}>{item.place}</Text>
                        </View>

                        <Text style={{ color: Colors.main, textAlign:'right'}}>{item.category}</Text>
                    </View>

                </View>

            )}

        />
    )

}
export default ListEv