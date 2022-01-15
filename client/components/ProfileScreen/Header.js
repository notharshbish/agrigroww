import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bg}>
                <Image source={require('../../assets/images/home/new_appbar.png')} style={StyleSheet.logo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
    },
    logo: {
        // width: 15,
        // height: 10,
    },
    bg: {
        backgroundColor: 'green',
        padding: 6,
        alignItems:'center',
        justifyContent: 'center',
    }
})

export default Header;