import { React } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'expo-vector-icons';
import { NoelDesc } from './noelDesc';
import { MissyDesc } from './missyDesc';
import { FelipeDesc } from './felipeDesc';
import { TyDesc } from './tyDesc';


export function InstDescModal({ modalOpen, setModalOpen, noelModalOpen, missyModalOpen, felipeModalOpen, setNoelModalOpen, setMissyModalOpen, setFelipeModalOpen, setTyModalOpen }) {

    const handleModal = () => {
        setModalOpen(prev => !prev);

        if (noelModalOpen) {
            return setNoelModalOpen(!noelModalOpen)
        } else if (missyModalOpen) {
            return setMissyModalOpen(!missyModalOpen)
        } else if (felipeModalOpen) {
            return setFelipeModalOpen(!felipeModalOpen)
        } else {
            return setTyModalOpen(false)
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.container}> 
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={handleModal}>
                        <FontAwesome name="close" size={25}/>
                    </TouchableOpacity>
                </View>
                { noelModalOpen ? <NoelDesc/> : 
                  missyModalOpen ? <MissyDesc/> :
                  felipeModalOpen ? <FelipeDesc/> :
                  <TyDesc />}
            </View>
        
        </View>
    )}

   const styles = StyleSheet.create({
    background : {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2%'
     },
     container: {
        width: '85%',
        height: '78%',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, .97)',
        display: 'flex',
        flexDirection:'column',
        padding: 25,
     }
}) 