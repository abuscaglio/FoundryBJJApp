import { React } from 'react'
import { Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { styles } from '../../styles/style';

export function RegContBtn({
    step, 
    email, 
    setNoEmailValidation, 
    existingUserNames, 
    setEmailInvalidValidation, 
    setEmailExistsValidation, 
    password, 
    repeatPass, 
    setNoPassValidation, 
    setNoRePassValidation, 
    setPassLengthValidation,
    setPassSpaceValidation,
    setPassNoMatchValidation, 
    setFormCompleted, 
    firstName,
    setNoFirstNameValidation,
    lastName,
    setNoLastNameValidation,
    birthday,
    setNoBirthdayValidation,
    profilePicture,
    setNoProfPicValidation,
    beltRank,
    setNoBeltValidation,
    degree,
    setNoDegreeValidation,
    yearsTraining,
    setNoYearsTrainingValidation, 
    setYearsTrainingLiarValidation,
    imageLoading,
}) {
    
    const fieldValidate = () => {
        switch (step) {
            case 1: 
                let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let regSpace= /\s/;
        
                if (email === '') {
                    setNoEmailValidation(true);
                } else {
                    setNoEmailValidation(false);
                }
        
                if (existingUserNames.includes(email)) {
                    setEmailExistsValidation(true);
                } else if (!regEmail.test(email)) {
                    setEmailInvalidValidation(true);
                } else {
                    setEmailExistsValidation(false);
                    setEmailInvalidValidation(false);  
                    setNoEmailValidation(false);
                }
    
                if (password === '') {
                    setNoPassValidation(true);
                } else {
                    setNoPassValidation(false);
                }

                if (password.length < 6) {
                    setPassLengthValidation(true);
                } else {
                    setPassLengthValidation(false)
                }

                if (regSpace.test(password)) {
                    
                    setPassSpaceValidation(true);
                } else {
                    setPassSpaceValidation(false);
                }
    
                if (password !== repeatPass) {
                    setPassNoMatchValidation(true);
                } else {
                    setPassNoMatchValidation(false);
                }
    
                if (repeatPass === '') {
                setNoRePassValidation(true);
                } else {
                    setNoRePassValidation(false);
                }    
                setFormCompleted(true);
                break;
            case 2: 
                if (firstName === '') {
                    setNoFirstNameValidation(true);
                } else {
                    setNoFirstNameValidation(false);
                }

                if (lastName === '') {
                    setNoLastNameValidation(true);
                } else {
                    setNoLastNameValidation(false);
                }

                if (birthday === 'Date Of Birth') {
                    setNoBirthdayValidation(true);
                } else {
                    setNoBirthdayValidation(false);
                }

                setFormCompleted(true);
                break;
            case 3: 
                if (profilePicture === '') {
                    setNoProfPicValidation(true);
                } else {
                    setNoProfPicValidation(false);
                }

                if (beltRank === 'Belt/Rank') {
                    setNoBeltValidation(true);
                } else {
                    setNoBeltValidation(false);
                }

                if (degree === 'Degree') {
                    setNoDegreeValidation(true);
                } else {
                    setNoDegreeValidation(false);
                }

                if (yearsTraining === 'Years Training' || yearsTraining === '') {
                    setNoYearsTrainingValidation(true);
                } else if ((moment().diff(moment(birthday, 'MMMM Do YYYY'), 'years') - yearsTraining) < 4) {
                    setYearsTrainingLiarValidation(true);
                } else {
                    setNoYearsTrainingValidation(false);
                    setYearsTrainingLiarValidation(false);
                }

                setFormCompleted(true);
                break;
            default:
            } 
        } 

    return (
            <TouchableOpacity title="Button" disabled={imageLoading} style={styles.logInButton} onPress={fieldValidate}>
                <Text style={styles.btnText}>{step === 3 ? 'Submit' : 'Continue'}</Text>
            </TouchableOpacity>
)}

