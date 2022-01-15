import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, Image, View, TouchableOpacity} from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen';

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>AgriGroww</Text>
            <Text style={styles.subtitle}>Quality is the best business plan!!</Text>
            <Image style={styles.logo} source={require('../../assets/images/splash/splash.png')}/>
            <View style={styles.btncontainer}>
                {/* <Button
                    title= " Continue "
                    style={styles.button}
                    // onPress = {() => navigation('LoginScreen')}
                /> */}
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.button}>
                    <Text style={styles.btntxt}> Continue </Text>
                </TouchableOpacity>
                {/* <Pressable style={styles.button} onPress={onPress}>
                    <Text> Continue </Text>
                </Pressable> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems:'center',
        // justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 50,
        color: 'green',
        fontWeight: 'bold',
        // fontFamily: "Arial",
        // fontFamily: 'PatuaOne-Regular.ttf'
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
        // fontFamily: "Arial",
        // fontFamily: 'PatuaOne-Regular.ttf'
    },
    logo: {
        width:390,
        height:390,
        marginTop:25,
    },
    btncontainer:{
        margin: 80,
        borderRadius: 10,
    },
    button:{
        padding: 20,
        width: 300,
        backgroundColor: 'green',
        borderRadius: 35,
        alignItems:'center',
    },
    btntxt:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
})

export default SplashScreen;
