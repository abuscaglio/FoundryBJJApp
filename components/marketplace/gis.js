import { React, useState, useEffect, LayoutAnimation } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';
import { Card, Title, Paragraph } from 'react-native-paper';
import { AddToCartModal } from './addToCartModal';

export function ShopGis({page, setPage, merchGis, addToCartModal, setAddToCartModal, setUserData}) {

    let [initState, setInitState] = useState(false)
    let [selectedMerch, setSelectedMerch] = useState();

    useEffect(() => {
        if (initState) {
            setAddToCartModal(true); 
        } 
    }, [initState, selectedMerch])

    const showAddToCartModal = (index) => {
        setInitState(true)
        setSelectedMerch(merchGis[index]); 
    }

    return (
           <View style={{flex:1}} >
               <View style={{flexDirection:'row', padding:10, borderBottomWidth:1, borderBottomColor:'gray'}}>
                    <View style={{alignItems:'flex-end', justifyContent:'center'}}>
                        <FontAwesome name='chevron-left' size={20} color='gray' onPress={() => {setPage('Categories')}}/>
                   </View>   
                   <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize: 25, color:'gray', fontWeight:'bold'}}>Shop Gis</Text>
                   </View>
                   <View style={{alignItems:'flex-end', justifyContent:'center'}}>
                        <FontAwesome name='shopping-basket' size={20} color='gray' />
                   </View> 
               </View>
               <ScrollView style={{flex:1}}>
                    <View style={{ justifyContent:'center', alignItems:'center', paddingTop:'5%'}}>
                    {addToCartModal ? <AddToCartModal setAddToCartModal={setAddToCartModal} itemDetails={selectedMerch} setUserData={setUserData}/> : null}
                            {merchGis.map((item, index) => {
                                return(
                                    <View key={index} style={{ justifyContent:'center', paddingBottom:'10%'}}>
                                        <Card key={index} mode='elevated' elevation={20} style={styles.cardContainer} onPress={() => {showAddToCartModal(index)}}>
                                            <Card.Cover style={{flex:1, padding:15}} source={{uri: item.photo[0]}}/>
                                                <Card.Content style={{alignItems:'center', paddingTop:'5%'}}>
                                                    <Title>{item.item_name}</Title>
                                                </Card.Content>
                                        </Card>    
                                    </View>
                                )
                            })}
                    </View>
               </ScrollView>
           </View>
                
)}

const {width, height} = Dimensions.get('screen');
   const itemWidth = width * 0.90;
   const itemHeight = itemWidth * 1.47;

const styles = StyleSheet.create({
    cardContainer: {
      height: itemHeight,
      width: itemWidth,
      //alignItems:'center',
      //justifyContent: 'center',
      //padding: 20,
    },
    image: {
        height: '80%',
        width: itemWidth,
        resizeMode:'cover'
    },
  });