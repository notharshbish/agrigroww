import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/ProfileScreen/Header';
import MyProfile from '../../components/ProfileScreen/MyProfile';
import ProfileCategories from '../../components/ProfileScreen/ProfileCategories';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const ThankyouScreen = ({navigation , route}) => {
    return (
        <ScrollView>
        <SafeAreaView>
        <View style={styles.titlecontainer}>                  
                    <Text style={styles.title}> Thank You </Text>
                </View>
                <View style = {{width : '100%' , marginTop : 160 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Image source = {require('../../assets/images/home/green.png')} style={styles.logo}/>
                </View>
                <View style = {{width : '100%' , marginTop : 10 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>                  
                    <Text style={styles.thankyoutitle}> Your order has been recieved! </Text>
                    </View>
                    <View style = {{width : '100%' , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>                  
                    <Text style={styles.thankyoutitle}> We will reach you shortly. </Text>
                    </View>
            <View style = {{width : '100%' , marginTop : 3 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.upload_btn} onPress= {() => navigation.navigate('HomeScreen' , {userId : route.params.userId}) }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 28, color : 'white'}}> Continue Farming</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
            <View style = {{width : '100%' , marginTop : 10 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>                  
                    <Text style={styles.thankyoutitle2}> by clicking this, you'll be redirected to home </Text>
                    </View>
        </SafeAreaView>
        </ScrollView>
    );
}

export default ThankyouScreen;

const styles = StyleSheet.create({
    upload_btn : {
        backgroundColor : 'green',
        paddingVertical: 12,
        paddingHorizontal : 25 , 
        borderRadius : 10,
        marginTop : 120
    },
    titlecontainer:{
        backgroundColor: 'green',
        marginTop: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
    thankyoutitle:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
        margin: 1
    },
    thankyoutitle2:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        color: 'grey',
        textAlign: 'center',
        fontStyle: 'italic',
        margin: 1
    },
    logo: {
        width: 190,
        height: 190,
        marginBottom:20,
    }
})
