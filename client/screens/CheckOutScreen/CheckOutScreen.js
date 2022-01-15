import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckOutForm from '../../components/CheckOutScreen/CheckOutForm.js';
import Header from '../../components/CheckOutScreen/Header.js'

const CheckOutScreen = ({ navigation , route}) => (
    <ScrollView>
        <SafeAreaView>
        <Header/>
           <View>
                <View style={styles.container}>
                 <Image source = {require('../../assets/images/home/green.png')} style={styles.logo}/>
                </View>
           </View>
           <CheckOutForm userId = {route.params.userId} navigation={navigation}/>
        </SafeAreaView>   
    </ScrollView>    
)

const styles = StyleSheet.create({
    container: {
        marginTop:40,
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

export default CheckOutScreen;