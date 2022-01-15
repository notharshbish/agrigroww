import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Carts } from '../../data/cart';

const CartsList = ({ list , navigation }) => {
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
                {Carts.map((list, index) => (
                    <View key={index}  style={styles.txtnimg}>
                        <View>
                            <Image source={{uri: list.imageUrl}} style={styles.image}/>
                        </View>
                        <View style={styles.txtnbtn}>
                            <View style={styles.txtnprize}>
                                <View>
                                    <Text style={styles.listTitle}>{list.product_name}</Text>
                                    <Text style={styles.listquantity}>{list.quantity}</Text>
                                </View>
                                <Text style={styles.listPrize}>{list.product_prize}</Text>
                            </View>  
                            <View style={styles.btnfield}>
                                <Text></Text>
                                <Pressable style={styles.button}>
                                    <TouchableOpacity>
                                    <Text style={styles.buttonText}>+</Text>
                                    </TouchableOpacity>
                                </Pressable>
                            </View>    
                            <Text style={styles.listNumber}>1</Text>
                            <View style={styles.btnfield}>
                                <Text></Text>
                                <Pressable style={styles.button}>
                                <TouchableOpacity>
                                <Text style={styles.buttonText}>-</Text>
                                </TouchableOpacity>
                                </Pressable>    
                                <Text></Text>
                            </View>
                            
                        </View>
                        
                    </View>    
                ))}
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    image:{
        width: 150, 
        height: 150,
        marginLeft: 4,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'black',
        // borderRadius: 10,
    },
    txtnimg: {
        flexDirection: 'row',
        marginTop: 8,
        width: '100%',
        justifyContent:'space-around',
        backgroundColor: '#D5E5CF',
        // borderRadius: 10,
        padding: 10,
    },
    txtnprize:{
        justifyContent:'space-between',
        padding: 25,
        textAlign:'left',
        paddingLeft: 25,
        paddingTop: 5,
        marginLeft: -25,
    },
    listTitle:{
        fontSize: 20,
    },
    listquantity:{
        fontSize: 15,
        paddingTop: 10,
    },
    listPrize: {
        fontSize: 14,
        paddingTop: 10,

        color: 'green',
    },
    listNumber: {
        padding: 2,
        marginTop: 20,
        marginLeft: 10,
        borderRadius: 5,

    },
    txtnbtn:{
        flexDirection: 'row',
        backgroundColor: '#D5E5CF',//'#B5BBB3',//',
        marginRight: 10,
        margin: 20,
        padding: 10,
        marginLeft: 12,
    },
    button:{
        // color: 'green',
        padding: 8,
        // marginRight: 6,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'space-around',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
    },
    btnfield:{
        marginLeft: 15,
    },
})

export default CartsList;