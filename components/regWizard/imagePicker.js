import { React, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { FontAwesome } from 'expo-vector-icons';
import * as ImagePicker from 'expo-image-picker';

export function ProfImagePicker({imageLoading, profilePicture, setProfilePicture, setImageLoading, setRegBtnEnabled}) {

    useEffect(() => {
        if (imageLoading) {
            setTimeout(() => {
                defaultPhoto();
                setImageLoading(false);
            }, 500)
        } else {
            setRegBtnEnabled(true);
        }
      }, [imageLoading]);

    const defaultPhoto = () => {
        if (imageLoading) {
            return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size="small" color="#000000"/>
                </View>
            );
        } else if (profilePicture === '') {
            return(
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View>
                        <FontAwesome name='user-o' size={90} color='gray'/>
                    </View>
                    <View style={{paddingTop:15}}>
                        <Text style={{fontSize:20, color:'gray'}}>Profile Picture</Text>
                    </View>
                </View>
            )
        } else {
            return(
                <Image style={{flex:1, borderRadius:99999999999}} source={{uri: profilePicture}}/>
            )
        }
    }

    let openImageLibrary = async () => {
        //let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        //if (!permission.granted) {
            //return;
        //}
        setRegBtnEnabled(false);

        let photoPicker = await ImagePicker.launchImageLibraryAsync();

        if (photoPicker.cancelled) {
            setRegBtnEnabled(true);
            return;
        }
        setImageLoading(true);

        setProfilePicture(photoPicker.uri);
    }

    let openTakePhoto = async () => {
        //let permission = await ImagePicker.requestCameraPermissionsAsync();

        //if (!permission.granted) {
            //return;
        //}
        setRegBtnEnabled(false);

        let photoPicker = await ImagePicker.launchCameraAsync();

        if (photoPicker.cancelled) {
            setRegBtnEnabled(true);
            return;
        }
        setImageLoading(true);

        setProfilePicture(photoPicker.uri)
    }
        
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {defaultPhoto()}
            </View>
            <View style={{flexDirection:'row', paddingBottom:20, paddingTop:7}}>
                <View style={{paddingRight:10}}>
                    <TouchableOpacity style={styles.logInButton} onPress={openImageLibrary}>
                        <Text style={styles.btnText}>Library</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingLeft:10}}>
                    <TouchableOpacity style={styles.logInButton} onPress={openTakePhoto}>
                        <Text style={styles.btnText}>Camera</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer : {
        borderWidth:1,
        borderRadius:99999999,
        borderStyle:'solid',
        borderColor: 'rgba(0, 0, 0, .5)',
        marginTop:40,
        width: '65%',
        height: '80%'
    },
    logInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#575757',
        width: '100%'
    },
    btnText: {
        fontSize: 15,
        lineHeight: 21,
        //fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})