import { React, useState, useEffect } from 'react'
import firebase, { auth } from 'firebase';
import { StyleSheet, View, Modal, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Card, Title, TextInput } from 'react-native-paper';
import { FontAwesome } from 'expo-vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; 

export function AddToCartModal({setAddToCartModal, itemDetails, setUserData}) {

    const [initLoad, setInitLoad] = useState(false);
    const [itemName, setItemName] = useState(itemDetails.item_name);
    const [itemColor, setItemColor] = useState('');
    const [itemSize, setItemSize] = useState('');
    const [itemQty, setItemQty] = useState('1');
    const [totalPrice, setTotalPrice] = useState(itemDetails.price);
    const [colorBtnSelected, setColorBtnSelected] = useState([]);
    const [sizeBtnSelected, setSizeBtnSelected] = useState([]);
    const [ photo, setPhoto] = useState(itemDetails.photo[0]);

    useEffect(() => {
        if (initLoad === false) {
            setColorBtnState(itemDetails.color);
            setSizeBtnState(itemDetails.size);
            setInitLoad(true);
        } else {
            setTotalPrice(Number(itemQty * itemDetails.price).toFixed(2))
        }
      }, [initLoad, itemQty, photo]);

    const handleAddItemsToCart = () => {
        const uid = firebase.auth().currentUser.uid;
        const docRef = firebase.firestore().collection('shopping_cart').doc(uid)

        let itemsObj = {
            item_name: itemDetails.item_name,
            item_color: itemColor,
            item_size: itemSize,
            item_qty: itemQty,
            total_price: totalPrice
        }

        docRef.update({cart: firebase.firestore.FieldValue.arrayUnion(itemsObj)});
    }

    const handleColorBtnStyle = (index) => {
        if (initLoad && colorBtnSelected[index].value === true) {
            return stylesLocal.buttonActive;
        } else {
            return stylesLocal.buttonInactive;
        }
    }

    const handleSizeBtnStyle = (index) => {
        if (initLoad && sizeBtnSelected[index].value === true) {
            return stylesLocal.buttonActive;
        } else {
            return stylesLocal.buttonInactive;
        }
    }

    const setColorBtnState = (values) => { 
        values.map((item, index) => {
            if (index === 0) {
            setColorBtnSelected((colorBtnSelected) => [...colorBtnSelected, {index: index, value: true, color: item}]);
        } else {
            setColorBtnSelected((colorBtnSelected) => [...colorBtnSelected, {index: index, value: false, color: item}]);
        }
    })
    }

    const setSizeBtnState = (values) => { 
        values.map((item, index) => {
            if (index === 0) {
            setSizeBtnSelected((sizeBtnSelected) => [...sizeBtnSelected, {index: index, value: true, size: item}]);
        } else {
            setSizeBtnSelected((sizeBtnSelected) => [...sizeBtnSelected, {index: index, value: false, size: item}]);
        }
    })
    }

    const itemDescriptions = () => {
        if (itemDetails.type === 'Gi') {
            const giDetails = 'Jacket: ' + itemDetails.description_jacket.replaceAll('~', ' - ') + '\n \n' + 'Pants: ' + itemDetails.description_pants.replaceAll('~', ' - ');
            return giDetails;
        }
    }

    const handleColorBtnPress = (compIndex) => {
        const obj = [...colorBtnSelected];
        
        obj.map((item, index) => {
            if (item.index === compIndex) {
                obj[index].value = true;
                setColorBtnSelected(obj);
                setItemColor(item.color);
                swapPhotos(item.index);
            } else {
                obj[index].value = false;
                setColorBtnSelected(obj);
            }
            }
        )
        handleColorBtnStyle(compIndex);  
    }

    const handleSizeBtnPress = (compIndex) => {
        const obj = [...sizeBtnSelected];
        
        obj.map((item, index) => {
            if (item.index === compIndex) {
                obj[index].value = true;
                setItemSize(item.size);
                setSizeBtnSelected(obj);
            } else {
                obj[index].value = false;
                setSizeBtnSelected(obj);
            }
            }
        )
        handleSizeBtnStyle(compIndex);  
    }

    const handleItemQty = (text) => {
        if (text === '0') {
            setItemQty('1');
        } else {
            setItemQty(text);
        }
    }

    const swapPhotos = (itemIndex) => {
        setPhoto(itemDetails.photo[itemIndex])
    }

    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Modal transparent animationType='fade'>
                <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'rgba(0,0,0,.85)'}}>
                    <View style={{width:'95%', height:'90%', backgroundColor:'#e0e0e0', opacity:1, borderRadius:15, borderWidth:2}}>
                        <View style={{flexDirection:'row', justifyContent:'flex-end', borderBottomLeftRadius:10, borderBottomRightRadius: 10}}>
                            <View style={{padding:'3%'}}>
                                <TouchableOpacity onPress={() => {setAddToCartModal(false)}}>
                                    <FontAwesome name="close" size={25}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <KeyboardAwareScrollView style={{flex:1}}>
                            <View style={{flex:1, justifyContent:'center', padding:'3%'}}>
                                <Card mode='elevated' elevation={10} >
                                    <Card.Cover source={{uri: photo}} resizeMode={'contain'} style={{height:400, width:'100%'}}/>
                                    <Card.Content style={{alignItems:'center', paddingTop:'5%'}}>
                                        <Title>{itemDetails.item_name}</Title>
                                        <Title>${itemDetails.price}</Title>
                                    </Card.Content>
                                </Card>    
                            </View>    
                            <View style={{flex:1, paddingTop:5, paddingBottom:15, paddingLeft:10, paddingRight:10, borderBottomWidth:1}}>
                                <Text style={{textAlign:'center', fontSize:13}}>{itemDescriptions()}</Text>
                            </View>
                                <View style={{flex:1, flexDirection:'row', alignItems:'center', paddingTop:5, paddingBottom:5, paddingLeft:10}}>
                                    <Text style={{fontSize:17, paddingRight:15}}>Color:</Text>
                                    {itemDetails.color.map((color, index) => {
                                        return(
                                            <View key={index} style={{padding:10}}>
                                                <TouchableOpacity key={index} style={handleColorBtnStyle(index)} onPress={() => handleColorBtnPress(index)}>
                                                    <View>
                                                        <Text style={{fontSize:17}}>{color}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                                <View style={{flex:1, flexDirection:'row', alignItems:'center', paddingTop:5, paddingBottom:5, paddingLeft:10}}>
                                    <Text style={{fontSize:17, paddingRight:17}}>Size:</Text>
                                    {itemDetails.size.map((size, index) => {
                                        return(
                                            <View key={index} style={{padding:10}}>
                                                <TouchableOpacity key={index} style={handleSizeBtnStyle(index)} onPress={(e) => {handleSizeBtnPress(index)}}>
                                                    <View>
                                                        <Text style={{fontSize:17}}>{size}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                                <View style={{flex:1, flexDirection:'row', paddingTop:5, paddingBottom:20, paddingLeft:10, alignItems:'center'}}>
                                    <Text style={{fontSize:17, paddingRight:15}}>Quantity:</Text>
                                    <View style={{flex:.18, flexDirection: 'row', height:45}}>
                                        <TextInput
                                            defaultValue={itemQty}
                                            value={itemQty}
                                            style={{flex: 1,
                                                height: 40,
                                                paddingBottom: 5,
                                                borderWidth: 1,
                                                borderColor: 'gray',
                                                color: 'gray',}}
                                            keyboardType='number-pad'
                                            maxLength={1}
                                            activeUnderlineColor="#000000"
                                            returnKeyType="done"
                                            onChangeText={text=>handleItemQty(text)}
                                            //onSubmitEditing={itemQty === '' ? setItemQty('1') : null}
                                            >
                                        </TextInput>
                                    </View>
                                </View>
                                <View style={{flex:1, paddingTop:5, paddingBottom:20, paddingLeft:10}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Total Price: ${totalPrice}</Text>
                                </View>
                                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', paddingBottom:20}}>
                                    <TouchableOpacity style={{flex:.7, padding:10}} onPress={()=> {handleAddItemsToCart()}}>
                                        <View style={{padding:20, backgroundColor:'gray', borderRadius:5, alignItems:'center'}}>
                                            <Text style={{fontSize:17}}>Add Item(s) To Cart</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAwareScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

   const stylesLocal = StyleSheet.create({
    cardContainer: {
        height: '100%',
        width: '100%',
    },
    buttonActive: {
        padding:5, 
        backgroundColor:'gray', 
        borderRadius:5
    },
    buttonInactive: {
        padding:5, 
        backgroundColor:'rgba(169, 169, 169, .2)', 
        borderRadius:5
    },
}) 