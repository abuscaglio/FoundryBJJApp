import {React, useState, useEffect} from "react";
import { View, Button, ImageBackground, SafeAreaView, Text, TouchableOpacity } from "react-native"; 
import { TextInput, ActivityIndicator } from 'react-native-paper';
import { auth } from '../firebase/firebase';
import { Actions } from "react-native-router-flux";
import { styles } from "../styles/style";


export default function LogInPage() {
const [securePass, setSecurePass] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggingIn, setIsLoggingIn] = useState(false);
const [isSignedIn, setIsSignedIn] = useState(false);

//const navigate = useNavigate()

const handleLogin = () => {
    setIsLoggingIn(true);

    auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
        setIsLoggingIn(false);
        Actions.loggedInParent()
    })
    .catch((e) => {
        setIsLoggingIn(false);
    })
}

 return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#262b2a'}}>
        <View style={{flex:1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={require("../assets/FoundryLogoWhite.png")} style={styles.imageBackground} imageStyle={{opacity:0.2}}></ImageBackground>
                </View>
                <View style={styles.containerb}>
                    <View style={styles.footer}>
                        <View style={styles.action}>
                            <TextInput
                            placeholder= "Email Address"
                            style={styles.textInputEmail}
                            activeUnderlineColor="red"
                            returnKeyType="done"
                            onChangeText={text=>setEmail(text)}
                            >
                            </TextInput>
                        </View>
                        <View style={styles.passwordInput}>
                            <TextInput
                            placeholder= "Password"
                            style={styles.textInputPassword}
                            activeUnderlineColor="red"
                            secureTextEntry={securePass}
                            returnKeyType="done"
                            right={<TextInput.Icon name={securePass ? "eye-off" : "eye"} forceTextInputFocus={false} onPress={() => {setSecurePass(!securePass)}}/>}
                            onChangeText={text=>setPassword(text)}>  
                            </TextInput>
                        </View>
                        <View style={{fontSize: 18}}>
                            <Button title="Forgot your password?"/>
                        </View>
                        <View style={styles.logInButtonContainer}>
                            <TouchableOpacity title="Button" style={styles.logInButton} onPress={handleLogin}>
                                <Text style={styles.btnText}>{isLoggingIn ? <ActivityIndicator/>: 'Log In'}</Text>
                            </TouchableOpacity>
                                <Text style={{paddingTop:20}}>Not a member?</Text>
                                <Button title="Register" onPress={() => Actions.signUp()}/>
                                <Button title="Instructors" onPress={() => Actions.loggedInParent()}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </SafeAreaView>
 )}


