import React from 'react';
import { Image, View, StyleSheet, Text, Pressable } from 'react-native';

const DetailsProduct = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image source={require('../../assets/images/slide3.jpg')} style={styles.image}/>
            </View>
            <View style={styles.titlenquan}>
                <View>
                    <Text style={styles.title}> Basmati Rice </Text>
                    <Text></Text>
                    <Text style={styles.quantity}> 500gm </Text>
                </View>
                <View style={styles.prize}>
                    <Text style={styles.prize}> Rs.100 </Text>
                </View>
            </View>
            <View style={styles.points}>
                <Text style={styles.pttxt}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </Text>
            </View>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('CartScreen')}> 
                <Text style={styles.buttonText}> Add to Cart </Text>
            </Pressable> 
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    imgcontainer:{
        alignItems: 'center',
        margin: 30,
    },    
    image:{
        width: 300,
        height: 300,
        alignItems: 'center',
    },
    titlenquan:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantity:{
        fontSize: 15,
        marginTop: -20,
        marginLeft: 5,
        flexDirection: 'row',
        color: 'gray',
    },
    prize:{
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 6,
    },
    points:{
        margin: 6,
        paddingTop: 10, 
    },
    pttxt:{
        fontSize: 15,
    },
    button:{
        margin: 60,
        padding: 20,
        width: 250,
        backgroundColor: 'green',
        borderRadius: 35,
        alignItems:'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
    },
})

export default DetailsProduct;