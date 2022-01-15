import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { ProfileScreen1 } from '../../data/profiledata';

const MyProfile = () => {
    return (
        <View style={{marginBottom:15, width:'100%' }}>
            <Text style={styles.MyInfo}>My Profile</Text>
            {ProfileScreen1.map((x, index) => (
                <View style = {{width : '100%' , display : 'flex' , flexDirection : "row" , justifyContent : 'center'}} key={index}>
                    <View style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}  >
                        <Image source={{uri: x.image}} style={styles.x}/>
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
        margin: 40,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'yellow',
        color: 'green',
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
        color: 'green'
    },
})



export default MyProfile;