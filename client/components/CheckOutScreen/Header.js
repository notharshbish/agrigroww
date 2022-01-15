import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.titlecontainer}>                  
                    <Text style={styles.title}> Check Out </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
    },
    titlecontainer:{
        backgroundColor: '#009a00',
        marginTop: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        margin: 20,
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