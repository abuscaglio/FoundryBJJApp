import { React, useState, useEffect } from "react";
import { View, TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native"; 
import { Marketplace } from '../components/marketplace/marketplace';
import { FontAwesome } from 'expo-vector-icons';
import InstructorsPage from "./instructors";
import firebase from 'firebase';
import { connect } from "react-redux";

    function LoggedInParent(props) {

    let [initLoad, setInitLoad] = useState(false);
    let [userData, setUserData] = useState([]);
    let [page, setPage] = useState('Marketplace');
    let [newsBtnPressed, setNewsBtnPressed] = useState(true);
    let [schedBtnPressed, setSchedBtnPressed] = useState(false);
    let [instBtnPressed, setInstBtnPressed] = useState(false);
    let [shopBtnPressed, setShopBtnPressed] = useState(false);
    let [profBtnPressed, setProfBtnPressed] = useState(false);

    useEffect(() => {
        if (!initLoad) {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
            .then(querySnapshot => {
            setUserData(querySnapshot.data());
            })
        setInitLoad(true);
        }
    }, [])


    const renderPage = (page) => {
        switch (page) {
            case 'Marketplace': 
            return(
                <Marketplace setUserData={setUserData}/>
            )
            case 'Instructors': 
            return(
                <InstructorsPage/>
            )
            default: 
          }
    }

    const handleNavBtnPress = (ref) => {
        switch (ref) {
            case 'schedBtn':
                if (!schedBtnPressed) {
                    setSchedBtnPressed(true);
                    setNewsBtnPressed(false);
                    setInstBtnPressed(false);
                    setShopBtnPressed(false);
                    setProfBtnPressed(false);
                    setPage('Marketplace');
                } 
                break;
                case 'instBtn':
                if (!instBtnPressed) {
                    setInstBtnPressed(true);
                    setNewsBtnPressed(false);
                    setSchedBtnPressed(false);
                    setShopBtnPressed(false);
                    setProfBtnPressed(false);
                    setPage('Instructors');
                } 
                break;
                case 'newsBtn':
                if (!newsBtnPressed) {
                    setNewsBtnPressed(true);
                    setInstBtnPressed(false);
                    setSchedBtnPressed(false);
                    setShopBtnPressed(false);
                    setProfBtnPressed(false);
                    setPage('Marketplace');
                } 
                break;
                case 'shopBtn':
                if (!shopBtnPressed) {
                    setShopBtnPressed(true);
                    setInstBtnPressed(false);
                    setNewsBtnPressed(false);
                    setSchedBtnPressed(false);
                    setProfBtnPressed(false);
                    setPage('Marketplace');
                } 
                break;
                case 'profBtn':
                if (!profBtnPressed) {
                    setProfBtnPressed(true);
                    setShopBtnPressed(false);
                    setInstBtnPressed(false);
                    setNewsBtnPressed(false);
                    setSchedBtnPressed(false);
                    setPage('Marketplace');
                } 
                break;
            default:
        }
    }

 return (
        <View style={{flex:1}}> 
            {renderPage(page)}
            <View style={{flexDirection:'row', height:60, backgroundColor:'#b0b0b0', justifyContent:'space-around', borderTopLeftRadius:7, borderTopRightRadius:7}}>
                <TouchableOpacity activeOpacity={1} style={{alignItems:'center', justifyContent:'center'}} onPress={(e) => {handleNavBtnPress('newsBtn')}}>
                    <FontAwesome name='newspaper-o' size={21} color={newsBtnPressed ? '#454444' : 'gray'}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{alignItems:'center', justifyContent:'center'}} onPress={(e) => {handleNavBtnPress('schedBtn')}}>
                    <FontAwesome name='calendar' size={21} color={schedBtnPressed ? '#454444' : 'gray'}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{alignItems:'center', justifyContent:'center'}} onPress={(e) => {handleNavBtnPress('instBtn')}}>
                    <FontAwesome name='users' size={21} color= {instBtnPressed ? '#454444' : 'gray'}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{alignItems:'center', justifyContent:'center'}} onPress={(e) => {handleNavBtnPress('shopBtn')}}>
                    <FontAwesome name='shopping-cart' size={21} color={shopBtnPressed ? '#454444' : 'gray'}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={{alignItems:'center', justifyContent:'center'}} onPress={(e) => {handleNavBtnPress('profBtn')}}>
                    <FontAwesome name='cog' size={21} color={profBtnPressed ? '#454444' : 'gray'}/>
                </TouchableOpacity>
            </View>
        </View>
 )
}

const styles = StyleSheet.create({
    navBtnActive : {
        alignItems:'center', 
        justifyContent:'center'
     }
}) 

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInParent)