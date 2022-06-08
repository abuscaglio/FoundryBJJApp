import { React, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Modal } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

export function DatePicker({birthday, setBirthday}) {
    const [show, setShow] = useState(false);

    const onDateChange = (date) => {
        setBirthday(moment(date).format('MMMM Do YYYY'));
        setShow(false);
    }

    return (
        <View style={{flex:1}}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {setShow(true)}}
                style={styles.birthdayInput}
            >
                <View>
                    <Text style={birthday === 'Date Of Birth' ? styles.birthdayInputTextDefault : styles.birthdayInputTextActive}>{birthday}</Text>
                    <Modal 
                        transparent
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => {setShow(false)}}
                    >
                        <View style={{flex:1}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity
                                    style={{
                                        flex:1,
                                        alignItems:'flex-end',
                                        flexDirection:'row'
                                    }}
                                    activeOpacity={1}
                                    visible={show}
                                    onPress={() => {setShow(false)}}
                                />
                            </View>
                            <View style={{
                                backgroundColor:'white',
                                height: '45%',
                                overflow: 'hidden',
                            }}>
                                <View style={{
                                    marginTop:20
                                }}>
                                    <CalendarPicker  
                                        onDateChange={onDateChange}
                                        todayBackgroundColor='#FFFFFF'
                                        maxDate={moment()}
                                    />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    birthdayInput : {
        backgroundColor:'#e3e3e3', 
        borderTopLeftRadius:4, 
        borderTopRightRadius:4, 
        borderColor:'#7a7a7a', 
        borderWidth:1
     },
     birthdayInputTextDefault: {
        fontSize:16, 
        padding:12, 
        color:'#696969', 
        borderColor:'gray', 
        borderBottomWidth:1
     },
     birthdayInputTextActive: {
        fontSize:16, 
        padding:12, 
        color:'#000000', 
        borderColor:'gray', 
        borderBottomWidth:1
     }
}) 