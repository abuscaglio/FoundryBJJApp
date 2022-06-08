import { React, useState, useEffect } from 'react'
import { View, SafeAreaView, Text, Button } from 'react-native';
import firebase from 'firebase';
import { ItemViewHeader, MarketplaceCategories } from './categories';
import { ShopGis } from './gis';

export function Marketplace({setUserData}) {

    let [page, setPage] = useState('Categories');
    let [initLoad, setInitLoad] = useState(false);
    let [merchGis, setMerchGis] = useState([]);
    let [merchRashguards, setMerchRashguards] = useState([]);
    let [merchBelts, setMerchBelts] = useState([]);
    let [merchApparel, setMerchApparel] = useState([]);
    let [merchAccessories, setMerchAccessories] = useState([]);
    let [addToCartModalDisplayed, setAddToCartModalDisplayed] = useState(false);
    let [itemsInCart, setItemsInCart] = useState([]);
    
    let giList = [];

    if (merchGis.length === 0) {
        firebase.firestore().collection('marketplace').get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            let dat =  [documentSnapshot.data()];

            dat.map((item) => {
                if (item.type === 'Gi') {
                    giList = [...giList, item];
                } else if (item.type === 'Rashguard') {
                    setMerchRashguards([...merchRashguards, item]);
                } else if (item.type === 'Belt') {
                    setMerchBelts([...merchBelts, item]);
                } else if (item.type === 'Apparrel') {
                    setMerchApparel([...merchApparel, item]);
                } else {
                    setMerchAccessories([...merchAccessories, item]);
                }
            })
            setMerchGis(giList)
        });
    })
}

    const renderPage = (page) => {
        switch (page) {
            case 'Categories': 
            return(
                <MarketplaceCategories page={page} setPage={setPage}/>
            )
            case 'Gis': 
            return(
                <ShopGis page={page} setPage={setPage} merchGis={merchGis} addToCartModal={addToCartModalDisplayed} setAddToCartModal={setAddToCartModalDisplayed} setUserData={setUserData}/>
            )
            case 3: 
            return(
                <RegisterProfileInfoPage prFormValues={prFormValues}/>
            )
            default: 
          }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#d9d9d9'}}>
            <View style={{flex:1}}> 
                {renderPage(page)}
            </View>
        </SafeAreaView>
        
)}