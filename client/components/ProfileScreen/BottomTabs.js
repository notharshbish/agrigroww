import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Dimensions} from 'react-native'

export const bottomTabIcons = [
    {
        icon_name: 'Home',
        active: 'https://img.icons8.com/material/344/home--v5.png',
        inactive: 'https://img.icons8.com/material-outlined/344/home--v2.png',
    },
    {
        icon_name: 'Product',
        active: 'https://img.icons8.com/material/344/product--v1.png',
        inactive: 'https://img.icons8.com/material-outlined/344/product.png',
    },
    {
        icon_name: 'Cart',
        active: 'https://img.icons8.com/material/344/shopping-cart--v1.png',
        inactive: 'https://img.icons8.com/material-outlined/344/shopping-cart--v1.png',
    },
    {
        icon_name: 'User',
        active: 'https://img.icons8.com/material/344/user-male-circle--v1.png',
        inactive: 'https://img.icons8.com/material-outlined/344/user-male-circle.png',
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('User')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.icon_name)}>
            <Image source={{uri: activeTab == icon.icon_name ? icon.active : icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical'/>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon}/>
                ))}
            </View>
        </View>
       
    );
}

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        width: '100%',
        backgroundColor : 'white' , 
        bottom : 0 , 
        zIndex: 999,
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingBottom: '3%',
        height: 40,
        paddingTop: 5,
    },
    icon:{
        width: 30,
        height: 30,
    }
})

export default BottomTabs;