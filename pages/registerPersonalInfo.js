import { React, useState, useEffect } from "react";
import { View, ImageBackground, Text } from "react-native"; 
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DatePicker } from "../components/regWizard/datePicker";
import { RegContBtn } from '../components/regWizard/regContBtn';
import { styles } from "../styles/style";


export function RegisterPersonalInfoPage({piFormValues}) {

    let [formCompleted, setFormCompleted] = useState(false);
    
    useEffect(() => {
        if (!piFormValues.noFirstNameValidationMsg && !piFormValues.noLastNameValidationMsg && !piFormValues.noBirthdayValidationMsg && formCompleted) {
            piFormValues.nextStep()
        }
      }, [piFormValues.noFirstNameValidationMsg, piFormValues.noLastNameValidationMsg, piFormValues.noBirthdayValidationMsg, formCompleted]);
    
    const renderFirstNameValidation = () => {
        if (piFormValues.noFirstNameValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter A First Name</Text>)
        } else {
            return (null)
        }
    }

    const renderLastNameValidation = () => {
        if (piFormValues.noLastNameValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter A Last Name</Text>)
        } else {
            return (null)
        }
    }

    const renderBirthdayValidation = () => {
        if (piFormValues.noBirthdayValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter A Birthdate</Text>)
        } else {
            return (null)
        }
    }

    return ( 
        <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
            <View style={{flex: 1,
                    justifyContent: 'center',
                    paddingTop: 15, 
                    paddingLeft: 15, 
                    paddingRight: 15
                }}>
                <View style={{flex:.7, alignItems:'center', justifyContent:'center'}}>
                <ImageBackground source={require("../assets/GroupPhoto2.jpg")} style={styles.imageBackground} />
                </View>
                <View style={{flex: 1,
                backgroundColor: 'rgba(227,227,227,0.6)',
                borderBottomStartRadius: 12,
                borderBottomEndRadius: 12
                }}>
                    <View style={{flex: .90,
                            paddingLeft: 12, 
                            paddingRight:12
                            }}>
                        <View style={{alignItems:'center', justifyContent:'center', paddingTop:15}}>
                            <Text style={{fontSize:16, textDecorationLine:'underline'}}>ENTER PERSONAL INFORMATION</Text>
                        </View>
                        <View style={{padding:5}}>
                        {renderFirstNameValidation()}
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                            placeholder= "First Name"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray',}}
                            activeUnderlineColor="#000000"
                            returnKeyType="done"
                            onChangeText={text=>piFormValues.setFirstName(text)}
                            >
                            </TextInput>
                        </View>
                        <View style={{padding:5}}>
                        {renderLastNameValidation()}
                        </View>
                        <View style={styles.passwordInput}>
                            <TextInput
                            placeholder= "Last Name"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray'}}
                            activeUnderlineColor="#000000"
                            returnKeyType="done"
                            onChangeText={text=>piFormValues.setLastName(text)}>  
                            </TextInput>
                        </View>
                        <View style={{padding:5}}>
                        {renderBirthdayValidation()}
                        </View>
                        <View style={styles.passwordInput}>
                            <DatePicker birthday={piFormValues.birthday} setBirthday={piFormValues.setBirthday}/>
                        </View>
                        <View style={ styles.regContBtnEnabled}>
                            <RegContBtn 
                            step={piFormValues.flowStep}
                            firstName={piFormValues.firstName}
                            setNoFirstNameValidation={piFormValues.setNoFirstNameValidationMsg}
                            lastName={piFormValues.lastName}
                            setNoLastNameValidation={piFormValues.setNoLastNameValidationMsg}
                            birthday={piFormValues.birthday}
                            setNoBirthdayValidation={piFormValues.setNoBirthdayValidationMsg}
                            setFormCompleted={setFormCompleted}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
     )}

