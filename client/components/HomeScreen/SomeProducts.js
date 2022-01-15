import React, {useEffect, useState} from 'react';
import { ScrollView, View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { SOMEPRODUCTS } from '../../data/homescroll';

const SomeProducts = ({navigation, products , userId}) => {

    const getProducts = (type) => {
        navigation.navigate('ProductScreen' , {from : 'SomeProducts', type : type, userId : userId})
    }

    return (
        <View style = {{marginTop : 20, marginHorizontal : 10}}>
            <Text style= {{color : 'green', fontSize : 21, fontWeight : '700', marginLeft : 14 , marginBottom : 15 }}>Shop By Categories</Text>
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
            >
                {!!products.length && products.map((product, index) => (
                    <Pressable key={index}  onPress={() => getProducts(product.product_category)}>
                        <View style = {{position : 'relative' , width : 170, marginHorizontal : 14, display : 'flex' , flexDirection : 'column', alignItems : 'center'}} >
                            <Image source={{uri: product.product_image}} style = {styles.productImage} />
                            <Text style = {styles.productText}>{product.product_category}</Text>
                            {/* <Text style={styles.productPrize}>{products.prize}</Text> */}
                        </View> 
                    </Pressable>   
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    productImage : {
        width : '100%' ,
        borderRadius : 7 ,  
        // marginHorizontal : 20 , 
        height : 100 , 
    } , 
    productText : {
        fontSize :  17 , 
        marginTop : 10 
    }
})

export default SomeProducts;