import { React } from 'react'
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import { Actions } from "react-native-router-flux";

export function RegModal({regModalTxt, buttons, setRegModalDisplayed}) {

    const handleBtnBPress = () => {
        setRegModalDisplayed(false);
        Actions.login();
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Modal transparent animationType='fade'>
                <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'rgba(0,0,0,.85)'}}>
                    <View style={{width:'80%', height:'30%', backgroundColor:'#e0e0e0', opacity:1, borderRadius:15, borderWidth:2}}>
                        <View style={{flex:.6, alignItems:'center', justifyContent:'center', borderBottomWidth:1, borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                            <Text>{regModalTxt}</Text>
                        </View>
                        <View style={{flex:.3, alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                            {buttons.map((value, index) => {
                                if (value === 'Sign In') {
                                    return(
                                        <View key={index} style={{flex:.5, paddingLeft:10, paddingRight:5, paddingTop:10}}>
                                            <TouchableOpacity key={index} style={stylesLocal.button}>
                                                <Text>{value.toString()}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                } else {
                                    return(
                                        <View key={index} style={{flex:.5, paddingLeft:5, paddingRight:10, paddingTop:10}}>
                                            <TouchableOpacity key={index} style={stylesLocal.button} onPress={() => handleBtnBPress()}>
                                                <Text>{value.toString()}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            })}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
)}

   const stylesLocal = StyleSheet.create({
    textName : {
        fontSize: 25, 
        textDecorationLine:'underline', 
        paddingBottom:10, 
        fontWeight:'bold'
     },
     button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#575757',
        width: '100%'
    },
}) 