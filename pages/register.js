import { React, useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView } from "react-native"; 
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { auth } from '../firebase/firebase';
import firebase from 'firebase';
import { styles } from "../styles/style";


export default function RegisterPage() {

    const [isRegistering, setIsRegistering] = useState(false);
    const [securePass, setSecurePass] = useState(true);
    const [secureRepeatPass, setSecureRepeatPass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPass, setRepeatPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateStarted, setDateStarted] = useState('');
    const [belt, setBelt] = useState('');
    
    const userRegister = () => {
        const docName = firstName + lastName;
        setIsRegistering(true);

        auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection('users').doc(docName).set({
                uid: result.user.uid,
                date_started: dateStarted,
                email_address: email,
                first_name: firstName,
                last_name: lastName,
                rank: belt
            }).then((data) => {
               setIsRegistering(false);
               
            }).catch((e) => {
               console.log(e);
               setIsRegistering(false);
               alert('ERROR!', [
                {text: 'okay'}
            ]);
            })    
            alert('User Registered!', [
                {text: 'okay'}
            ]);
        })
        .catch((e) => {
            Alert.alert('ERROR', 'This is the error message', [{ text: 'Close' }]);
            console.log(e);
            setIsRegistering(false);
        })  
    }

     return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#1A1A1A'}}>
            <KeyboardAvoidingView behavior="padding">
                <ScrollView style={{marginHorizontal: 20, marginVertical: 30}}>
                    <View style={styles.action}>
                        <Text>HEADER BAR</Text>
                    </View>
                    <View style={styles.container}>
                    <View style={styles.action}>
                        <TextInput placeholder="Email Address"
                        style={styles.textInputEmail}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        disabled = {isRegistering}
                        onChangeText={text=>setEmail(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="Password"
                        style={styles.textInputPassword}
                        secureTextEntry={securePass}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        right={<TextInput.Icon name={securePass ? "eye-off" : "eye"} forceTextInputFocus={false} onPress={() => {setSecurePass(!securePass)}}/>}
                        disabled = {isRegistering}
                        onChangeText={text=>setPassword(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="Re-Enter Password"
                        style={styles.textInputPassword}
                        secureTextEntry={secureRepeatPass}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        right={<TextInput.Icon name={secureRepeatPass ? "eye-off" : "eye"} forceTextInputFocus={false} onPress={() => {setSecureRepeatPass(!secureRepeatPass)}}/>}
                        disabled = {isRegistering}
                        onChangeText={text=>setRepeatPass(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="First Name"
                        style={styles.textInputPassword}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        disabled = {isRegistering}
                        onChangeText={text=>setFirstName(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="Last Name"
                        style={styles.textInputPassword}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        disabled = {isRegistering}
                        onChangeText={text=>setLastName(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="Date Started"
                        style={styles.textInputPassword}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        disabled = {isRegistering}
                        onChangeText={text=>setDateStarted(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.action}>
                        <TextInput placeholder="Rank"
                        style={styles.textInputPassword}
                        activeUnderlineColor="yellow"
                        returnKeyType="done"
                        disabled = {isRegistering}
                        onChangeText={text=>setBelt(text)}>
                        </TextInput>
                    </View>
                    <View style={styles.registerButtonContainer}>
                        <TouchableOpacity title="Button" style={styles.registerButton} onPress={userRegister} >
                            <Text style={styles.btnText}>{isRegistering ? <ActivityIndicator/>: 'Register'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}