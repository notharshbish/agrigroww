import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import Header from '../../components/ProfileScreen/Header';
import MyProfile from '../../components/ProfileScreen/MyProfile';
import ProfileCategories from '../../components/ProfileScreen/ProfileCategories';
import Documents2 from '../../components/ProfileScreen/Documents2'
import Documents3 from '../../components/ProfileScreen/Documents3'
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
    return (
        <ScrollView>
        <SafeAreaView>
            <Header />
            <MyProfile />
            <ProfileCategories/>
            <View style = {{width : '100%' , marginTop : 3 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.upload_btn} onPress= {() => console.log("upload") }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 18, color : 'white'}}> Upload</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
            <Documents2/>
            <View style = {{width : '100%' , marginTop : 3 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.upload_btn} onPress= {() => console.log("upload") }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 18, color : 'white'}}> Upload</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
            <Documents3/>
            <View style = {{width : '100%' , marginTop : 3 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.upload_btn} onPress= {() => console.log("upload") }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 18, color : 'white'}}> Upload</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
            <View style = {{width : '100%' , marginTop : 30 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.add_btn} onPress= {() => console.log("Add") }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 18, color : 'black'}}> +Add more documents+</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
            <View style = {{width : '100%' , marginTop : 60 , display : 'flex' , flexDirection : 'row', justifyContent : 'center'}}>
                <Pressable style = {styles.logout_btn} onPress= {() => console.log("Logout") }>
                    <TouchableOpacity>
                        <Text style={{fontSize : 22, color : 'white'}}> Log Out</Text> 
                    </TouchableOpacity>
                </Pressable>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    upload_btn : {
        backgroundColor : '#9746ff',
        paddingVertical: 2,
        paddingHorizontal : 30 , 
        borderRadius : 10 
    },
    add_btn : {
        backgroundColor : 'yellow',
        paddingVertical: 3,
        paddingHorizontal : 30 , 
        borderRadius : 14
    },
    logout_btn : {
        backgroundColor : 'green',
        paddingVertical: 20,
        paddingHorizontal : 90 ,
        borderRadius : 10 
    }
})

