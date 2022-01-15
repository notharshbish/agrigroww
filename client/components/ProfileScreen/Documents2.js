import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { documentsa } from '../../data/documents2';

const documents2 = () => {
    return (
        <View style={{marginBottom:2, width:'100%' }}>
            <Text style={styles.titleC}></Text>
            {documentsa.map((m, index) => (
                <View style = {{width : '100%' , display : 'flex' , flexDirection : "row" , justifyContent : 'center'}} key={index}>
                    <View style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}  >
                        <Image source={{uri: m.image}} style={styles.m}/>
                        <Text style={styles.r}>{m.a}</Text>
                        <Text style={styles.k}>{m.b}</Text>
                    </View> 
                </View>
                
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 6,
    },
    m: {
        width: 130, 
        height: 100,
        borderWidth: 1.5,
        borderRadius: 20,
        marginTop: 25,
    },
    r:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    k:{
        fontSize: 18,
        color: 'green',
    }
})

export default documents2;