import * as React from "react";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignedInStack from './navigation'
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import ThankyouScreen from './screens/ThankyouScreen/ThankyouScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import CheckOutScreen from './screens/CheckOutScreen/CheckOutScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
// import { Tab } from "react-native-elements/dist/tab/Tab";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from './screens/CartScreen/CartScreen.js';
import UserScreen from './screens/UserScreen/UserScreen.js';

const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

// export default App 
const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
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
            {/* <Stack.Screen name = 'CartScreen' component = {CartScreen} /> */}
            <Stack.Screen name = 'UserScreen' component = {UserScreen} />
            <Stack.Screen name = 'ThankyouScreen' component = {ThankyouScreen}/>
            <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
            <Stack.Screen name = 'CartScreen' component = {CartScreen}/>
            <Stack.Screen name = 'CheckOutScreen' component = {CheckOutScreen}/>
        </Stack.Navigator>  
      </NavigationContainer >
  )
}