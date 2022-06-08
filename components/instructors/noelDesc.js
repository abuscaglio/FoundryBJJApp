import { React } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';



export function NoelDesc() {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.textName}>Noel Danforth</Text>
                </View>
                <Text style={{fontSize: 20, paddingBottom: 10}}>Third Degree Black Belt</Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}A 3rd Degree black belt under Alliance, Noel has been training Brazilian Jiu Jitsu for 22 years and is 
                among the first generation of Americans to learn Brazilian Jiu Jitsu on the East Coast. His extremely technical 
                & efficient approach to the art has made him a highly sought after instructor with students traveling from all 
                over the Mid-Atlantic Region.
                </Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}Noel has fought successfully at the highest level and with a rare distinction of never having had his guard 
                passed in competition or being submitted in his weight class, despite consistently battling against competitors half his age.
                </Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textAwards}>
                Memorable Awards:
                </Text>
                <Text style={styles.textAwardsSub}>
                *Judo Black Belt
                </Text>
                <Text style={styles.textAwardsSub}>
                *10x Pan American Competitor
                </Text>
                <Text style={{fontSize: 15}}>
                *2X IBJJF Worlds Championship
                </Text>
                <Text style={styles.textAwardsSub}>
                Competitor 
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF No-Gi Worlds Competitor 
                </Text>
                <Text style={styles.textAwardsSub}>
                *MS Education
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