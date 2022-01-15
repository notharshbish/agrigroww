import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { total2 } from '../../data/totaldata';

const Total = () => {
    return (
        <View style={{marginBottom:15, width:'100%' }}>
            <Text style={styles.MyInfo}>Cart Total</Text>
            {total2.map((x, index) => (
                <View style = {{width : '100%' , display : 'flex' , flexDirection : "row" , justifyContent : 'center'}} key={index}>
                    <View style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}  >
                        
                        <Text style={styles.e}>{x.a}</Text>
                        <Text style={styles.f}>{x.b}</Text>
                        
                    </View>
                </View> 
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    MyInfo:{
        margin: 10,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 80,
    },
    x: {
        width: 180, 
        height: 120,
    },
    e:{
        fontSize: 26,
        fontWeight: 'bold',
    },
    f:{
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        
    },
})



export default Total;