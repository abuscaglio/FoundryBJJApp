import { React, useState, useEffect } from "react";
import { View, ImageBackground, Text, ScrollView, KeyboardAvoidingView } from "react-native"; 
import { ActivityIndicator, TextInput } from 'react-native-paper';
import { RegContBtn } from '../components/regWizard/regContBtn';
import { styles } from "../styles/style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


export function RegisterUnPassPage({unFormValues}) {

    let [formCompleted, setFormCompleted] = useState(false);
    
    useEffect(() => {
        if (!unFormValues.emailInvalidValidationMsg && !unFormValues.passSpaceValidationMsg && !unFormValues.passLengthValidationMsg && !unFormValues.passNoMatchValidationMsg && !unFormValues.emailExistsValidationMsg && !unFormValues.noEmailValidationMsg && !unFormValues.noPassValidationMsg && !unFormValues.noRePassValidationMsg && formCompleted) {
            unFormValues.nextStep();
        }
      }, [unFormValues.emailInvalidValidationMsg, unFormValues.passNoMatchValidationMsg, unFormValues.emailExistsValidationMsg, unFormValues.noEmailValidationMsg, unFormValues.noPassValidationMsg, unFormValues.noRePassValidationMsg, unFormValues.passLengthValidationMsg, unFormValues.passSpaceValidationMsg, formCompleted]);
    
    const renderEmailValidation = () => {
        if (unFormValues.noEmailValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter An Email Address</Text>)
        } else if (unFormValues.emailExistsValidationMsg) {
            return (<Text style={{color:'red'}}>Email Address Already Exists</Text>)
        } else if (unFormValues.emailInvalidValidationMsg) {
            return (<Text style={{color:'red'}}>Email Address Is Invalid</Text>)
        } else {
            return (null)
        }
    }

    const renderPassValidation = () => {
        if (unFormValues.noPassValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter A Password</Text>)
        } else if (unFormValues.passLengthValidationMsg) {
            return (<Text style={{color:'red'}}>Passwords Must Be Atleast 6 Characters</Text>)
        } else if (unFormValues.passSpaceValidationMsg) {
            return (<Text style={{color:'red'}}>Passwords Cannot Contain Spaces</Text>)
        } else if (unFormValues.passNoMatchValidationMsg) {
            return (<Text style={{color:'red'}}>Passwords Do Not Match</Text>)
        } else {
            return (null)
        }
    }

    const renderRePassValidation = () => {
        if (unFormValues.noRePassValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter A Password</Text>)
        } else if (unFormValues.passNoMatchValidationMsg) {
            return (<Text style={{color:'red'}}>Passwords Do Not Match</Text>)
        } else {
            return (null)
        }
    }

    return ( 
        <KeyboardAwareScrollView style={{flex:1}} contentContainerStyle={{flex:1}}>
            <View style={{flex: 1,
                    justifyContent: 'center',
                    paddingTop: 15, 
                    paddingLeft: 15, 
                    paddingRight: 15
                }}>
                <View style={{flex:.7, alignItems:'center', justifyContent:'center'}}>
                <ImageBackground source={require("../assets/GroupPhoto.jpg")} style={styles.imageBackground} />
                </View>
                <View style={{flex: 1,
                backgroundColor: 'rgba(227,227,227,0.6)',
                borderBottomStartRadius: 12,
                borderBottomEndRadius: 12
                }}>
                    <View style={{flex:.90,
                            paddingLeft:12, 
                            paddingRight:12
                            }}>
                        <View style={{alignItems:'center', justifyContent:'center', paddingTop:15}}>
                            <Text style={{fontSize:16, textDecorationLine:'underline'}}>ENTER EMAIL ADDRESS AND PASSWORD</Text>
                        </View>
                        <View style={{padding:5}}>
                        {renderEmailValidation()}
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                            placeholder= "Email Address"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray',}}
                            activeUnderlineColor="#000000"
                            returnKeyType="done"
                            onChangeText={text=>unFormValues.setEmail(text)}
                            >
                            </TextInput>
                        </View>
                        <View style={{padding:5}}>
                        {renderPassValidation()}
                        </View>
                        <View style={styles.passwordInput}>
                            <TextInput
                            placeholder= "Password"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray'}}
                            activeUnderlineColor="#000000"
                            secureTextEntry={unFormValues.securePass}
                            returnKeyType="done"
                            right={<TextInput.Icon name={unFormValues.securePass ? "eye-off" : "eye"} forceTextInputFocus={false} onPress={() => {unFormValues.setSecurePass(!unFormValues.securePass)}}/>}
                            onChangeText={text=>unFormValues.setPassword(text)}>  
                            </TextInput>
                        </View>
                        <View style={{padding:5}}>
                        {renderRePassValidation()}
                        </View>
                        <View style={styles.passwordInput}>
                            <TextInput
                            placeholder= "Repeat Password"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray'}}
                            activeUnderlineColor="#000000"
                            secureTextEntry={unFormValues.secureRepeatPass}
                            returnKeyType="done"
                            right={<TextInput.Icon name={unFormValues.secureRepeatPass ? "eye-off" : "eye"} forceTextInputFocus={false} onPress={() => {unFormValues.setSecureRepeatPass(!unFormValues.secureRepeatPass)}}/>}
                            onChangeText={text=>unFormValues.setRepeatPass(text)}>  
                            </TextInput>
                        </View>
                        <View style={ styles.regContBtnEnabled}>
                            <RegContBtn 
                            step={unFormValues.flowStep}
                            email={unFormValues.email}
                            setNoEmailValidation={unFormValues.setNoEmailValidationMsg}
                            existingUserNames={unFormValues.existingUserNames}
                            setEmailInvalidValidation={unFormValues.setEmailInvalidValidationMsg}
                            setEmailExistsValidation={unFormValues.setEmailExistsValidationMsg}
                            password={unFormValues.password}
                            repeatPass={unFormValues.repeatPass}
                            setNoPassValidation={unFormValues.setNoPassValidationMsg}
                            setPassLengthValidation={unFormValues.setPassLengthValidationMsg}
                            setPassSpaceValidation={unFormValues.setPassSpaceValidationMsg}
                            setNoRePassValidation={unFormValues.setNoRePassValidationMsg}
                            setPassNoMatchValidation={unFormValues.setPassNoMatchValidationMsg}
                            setFormCompleted={setFormCompleted}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
     )}

