import { React, useState, useEffect } from "react";
import { View, Text } from "react-native"; 
import { TextInput } from 'react-native-paper';
import { RegContBtn } from '../components/regWizard/regContBtn';
import { ProfImagePicker } from "../components/regWizard/imagePicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ValuePicker } from "../components/regWizard/valueSelector";
import { RegModal } from "../components/modal";
import { styles } from "../styles/style";


export function RegisterProfileInfoPage({prFormValues}) {

    let [formCompleted, setFormCompleted] = useState(false);
    
    useEffect(() => {
        if (!prFormValues.noBeltValidationMsg && !prFormValues.noDegreeValidationMsg && !prFormValues.noYearsTrainingValidationMsg && !prFormValues.yearsTrainingLiarValidationMsg && formCompleted) {
            prFormValues.userRegister();
        }
      }, [prFormValues.noBeltValidationMsg, prFormValues.noDegreeValidationMsg, prFormValues.noYearsTrainingValidationMsg, prFormValues.yearsTrainingLiarValidationMsg, formCompleted]);
    
      const renderBeltValidation = () => {
        if (prFormValues.noBeltValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter Belt/Rank</Text>)
        } else {
            return (null)
        }
    }

      const renderDegreeValidation = () => {
        if (prFormValues.noDegreeValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter Degree</Text>)
        } else {
            return (null)
        }
    }

      const renderYearsTrainingValidation = () => {
        if (prFormValues.noYearsTrainingValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter # Of Years Training</Text>)
        } else if (prFormValues.yearsTrainingLiarValidationMsg) {
            return (<Text style={{color:'red'}}>Please Enter the Real Number Of Years Training</Text>)
        } else {
              return (null)
        }
    }
    
    return ( 
        <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
            <View style={{flex: 1,
                    justifyContent: 'center',
                    paddingTop: 5, 
                    paddingLeft: 15, 
                    paddingRight: 15
                }}>
                {prFormValues.regModalDisplayed ? <RegModal regModalTxt={'You Have Successfully Registered!'} buttons={['Sign In', 'Login Page']} setRegModalDisplayed={prFormValues.setRegModalDisplayed}/> : null}
                <View style={{flex: 1,
                backgroundColor: 'rgba(227,227,227,0.6)',
                borderBottomStartRadius: 12,
                borderBottomEndRadius: 12
                }}>
                    <View style={{flex:.57, alignItems:'center', justifyContent:'center'}}>
                        <ProfImagePicker 
                            profilePicture={prFormValues.profilePicture}
                            setProfilePicture={prFormValues.setProfilePicture}
                            imageLoading={prFormValues.imageLoading} 
                            setImageLoading={prFormValues.setImageLoading} 
                            setRegBtnEnabled={prFormValues.setRegBtnEnabled}/>
                    </View>
                    <View style={{flex: .75,
                            paddingLeft: 12, 
                            paddingRight:12
                            }}>
                        <View style={{alignItems:'center', justifyContent:'center', paddingTop:20}}>
                            <Text style={{fontSize:16, textDecorationLine:'underline'}}>ENTER PROFILE INFORMATION</Text>
                        </View>
                        <View style={{padding:5}}>
                        {renderBeltValidation()}
                        </View>
                        <View style={{height:47}}>
                            <ValuePicker 
                                type='belt'
                                beltRank={prFormValues.beltRank} 
                                setBeltRank={prFormValues.setBeltRank}
                                imageLoading={prFormValues.imageLoading}
                                />
                                
                            </View>
                        <View style={{padding:5}}>
                        {renderDegreeValidation()}
                        </View>
                            <View style={{height:47}}>
                                <ValuePicker 
                                    type='degree'
                                    degree={prFormValues.degree} 
                                    setDegree={prFormValues.setDegree}/>
                            </View>
                        <View style={{padding:5}}>
                        {renderYearsTrainingValidation()}
                        </View>
                            <View style={{flexDirection: 'row', height:47}}>
                            <TextInput
                            placeholder= "Years Training"
                            style={{flex: 1,
                                height: 40,
                                paddingBottom: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'gray',}}
                            keyboardType='number-pad'
                            maxLength={2}
                            activeUnderlineColor="#000000"
                            returnKeyType="done"
                            onChangeText={text=>prFormValues.setYearsTraining(text)}
                            >
                            </TextInput>
                        </View>
                        <View style={prFormValues.regBtnEnabled ? styles.regContBtnEnabled : styles.regContBtnDisabled}>
                            <RegContBtn 
                            step={prFormValues.flowStep}
                            birthday={prFormValues.birthday}
                            profilePicture={prFormValues.profilePicture}
                            setNoProfPicValidation={prFormValues.setNoProfPicValidationMsg}
                            beltRank={prFormValues.beltRank}
                            setNoBeltValidation={prFormValues.setNoBeltValidationMsg}
                            degree={prFormValues.degree}
                            setNoDegreeValidation={prFormValues.setNoDegreeValidationMsg}
                            yearsTraining={prFormValues.yearsTraining}
                            setNoYearsTrainingValidation={prFormValues.setNoYearsTrainingValidationMsg}
                            setYearsTrainingLiarValidation={prFormValues.setYearsTrainingLiarValidationMsg}
                            imageLoading={prFormValues.imageLoading}
                            setFormCompleted={setFormCompleted}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

