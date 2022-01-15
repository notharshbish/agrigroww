import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import ThankyouScreen from './screens/ThankyouScreen/ThankyouScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import CheckOutScreen from './screens/CheckOutScreen/CheckOutScreen'
import CartScreen from './screens/CartScreen/CartScreen.js';
import UserScreen from './screens/UserScreen/UserScreen.js';

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (
    <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={screenOptions}
    >
        <Stack.Screen name = 'SplashScreen' component = {SplashScreen} />
        <Stack.Screen name = 'LoginScreen' component = {LoginScreen} />
        <Stack.Screen name = 'RegisterScreen' component = {RegisterScreen} />
        <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
        <Stack.Screen name = 'ProductScreen' component = {ProductScreen} />
        <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen} />
        <Stack.Screen name = 'CartScreen' component = {CartScreen} />
        <Stack.Screen name = 'UserScreen' component = {UserScreen} />
        <Stack.Screen name = 'ThankyouScreen' component = {ThankyouScreen}/>
        <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
        {/* <Stack.Screen name = 'CartScreen' component = {CartScreen}/> */}
        <Stack.Screen name = 'CheckOutScreen' component = {CheckOutScreen}/>
    </Stack.Navigator>
)

export default SignedInStack