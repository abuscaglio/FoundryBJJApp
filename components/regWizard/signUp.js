import { React, useState } from 'react'
import { SafeAreaView, View, Alert } from 'react-native';
import firebase from 'firebase';
import moment from 'moment';
import { auth } from '../../firebase/firebase';
import uuid from 'react-native-uuid'
import { RegisterUnPassPage } from '../../pages/registerUnPass';
import { RegisterPersonalInfoPage } from '../../pages/registerPersonalInfo';
import { RegisterProfileInfoPage } from '../../pages/registerProfileInfo';

export default function SignUpPage() {
    let [flowStep, setFlowStep] = useState(1);
    let [securePass, setSecurePass] = useState(true);
    let [secureRepeatPass, setSecureRepeatPass] = useState(true);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [repeatPass, setRepeatPass] = useState('');
    let [firstName, setFirstName] = useState('');
    let [noFirstNameValidationMsg, setNoFirstNameValidationMsg] = useState(false);
    let [noLastNameValidationMsg, setNoLastNameValidationMsg] = useState(false);
    let [noBirthdayValidationMsg, setNoBirthdayValidationMsg] = useState(false);
    let [lastName, setLastName] = useState('');
    let [birthday, setBirthday] = useState('Date Of Birth');
    let [noEmailValidationMsg, setNoEmailValidationMsg] = useState(false);
    let [emailExistsValidationMsg, setEmailExistsValidationMsg] = useState(false);
    let [emailInvalidValidationMsg, setEmailInvalidValidationMsg] = useState(false); 
    let [noPassValidationMsg, setNoPassValidationMsg] = useState(false);
    let [passLengthValidationMsg, setPassLengthValidationMsg] = useState(false);
    let [passSpaceValidationMsg, setPassSpaceValidationMsg] = useState(false);
    let [noRePassValidationMsg, setNoRePassValidationMsg] = useState(false);
    let [passNoMatchValidationMsg, setPassNoMatchValidationMsg] = useState(false);
    let [profilePicture, setProfilePicture] = useState('');
    let [imageLoading, setImageLoading] = useState(false);
    let [noProfPicValidationMsg, setNoProfPicValidationMsg] = useState(false);
    let [beltRank, setBeltRank] = useState('Belt/Rank');
    let [noBeltValidationMsg, setNoBeltValidationMsg] = useState(false);
    let [degree, setDegree] = useState('Degree');
    let [noDegreeValidationMsg, setNoDegreeValidationMsg] = useState(false);
    let [yearsTraining, setYearsTraining] = useState('Years Training');
    let [noYearsTrainingValidationMsg, setNoYearsTrainingValidationMsg] = useState(false);
    let [yearsTrainingLiarValidationMsg, setYearsTrainingLiarValidationMsg] = useState(false);
    let [regBtnEnabled, setRegBtnEnabled] = useState(true);
    let [formCompleted, setFormCompleted] = useState(false);
    let [piFormCompleted, setPiFormCompleted] = useState(false);
    let [prFormCompleted, setPrFormCompleted] = useState(false);
    let [regModalDisplayed, setRegModalDisplayed] = useState(false);
    let [isRegistering, setIsRegistering] = useState(false);


    let existingUserNames = [];

    firebase.firestore().collection('users').get()
    .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            let dat =  [documentSnapshot.data()];

            dat.map(({email_address})=>{ 
                existingUserNames.push(email_address);
            });
        });
});

    const prevStep = () => {
        const step = flowStep;
        setFlowStep(step - 1);
    }

    const nextStep = () => {
        const step = flowStep;
        setFlowStep(step + 1);
    }

    const userRegister = () => {
        setIsRegistering(true);
        let profPicUuid = null;

        if (profilePicture) {
            const fileExtension = profilePicture.split('.').pop();
            let id = uuid.v4();
            profPicUuid = `${id}.${fileExtension}`;
            var storageRef = firebase.storage().ref(`profile/images/${profPicUuid}`)

            storageRef.put(profilePicture)
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((data) => {
            console.log(data.user);
            firebase.firestore().collection('users').doc(data.user.uid).set({
                first_name: firstName,
                last_Name: lastName,
                date_of_birth: birthday,
                email_address: email,
                belt: beltRank,
                degree: degree,
                years_training: yearsTraining,
                profile_picture: profPicUuid,
                date_registered: moment().format('MM/DD/YYYY')
            }).then((data) => {
               setIsRegistering(false);
            }).catch((e) => {
               setIsRegistering(false);
               alert('ERROR!', [
                {text: 'okay'}
            ]);
            })     
        })
        .catch((e) => {
            Alert.alert('ERROR', 'This is the error message', [{ text: 'Close' }]);
            console.log(e);
            setIsRegistering(false);
        })  
        setIsRegistering(false);
        setRegModalDisplayed(true);
    }

    let unFormvalues = { 
        flowStep: flowStep,
        setFlowStep: setFlowStep, 
        nextStep: nextStep,
        prevStep: prevStep,
        securePass: securePass, 
        setSecurePass: setSecurePass, 
        secureRepeatPass: secureRepeatPass, 
        setSecureRepeatPass: setSecureRepeatPass, 
        email: email, 
        setEmail: setEmail, 
        password: password, 
        setPassword: setPassword, 
        repeatPass: repeatPass, 
        setRepeatPass: setRepeatPass, 
        noEmailValidationMsg: noEmailValidationMsg, 
        setNoEmailValidationMsg: setNoEmailValidationMsg, 
        emailExistsValidationMsg: emailExistsValidationMsg, 
        setEmailExistsValidationMsg: setEmailExistsValidationMsg, 
        emailInvalidValidationMsg: emailInvalidValidationMsg, 
        setEmailInvalidValidationMsg: setEmailInvalidValidationMsg, 
        noPassValidationMsg: noPassValidationMsg, 
        setNoPassValidationMsg: setNoPassValidationMsg, 
        noRePassValidationMsg: noRePassValidationMsg, 
        setNoRePassValidationMsg: setNoRePassValidationMsg, 
        passNoMatchValidationMsg: passNoMatchValidationMsg, 
        setPassNoMatchValidationMsg: setPassNoMatchValidationMsg, 
        passLengthValidationMsg: passLengthValidationMsg,
        setPassLengthValidationMsg: setPassLengthValidationMsg,
        passSpaceValidationMsg: passSpaceValidationMsg,
        setPassSpaceValidationMsg: setPassSpaceValidationMsg,
        formCompleted: formCompleted, 
        setFormCompleted: setFormCompleted, 
        existingUserNames: existingUserNames
    }

    let piFormvalues = { 
        flowStep: flowStep,
        setFlowStep: setFlowStep, 
        nextStep: nextStep,
        prevStep: prevStep,
        firstName: firstName,
        setFirstName: setFirstName,
        lastName: lastName,
        setLastName: setLastName,
        birthday: birthday,
        setBirthday: setBirthday,
        noFirstNameValidationMsg: noFirstNameValidationMsg,
        setNoFirstNameValidationMsg: setNoFirstNameValidationMsg,
        noLastNameValidationMsg: noLastNameValidationMsg,
        setNoLastNameValidationMsg: setNoLastNameValidationMsg,
        noBirthdayValidationMsg: noBirthdayValidationMsg,
        setNoBirthdayValidationMsg: setNoBirthdayValidationMsg,
        piFormCompleted: piFormCompleted,
        setPiFormCompleted: setPiFormCompleted
    }

    let prFormValues = {
        flowStep: flowStep,
        setFlowStep: setFlowStep, 
        nextStep: nextStep,
        prevStep: prevStep,
        birthday: birthday,
        profilePicture: profilePicture,
        setProfilePicture: setProfilePicture,
        noProfPicValidationMsg: noProfPicValidationMsg,
        setNoProfPicValidationMsg: setNoProfPicValidationMsg,
        beltRank: beltRank,
        setBeltRank: setBeltRank,
        noBeltValidationMsg: noBeltValidationMsg,
        setNoBeltValidationMsg: setNoBeltValidationMsg,
        degree: degree,
        setDegree: setDegree,
        noDegreeValidationMsg: noDegreeValidationMsg,
        setNoDegreeValidationMsg: setNoDegreeValidationMsg,
        yearsTraining: yearsTraining,
        setYearsTraining: setYearsTraining,
        noYearsTrainingValidationMsg: noYearsTrainingValidationMsg,
        setNoYearsTrainingValidationMsg: setNoYearsTrainingValidationMsg,
        yearsTrainingLiarValidationMsg: yearsTrainingLiarValidationMsg,
        setYearsTrainingLiarValidationMsg: setYearsTrainingLiarValidationMsg,
        imageLoading: imageLoading,
        setImageLoading: setImageLoading,
        regBtnEnabled: regBtnEnabled,
        setRegBtnEnabled: setRegBtnEnabled,
        prFormCompleted: prFormCompleted,
        setPrFormCompleted: setPrFormCompleted,
        userRegister: userRegister,
        regModalDisplayed: regModalDisplayed,
        setRegModalDisplayed: setRegModalDisplayed,
    }

    const renderStep = (flowStep) => {
        switch (flowStep) {
            case 1: 
            return(
                <RegisterUnPassPage unFormValues={unFormvalues} />
            )
            case 2: 
            return(
                <RegisterPersonalInfoPage piFormValues={piFormvalues} />
            )
            case 3: 
            return(
                <RegisterProfileInfoPage prFormValues={prFormValues}/>
            )
            default: 
          }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#262b2a'}}>
            <View style={{flex:1}}>
                {renderStep(flowStep)}
            </View>
        </SafeAreaView>
    )}