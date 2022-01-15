import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { POPULARPRODUCTS } from '../../data/popularproducts';
import { Divider } from 'react-native-elements';

const PopularProducts = ({products}) => {
    return (
        // <View>
        //     {/* <Text style={styles.titlePP}>Latest Products</Text> */}
        //     <ScrollView  horizontal
        //      showsHorizontalScrollIndicator={false}
        //     >
        //         {POPULARPRODUCTS.map((post, index) => (
        //             <View key={index}>
        //                 <Image source={{uri: post.imageUrl}} style={styles.post}/>
        //             </View>
        //         ))}


        //     </ScrollView>
        // </View>
        <View style={{position : 'relative' , marginBottom: 0, paddingHorizontal : 10}}>
            <ScrollView
             horizontal
             style = {{marginHorizontal : 0 , paddingHorizontal : 0}}
             showsHorizontalScrollIndicator={false}
            >
                {!!products.length && products.slice(-7).map((product, index) => (
                    <View style = {{display  : 'flex' , flexDirection : 'column', width : 220, marginHorizontal : 14}} key={index}>
                        <Image source={{uri: product.product_img}} style={styles.post}/>
                        <View style={styles.title}>
                            <Text style={styles.postTitle}>{product.product_name}</Text>
                            <Text style={styles.postQuantity}>{product.product_quantity}</Text>
                        </View>
                        <Text style={styles.postPrize}>Rs. {product.product_price}</Text>
                    </View>    
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titlePP:{
        margin: 18,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    post:{
        width: '100%', 
        height: 150,
        // marginHorizontal: 16,
        borderWidth: 2,
        // margin: 10,
        borderRadius: 6,
    },
    title: {
        position : 'relative' , 
        flexDirection: 'row',
        alignItems : 'center', 
        flex : 1 , 
        justifyContent : 'space-between'
        // justifyContent: 'space-between',
    },
    postTitle:{
        fontSize: 20,
        // marginLeft: 20,
        fontWeight : '700' , 
        color: 'black',
        paddingTop : 5,
    },
    postQuantity:{
        fontSize: 15,
        // marginLeft: 17,
        // padding: 5,
        color: 'gray',
    },
    postPrize:{
        fontSize: 16,
        // marginLeft: 17,
        color: 'green',
        fontWeight : '600' , 
        marginBottom: 15,
        padding: 5,
        // marginBottom: 40,
    }
})

export default PopularProducts;