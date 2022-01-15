import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import RegisterForm from '../../components/RegisterScreen/RegisterForm';

const RegisterScreen = ({ navigation }) => (
    <View style={styles.container}>
        <View>
            <Image source = {require('../../assets/images/logo.png')} style={styles.logo}/>
        </View>
        <RegisterForm navigation={navigation}/>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 150,
        paddingHorizontal: 150,
        // alignItems:'center',
        // justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    }
})

export default RegisterScreen;