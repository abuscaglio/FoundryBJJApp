import { React } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';



export function TyDesc() {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.textName}>Tadiyah Danforth</Text>
                </View>
                <Text style={{fontSize: 20, paddingBottom: 10}}>Black Belt</Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}Tadiyah has been training and competing all over the world for many years and is the head instructor of our highly successful Kids Program 
                & Kids competition team.
                </Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}One of the most decorated athletes in the mid-atlantic region, Tadiyah is also available for single & group private lessons.
                </Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textAwards}>
                Memorable Awards:
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF World Silver medalist
                </Text>
                <Text style={{fontSize: 15}}>
                *2x IBJJF Pan American Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                (NoGi)
                </Text>
                <Text style={{fontSize: 15}}>
                *IBJJF Pan American Bronze Medalist
                </Text>
                <Text style={styles.textAwardsSub}>
                (Gi)
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF BJJ Pro Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF Jiu Jitsu Con Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *2x New York Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *DC Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Chicago Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Kansas City Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Atlanta Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *2x Fight To Win Pro Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Finishers SuperFight Winner
                </Text>
                <Text style={styles.textAwardsSub}>
                *Many x US Grappling Champion
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