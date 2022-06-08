import { React, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Modal } from 'react-native';

export function ValuePicker({type, beltRank, setBeltRank, degree, setDegree, imageLoading}) {

    const [show, setShow] = useState(false);

    const onBeltPressItem = (value) => {
        setBeltRank(value);
        setShow(false);
    }

    const onDegreePressItem = (value) => {
        setDegree(value);
        setShow(false);
    }

    const textStyling = () => {
        if ((type === 'belt' && beltRank === 'Belt/Rank') || (type === 'degree' && degree === 'Degree')) {
            return(
                styles.selectorInputTextDefault
            )
        } else {
            return(
                styles.selectorInputTextActive
            )
        }
    }

    const beltList = ['White', 'Blue', 'Purple', 'Brown', 'Black'];
    const degreeList = ['N/A', 'First', 'Second', 'Third', 'Fourth'];

    return (
        <View style={{flex:1}}>
            <TouchableOpacity
                disabled={imageLoading}
                activeOpacity={1}
                onPress={() => {setShow(true)}}
                style={styles.selectorInputActive}
            >
                <View>
                    <Text style={textStyling()}>{type === 'belt' ? beltRank : degree}</Text>
                    <Modal 
                        transparent
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => {setShow(false)}}
                    >
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
                            >
                                <View style={{
                                    flex:1,
                                    backgroundColor:'white',
                                    justifyContent:'center',
                                    height: '40%',
                                    overflow: 'hidden',
                                }}>
                                    <View style={{
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginTop:20
                                    }}>
                                        {type === 'belt' ? beltList.map((value, index) => {
                                            return(
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => onBeltPressItem(value)}
                                                >
                                                    <Text style={{fontSize:23, padding: 10, color:'gray'}}>{value}</Text>
                                                </TouchableOpacity>
                                            )
                                        }) : degreeList.map((value, index) => {
                                            return(
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => onDegreePressItem(value)}
                                                >
                                                    <Text style={{fontSize:23, padding: 10, color:'gray'}}>{value}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    selectorInputActive: {
        backgroundColor:'#e3e3e3', 
        borderTopLeftRadius:4, 
        borderTopRightRadius:4, 
        borderColor:'#7a7a7a', 
        borderWidth:1
     },
     selectorInputDisabled: {
        backgroundColor:'#e3e3e3', 
        borderTopLeftRadius:4, 
        borderTopRightRadius:4, 
        borderColor:'#7a7a7a', 
        borderWidth:1,
        opacity:.6
     },
     selectorInputTextDefault: {
        fontSize:16, 
        padding:12, 
        color:'#696969', 
        borderColor:'gray', 
        borderBottomWidth:1
     },
     selectorInputTextActive: {
        fontSize:16, 
        padding:12, 
        color:'#000000', 
        borderColor:'gray', 
        borderBottomWidth:1
     }
}) 