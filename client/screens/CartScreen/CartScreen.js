import React from 'react';
import { View, Pressable, TouchableOpacity, StyleSheet, Text, ScrollView, Image } from 'react-native';
import BottomTabs, {bottomTabIcons}  from '../../components/HomeScreen/BottomTabs';
import CartsList from '../../components/CartScreen/CartsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Total from '../../components/CartScreen/Total'

const CartScreen = ({list , navigation}) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>                  
                    <Text style={styles.title}> Cart Details </Text>
                </View>
                <CartsList navigation = {navigation} list={list}/>
                <Total/>
                <View style = {{width : '100%' , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                    <Pressable style = {styles.Checkout_btn} onPress= {() => navigation.navigate('CheckOutScreen') }>
                        <TouchableOpacity>
                           <Text style={{fontSize : 22, color : 'white'}}> Proceed To Checkout</Text> 
                           
                        </TouchableOpacity>
                    </Pressable>
                 </View>
            </ScrollView>   
            <BottomTabs icons={bottomTabIcons}/> 
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
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
    icon:{
        width:4,
        height:4,
    },
     Checkout_btn : {
        backgroundColor : 'green',
        paddingVertical: 20,
        paddingHorizontal : 50 ,
        borderRadius : 10,
        marginBottom : 60,
    }
})

export default CartScreen;