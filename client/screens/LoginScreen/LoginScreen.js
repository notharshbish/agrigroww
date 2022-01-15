import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import LoginForm from '../../components/LoginScreen/LoginForm';

const LoginScreen = ({ navigation ,route }) => {
    
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Image source = {require('../../assets/images/logo.png')} style={styles.logo}/>
                </View>
            </View>
            <LoginForm route = {route} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:120,
        // flex:1,
        backgroundColor: 'white',
        // paddingTop: 150,
        // paddingHorizontal: 150,
        alignItems:'center',
        justifyContent: 'center',
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom:20,
    }
})

export default LoginScreen;