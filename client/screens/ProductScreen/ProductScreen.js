import React , {useState, useEffect} from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs, {bottomTabIcons}  from '../../components/HomeScreen/BottomTabs';
import ProductsList from '../../components/ProductScreen/ProductsList';
import axios from 'axios'

const ProductScreen = ({list , navigation, route}) => {

    const {from} = route.params

    const [productList, setProductList] = useState([])

    async function getAllProducts() {
        axios({
            method : 'GET' , 
            url : `${from === 'Seeall' ? 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/farmer/latest' : `https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/product/${route.params.type}`}`
        }).then(res => {
            setProductList(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllProducts()
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>
                    {/* <Image 
                        source={{uri: 'https://img.icons8.com/material-outlined/344/back--v1.png'}} 
                        style={{width: 5, height: 5}}/> */}
                    <Text style={styles.title}> Products </Text>
                    {/* <Text></Text> */}
                </View>
                <ProductsList userId = {route.params.userId} navigation = {navigation} list={productList}/>
            </ScrollView>   
            {/* <BottomTabs icons={bottomTabIcons}/>  */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 0,
    },
    titlecontainer:{
        backgroundColor: 'green',
        // marginTop: 35,
        // borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        margin: 15,
    },
    icon:{
        width:4,
        height:4,
    },
})

export default ProductScreen;