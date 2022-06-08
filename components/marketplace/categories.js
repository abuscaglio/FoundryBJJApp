import { React, useState, useEffect, LayoutAnimation } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';
import { Actions } from 'react-native-router-flux';

export function MarketplaceCategories({page, setPage}) {

    const content = [{
        id: '0',
        categoryName: 'Gis',
        subCategory: [
            {id:1,name:'Keiko'},
            {id:2,name:'KVRA'},
            {id:3,name:'Storm'}
        ]
    },
    {
        id: '1',
        categoryName: 'Rashguards',
        subCategory: [
            {id:1,name:'Foundry'},
            {id:2,name:'Alliance'},
            {id:3,name:'Sub 3'}
        ]
    },
    {
        id: '2',
        categoryName: 'Belts',
        subCategory: [
            {id:1,name:'Sub 1'},
            {id:2,name:'Sub 2'},
            {id:3,name:'Sub 3'}
        ]
    },
    {
        id: '3',
        categoryName: 'Apparel',
        subCategory: [
            {id:1,name:'Sub 1'},
            {id:2,name:'Sub 2'},
            {id:3,name:'Sub 3'}
        ]
    },
    {
        id: '4',
        categoryName: 'Accesories',
        subCategory: [
            {id:1,name:'Sub 1'},
            {id:2,name:'Sub 2'},
            {id:3,name:'Sub 3'}
        ]
    }]

    return (
           <View style={{flex:1}} >
               <View style={{flexDirection:'row', padding:10, borderBottomWidth:1, borderBottomColor:'gray'}}>
                   <View style={{flex:1, alignItems:'flex-start', justifyContent:'center'}}>
                        <Text style={{fontSize: 25, color:'gray', fontWeight:'bold'}}>Marketplace</Text>
                   </View>
                   <View style={{alignItems:'flex-end', justifyContent:'center'}}>
                        <FontAwesome name='shopping-basket' size={20} color='gray' />
                   </View>   
               </View>
               <ImageBackground source={require("../../assets/AllianceEagle.png")} style={styles.background} imageStyle={{opacity:0.16}}>
                    <View style={{flex:1, paddingTop:'15%'}}>
                            <View style={{padding:10}}>
                                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => {setPage('Gis')}}>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                        <Text style={{padding:20, fontSize:20}}>Gis</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <FontAwesome name='chevron-right' size={20} color='gray' />
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{padding:10}}>
                                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => {setPage('Rashguards')}}>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                        <Text style={{padding:20, fontSize:20}}>Rashguards</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <FontAwesome name='chevron-right' size={20} color='gray' />
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{padding:10}}>
                                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => {setPage('Belts')}}>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                        <Text style={{padding:20, fontSize:20}}>Belts</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <FontAwesome name='chevron-right' size={20} color='gray' />
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{padding:10}}>
                                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => {setPage('Apparel')}}>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                        <Text style={{padding:20, fontSize:20}}>Apparel</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <FontAwesome name='chevron-right' size={20} color='gray' />
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{padding:10}}>
                                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => {setPage('Accessories')}}>
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1, alignItems:'flex-start'}}>
                                        <Text style={{padding:20, fontSize:20}}>Accessories</Text>
                                    </View>
                                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                                        <FontAwesome name='chevron-right' size={20} color='gray' />
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
               </ImageBackground>
           </View>        
           )
        }

const styles = StyleSheet.create({
    background: {
        //display: "flex",
        //alignItems: 'center',
        //justifyContent: 'center',
        width: '100%',
        height: '100%',
        },
    }) 




    
    
    

    