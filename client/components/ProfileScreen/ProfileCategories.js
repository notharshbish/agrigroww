import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { profilecategories2 } from '../../data/profilecategories1';

const ProfileCategories = () => {
    return (
        <View style={{marginBottom:2, width:'100%' }}>
            <Text style={styles.titleC}>Documents</Text>
            {profilecategories2.map((m, index) => (
                <View style = {{width : '100%' , display : 'flex' , flexDirection : "row" , justifyContent : 'center'}} key={index}>
                    <View style={{width:'100%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}  >
                        <Image source={{uri: m.image}} style={styles.m}/>
                        <Text style={styles.v}>{m.a}</Text>
                        <Text style={styles.g}>{m.b}</Text>
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
    titleC:{
        margin: 40,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'green',
        color: 'white',
    },
    m: {
        width: 130, 
        height: 100,
        borderWidth: 1.5,
        borderRadius: 20,
    },
    v:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    g:{
        fontSize: 18,
        color: 'green',
    }
})

export default ProfileCategories;