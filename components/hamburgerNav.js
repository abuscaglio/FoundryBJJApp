import { React } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FontAwesome } from 'expo-vector-icons';



export function HamburgerNav() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#464d4c'}}>
         <View style={{paddingTop:8, paddingLeft:10}}>
         <FontAwesome name='navicon' size={30} color='blue' onPress={() => {Actions.drawerClose()}}/>
         </View>
         <View style={{flex: .85, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../assets/favicon.png')} style={{borderRadius: 100, width: '50%', height:'50%'}}/>
         <View style={{paddingTop:15}}> 
            <Text>Placeholder Name</Text>
         </View>  
         </View>
         <View style={{flex: 1, justifyContent:'space-between', alignItems:'stretch', flexDirection:'column-reverse'}}>
            <TouchableOpacity style={{ alignItems:'flex-end', justifyContent:'center', height:'18%', borderWidth:1}}>
               <Text style={{fontSize: 25, paddingRight: '5%'}}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'flex-end', justifyContent:'center', height:'18%', borderWidth:1}}>
               <Text style={{fontSize: 25, paddingRight: '5%'}}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'flex-end', justifyContent:'center', height:'18%', borderWidth:1}}>
               <Text style={{fontSize: 25, paddingRight: '5%'}}>Gym Schedule</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'flex-end', justifyContent:'center', height:'18%', borderWidth:1}}>
               <Text style={{fontSize: 25, paddingRight: '5%'}}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'flex-end', justifyContent:'center', height:'18%', borderWidth:1}}>
               <Text style={{fontSize: 25, paddingRight: '5%'}}>Hub Page</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
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
     }
}) 