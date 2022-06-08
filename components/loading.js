import { React } from 'react'
import { View, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export function LoadingScreen() {

    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Modal transparent animationType='fade'>
                <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'rgba(0,0,0,.85)'}}>
                    <ActivityIndicator size={'large'} color='white'/>
                </View>
            </Modal>
        </View>
)}