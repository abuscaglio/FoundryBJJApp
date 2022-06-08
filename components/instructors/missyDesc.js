import { React } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export function MissyDesc() {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.textName}>Missy Danforth</Text>
                </View>
                <Text style={{fontSize: 20, paddingBottom: 10}}>Second Degree Black Belt</Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}Missy is a 2nd degree Brazilian Jiu Jitsu black belt & the ONLY female Black Belt teaching in Montgomery County.
                </Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}With more than 16 years of experience and being one of the first women on the east coast to learn the ‘gentle art,’ 
                Missy runs our highly successful Women’s Only classes.
                </Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textAwards}>
                Memorable Awards:
                </Text>
                <Text style={{fontSize: 15}}>
                *IBJJF World Championships Bronze
                </Text>
                <Text style={styles.textAwardsSub}>
                medalist
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF Pan American Bronze medalist
                </Text>
            </View>
        </ScrollView>
    </View>
)}

   const styles = StyleSheet.create({
    textName : {
        fontSize: 25, 
        textDecorationLine:'underline', 
        paddingBottom:10, 
        fontWeight:'bold'
     },
     textAwards: {
        fontSize: 20, 
        paddingBottom: 5, 
        textDecorationLine:'underline'
     },
     textAwardsSub: {
        fontSize: 15, 
        paddingBottom:5
     }
}) 