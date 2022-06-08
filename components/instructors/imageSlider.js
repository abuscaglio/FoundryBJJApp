import { React, useState, useRef } from 'react'
import { StyleSheet, View, Image, Text, FlatList, Dimensions, SafeAreaView, Modal, TouchableOpacity, ImageBackground } from 'react-native';
import { InstDescModal } from './instDescModal' 


export default function ImageSlider() {

    let [inViewPort, setInViewPort] = useState(0);
    let [modalOpen, setModalOpen] = useState(false);
    let [noelModalOpen, setNoelModalOpen] = useState(false);
    let [missyModalOpen, setMissyModalOpen] = useState(false);
    let [felipeModalOpen, setFelipeModalOpen] = useState(false);
    let [tyModalOpen, setTyModalOpen] = useState(false);

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 60,
      })

    const onViewableItemsChanged = useRef(({ viewableItems, changed }) => {
        setInViewPort(changed[0].index);
    })

    const handleModal = () => {
        setModalOpen(prev => !prev);
    }
    
    let images = [{
            photo: require('../../assets/Instructors/InstNoel.jpg'),
            name: 'Noel Danforth',
            belt: require('../../assets/Instructors/BeltNoel.png'),
            description: '',
            key: '1'
        }, 
        {
            photo: require('../../assets/Instructors/InstMissy.png'),
            name: 'Missy Danforth',
            belt: require('../../assets/Instructors/BeltMissy.png'),
            description: '',
            key: '2'
        }, 
        {
            photo: require('../../assets/Instructors/InstFelipe.jpg'),
            name: 'Felipe Linhares',
            belt: require('../../assets/Instructors/BeltFelipe.png'),
            description: '',
            key: '3'
        }, 
        {
            photo: require('../../assets/Instructors/InstTy.jpg'),
            name: 'Tadiyah Danforth',
            belt: require('../../assets/Instructors/BeltTy.png'),
            description: "",
            key: '4'
    }];

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#262b2a'}}>
            <ImageBackground source={require("../../assets/AllianceEagle.png")} style={styles.background} imageStyle={{opacity:0.16}}>
                <Modal 
                visible={modalOpen} 
                animationType='fade' 
                transparent={true}
                >
                    <InstDescModal 
                    modalOpen={modalOpen} 
                    setModalOpen={setModalOpen}
                    noelModalOpen={noelModalOpen}
                    setNoelModalOpen={setNoelModalOpen}
                    missyModalOpen={missyModalOpen}
                    setMissyModalOpen={setMissyModalOpen}
                    felipeModalOpen={felipeModalOpen}
                    setFelipeModalOpen={setFelipeModalOpen}
                    setTyModalOpen={setTyModalOpen}
                    />
                </Modal>
                <View style={{flex:.1, justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{color:'gray'}}>(TAP PHOTO FOR MORE INFORMATION)</Text>
                </View>
                <View style={styles.container}>
                    <FlatList
                    data={images}
                    keyExtractor={item => item.key}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onViewableItemsChanged={onViewableItemsChanged.current}
                    viewabilityConfig={viewabilityConfig.current}
                    renderItem={({item, index}) => {
                        return( 
                            <View style={{ width, alignItems:'center'}}>
                                <TouchableOpacity onPress={ () => {
                                item.key === '1' ? setNoelModalOpen(true) :
                                item.key === '2' ? setMissyModalOpen(true) :
                                item.key === '3' ? setFelipeModalOpen(true) :
                                setTyModalOpen(true);
                                handleModal();
                                }}>
                                <Image 
                                source={item.photo} 
                                style={styles.image}
                                />
                                </TouchableOpacity>
                            <View style={{paddingTop: 20}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', color:'gray' }}>{item.name}</Text>
                            </View>
                            <View style={{paddingTop: 20}}>
                                <Image
                                source={item.belt}
                            />
                            </View>
                            </View>
                        )}}
                    />
                    <View style={styles.navDots}>
                        {images.map((image, index) => {
                            return(
                                <View key={image.key} style={[styles.dot, index === inViewPort ? styles.activeNavDot : undefined] } />
                        )})}
                    </View>
                </View>
            </ImageBackground>
       </SafeAreaView>
    )
}

   const {width, height} = Dimensions.get('screen');
   const itemWidth = width * 0.70;
   const itemHeight = itemWidth * 1.47;

   const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: itemWidth,
        height: itemHeight,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    navDots: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        width: itemWidth,
        paddingBottom: 15
    },
    activeNavDot: {
        backgroundColor: 'white',
        opacity: 1
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: 'white',
        borderWidth: 1,
        marginHorizontal: 10,
        opacity: .25
    },
    background: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        },
    }) 

