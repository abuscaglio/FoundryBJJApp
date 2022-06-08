import { React } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native';



export function FelipeDesc() {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.textName}>Felipe Linhares</Text>
                </View>
                <Text style={{fontSize: 20, paddingBottom: 10}}>First Degree Black Belt</Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}Felipe is the most highly decorated BJJ athlete in MoCo & one of the most highly decorated athletes on the east coast. 
                One of only a handful of Brazilian National Champions teaching in the United States, Felipe offers the very highest level of Jiu Jitsu to his students.
                </Text>
                <Text style={{paddingBottom: 10}}>
                {'\t'}Felipe’s dynamic style & extremely detailed, technical approach to Jiu Jitsu has made many refer to him as the best kept secret in Washington DC.
                </Text>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textAwards}>
                Memorable Awards:
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF Masters Worlds Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Brazilian National Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF World Bronze Medalist
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF Pan American Bronze Medalist
                </Text>
                <Text style={styles.textAwardsSub}>
                *NoGi Pans Bronze Medalist
                </Text>
                <Text style={styles.textAwardsSub}>
                *Sao Paulo Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Curitiba Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Floripa Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Belo Horizonte Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *IBJJF BJJ Pro Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *5x Chicago Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *4x Charlotte Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *3x DC Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *Kansas City Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *4x Atlanta Open Champion
                </Text>
                <Text style={styles.textAwardsSub}>
                *2017 Alliance Athlete of the Year
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