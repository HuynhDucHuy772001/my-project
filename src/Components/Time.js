import React, { useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import data from '../../Events.json'
import Colors from '../color';

function Time({ dataEv, setDataEv }) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [dateOfEvent, setDateOfEvent] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const toggleDatepicker = () => {
        setShowPicker(!showPicker);
    }

    const onChange = (event, selectedDate) => {
        if (event.type === "set") {
            const currentDate = selectedDate || date;
            setDate(currentDate);

            if (Platform.OS === "android") {
                toggleDatepicker();
                const formattedDate = formatDate(currentDate);
                setDateOfEvent(formattedDate);
                filterEventsByDate(formattedDate);
            }else{
                const formattedDate = formatDate(currentDate);
                setDateOfEvent(formattedDate);
                filterEventsByDate(formattedDate);
            }
        } else {
            toggleDatepicker();
        }
    };

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${day}/${month}/${year}`;
    };

    const filterEventsByDate = (selectedDate) => {
        const filteredEvents = data.filter((item) => item.time === selectedDate);
        setDataEv(filteredEvents);
        setFilteredEvents(filteredEvents);
    }

    const clearFilter = () => {
        setFilteredEvents([]);
        setDataEv(data); // Hiển thị lại danh sách sự kiện ban đầu
        setDateOfEvent(); // Xóa giá trị ngày đã chọn
    }

    return (
        <View style={{ display: 'flex', flexDirection: 'row'}}>
            <View style={styles.container}>
                {showPicker && (
                    <DateTimePicker
                        mode='date'
                        display='spinner'
                        value={date}
                        onChange={onChange}
                        style={styles.datePicker}
                    />
                )}

                {showPicker && Platform.OS === "ios" && (
                    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <TouchableOpacity style={[styles.pickerButton,styles.buttonIOS,]} onPress={toggleDatepicker}>
                            <Text style={{color:Colors.white}}>Hủy</Text>
                        </TouchableOpacity>
                    </View>

                    
                )}

                {!showPicker && (
                    <Pressable onPress={toggleDatepicker}>
                        <TextInput
                            style={styles.input}
                            placeholder='VD:26/04/2024'
                            editable={false}
                            value={dateOfEvent}
                            onChangeText={setDateOfEvent}
                            onPressIn={toggleDatepicker}
                        />
                    </Pressable>
                )}

            </View>
            <TouchableOpacity style={styles.clearButton} onPress={clearFilter}>
                <Text style={{color:"white", fontWeight:'900',fontSize:16}}>Clear</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
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
        width: "70%"
    },
    input: {
        fontSize: 16,
        color: 'black',
        height: 30,
        textAlign:'center'
    },
    clearButton: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.main,
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
        width: "18%",
        height:40
    },
    datePicker: {
        height: 120,
        marginTop:-10,
    },
    pickerButton: {
        paddingHorizontal:20
    },
    buttonIOS: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: "red",
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
        width: "30%",
        height:35
    }
});

export default Time