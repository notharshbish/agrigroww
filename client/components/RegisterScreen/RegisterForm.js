import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'

const RegisterForm = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("Farmer");

    const RegisterFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        Password: Yup.string().required().min(8, 'Your password has to have at least 8 characters'), 
    })


    const registerUser = (name,email,password) => {
        axios({
            method : 'POST' , 
            url : `https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/user/register/${selectedValue}` , 
            data : {
                name : name , 
                email : email , 
                password: password
            }
        }).then(res => {
            navigation.navigate('LoginScreen', {type: selectedValue})
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={styles.wrapper}> 
            <Formik
                initialValues={{ email: '', username: '', password: ''}}
                onSubmit={values => {
                    registerUser(values.username , values.email, values.password)
                }}
                validationSchema={RegisterFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='E-mail'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        values.username.length < 1 || values.username.length >= 4 ? 'black' : 'red'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Username'
                        autoCapitalize='none'
                        // keyboardType='Username'
                        textContentType='username'
                        // autoFocus={true}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.password.length || values.password.length >= 8
                        ? 'black'
                        : 'red',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <View style = {{width : 200, display : 'flex', flexDirection : 'row' , justifyContent : 'space-between'}}>
                    {
                        selectedValue === "Farmer"? (
                            <>
                                <Pressable onPress={() => {setSelectedValue("Farmer")}} style = {{display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                    <View style = {{backgroundColor : 'green', borderTopStartRadius : 8 , borderBottomStartRadius : 8 , padding : 10 , display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialCommunityIcons name="fruit-watermelon" size={24} color="white" />
                                        <Text style = {{marginLeft : 5, fontWeight : '700' , color : `${'white'}`}}>Farmer</Text>
                                    </View>
                                </Pressable>
                                <Pressable style ={{ display : 'flex' , flexDirection: 'row', alignItems: 'center'}} onPress = {() => setSelectedValue("Business")}>
                                    <View style = {{backgroundColor : `${'lightgrey'}`, padding : 10 , borderTopEndRadius : 8, borderBottomEndRadius : 8 , paddingLeft: 10, display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialIcons name="attach-money" size={24} color="black" />
                                        <Text style = {{marginLeft : 5, fontWeight : '700', color : `${'black'}`}}>Business</Text>
                                    </View>
                                </Pressable>
                            </>
                        ) : (
                            <>
                                <Pressable onPress={() => {setSelectedValue("Farmer")}} style = {{display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                    <View style = {{backgroundColor : `${'lightgrey'}` , borderTopStartRadius : 8 , borderBottomStartRadius : 8 , padding : 10 , display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialCommunityIcons name="fruit-watermelon" size={24} color="black" />
                                        <Text style = {{marginLeft : 5, fontWeight : '700' , color : `${'black'}`}}>Farmer</Text>
                                    </View>
                                </Pressable>
                                <Pressable style ={{ display : 'flex' , flexDirection: 'row', alignItems: 'center'}} onPress = {() => setSelectedValue("Business")}>
                                    <View style = {{backgroundColor : `${'green'}`, padding : 10 , borderTopEndRadius : 8, borderBottomEndRadius : 8 , paddingLeft: 10, display : 'flex' , flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialIcons name="attach-money" size={24} color="white" />
                                        <Text style = {{marginLeft : 5, fontWeight : '700', color : `${'white'}`}}>Business</Text>
                                    </View>
                                </Pressable>
                            </>
                        )
                    }
                </View>
                <Pressable style={styles.button(isValid)}
                            onPress={() => registerUser(values.username,values.email,values.password)}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </Pressable>
                <View style={styles.logincontainer}>
                    <Text style = {{width : 160}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color: '#6BB0F5'}}> Login </Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        alignItems: 'center',
    },
    inputField:{
        borderRadius: 16,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 15,
        borderWidth: 1,
        width: 320,
        justifyContent: 'center',
        fontSize: 15,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#668000' : '#539100',
        borderRadius: 20,
        padding:15,
        width: 200,
        marginTop:30,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 25,
    },
    logincontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})

export default RegisterForm;