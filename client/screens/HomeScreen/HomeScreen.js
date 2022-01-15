import {React, useState, useEffect} from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Categories from '../../components/HomeScreen/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/HomeScreen/Header';
import PopularProducts from '../../components/HomeScreen/PopularProducts';
import SomeProducts from '../../components/HomeScreen/SomeProducts';
// import axios from '../../axios.js'
import axios from 'axios' 

const HomeScreen = ({navigation , route}) => {
    // console.log(HomeScreen)

    const [productList , setProductList] = useState([])
    const  [latestProducts, setLatestProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [onLease, setOnLease] = useState([])
    
    
    async function getLatestProducts() {
        await axios({
            method : 'GET' , 
            url : 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/farmer/latest/'
        }).then(res => {
            setLatestProducts(res.data)
        }).catch(err => {
            throw err
        })
    }

    async function getCartProducts () {
        axios({
            method : 'GET' , 
            url : `https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/cart/${route.params.userId}`
        }).then(res => setCartProducts(res.data))
    }

    async function getCategories () {
        console.log('Yeh kaam karra hai')
        axios({
            method : 'GET' , 
            url : 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/farmer/category/' 
        }).then(res => {
            setProductList(res.data)
        }).catch(err => {
            throw err
        })
    }

    async function getTechProducts() {
        axios({
            method : 'GET' , 
            url : 'https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/product/tech' 
        }).then(res => {
            setOnLease(res.data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        getCategories()
        getLatestProducts()
        getCartProducts()
        getTechProducts()
    }, [])

    return (
        <SafeAreaView style = {{flex : 1, position : 'relative'}}>
            <ScrollView>
                <Header />
                <Categories />
               {!!productList.length &&  (<SomeProducts userId = {route.params.userId} navigation = {navigation} products = {productList} />)}
                <View style={styles.title}>
                    <Text style={styles.titlePP}>Latest products</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', {from : 'Seeall' , userId : route.params.userId})}>
                        <Text style={{color: '#6BB0F5', justifyContent: 'center', marginTop: 25, marginRight: 16,}}> See all </Text>
                    </TouchableOpacity>
                </View>
                <PopularProducts products = {latestProducts}/>
                <View style={styles.title}>
                    <Text style={styles.titlePP}>My Cart</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('CheckOutScreen', {final : JSON.stringify(cartProducts) , userId : route.params.userId})}>
                        <Text style={{color: '#6BB0F5', justifyContent: 'center', marginTop: 25, marginRight: 16,}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
                {cartProducts.length === 0 ? (<Text style = {{width : '100%', textAlign : 'center', marginBottom : 7, color : '#c2c2c2'}}>Oops! Looks like your cart is empty</Text>) : null}
                <PopularProducts products = {cartProducts} /> 
                <View style={styles.title}>
                    <Text style={styles.titlePP}>Available On Lease</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', {from : 'Seeall' , userId : route.params.userId})}>
                        <Text style={{color: '#6BB0F5', justifyContent: 'center', marginTop: 25, marginRight: 16,}}>See all</Text>
                    </TouchableOpacity>
                </View>
                {/* {cartProducts.length === 0 ? (<Text style = {{width : '100%', textAlign : 'center', marginBottom : 7, color : '#c2c2c2'}}>Oops! Looks like your cart is empty</Text>) : null} */}
                <PopularProducts products = {onLease} /> 
            </ScrollView>    
            {/* <BottomTabs icons={bottomTabIcons}/> */}
            {/* <Tabs /> */}
            {/* <BottomNavigation />  */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    titlePP:{
        marginVertical : 14,
        fontSize: 21,
        fontWeight: '700',
        marginLeft: 24,
        color: 'green',
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default HomeScreen;