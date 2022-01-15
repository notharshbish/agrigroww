import { NavigationContainer } from '@react-navigation/native';
import {React, useState} from 'react';
import { View,TouchableOpacity, StyleSheet, ScrollView, Image, Text, Pressable, AppState } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { PRODUCTS } from '../../data/product';
import { AntDesign } from '@expo/vector-icons';
import { State } from 'react-native-gesture-handler';
import axios from 'axios';

const ProductsList = ({ list , navigation , userId }) => {

    const [added, setAdded] = useState(false)

    const addedToCart = (product) => {
        console.log('Hweak;wdjaojwdhiowdaihio')
        axios({
            method : 'POST' , 
            url : 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/cart/add' , 
            data : {
                userId : userId , 
                productId : product.product_id
            }
        })
    }


    return (
        <View style = {{paddingVertical : 12}}>
            {!!list.length && list.map((item,index) => (
                <View key = {index} style = {{width : '100%' , display : 'flex', flexDirection : 'row', paddingVertical : 10}}>
                    <Image source = {{uri : item.product_img}} style = {{width : 100, height : 100, marginLeft : 14}}/>
                    <View style = {{flex : 1 , display : 'flex', flexDirection :'column', marginHorizontal : 15, justifyContent : 'space-between', paddingVertical : 5}}>
                        <View>
                            <View style ={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                                <Text style = {{fontSize : 16, fontWeight : '700'}}>{item.product_name}</Text>
                                <Text style = {{marginLeft : 5 , color : '#a3a0a2cc', fontSize : 13}}>{item.product_type}</Text>
                            </View>
                            <Text style = {{marginTop : 2, color : 'grey'}}>{item.product_quantity}</Text>
                            {/* <Text style = {{marginTop : 2}}>Rs. {item.product_price}</Text> */}
                        </View>
                        <View style = {{display : 'flex', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                            <Text style = {{fontWeight : '700'}}>
                                Rs. {item.product_price}
                            </Text>
                            {!added ? (
                                <Pressable onPress = {() => addedToCart(item)} style = {{backgroundColor : 'green', padding: 7, borderRadius : 10 , display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                                    <TouchableOpacity style = {{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                                        <AntDesign name="shoppingcart" size={24} color="white" />
                                        <Text style ={{color : 'white', marginLeft : 7}}>Add to cart</Text>
                                    </TouchableOpacity>
                                </Pressable>
                            ): (
                                <Text style = {{color : 'black', padding : 7}}>Added to cart</Text>
                            )}
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}


export default ProductsList;