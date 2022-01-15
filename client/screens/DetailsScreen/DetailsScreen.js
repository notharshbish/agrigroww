import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DetailsProduct from '../../components/DetailsScreen/DetailsProduct';

const DetailsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}> Details </Text>    
                </View>
                <DetailsProduct navigation={navigation} />
            </ScrollView>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    titlecontainer:{
        backgroundColor: 'green',
        // marginTop: 35,
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
    // back:{
    //     width:50,
        
    // },
})

export default DetailsScreen;