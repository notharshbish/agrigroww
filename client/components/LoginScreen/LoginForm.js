import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import axios from 'axios';


const LoginForm = ({ navigation, route }) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        Password: Yup.string().required().min(8, 'Your password has to have at least 8 characters'), 
    })

    const handleLogin = (email, password) => {
        axios({
            method : 'POST' , 
            url : `https://c9a9-2409-4042-4cc0-66e4-390f-16b4-5c9b-90e.ngrok.io/user/login/Farmer` ,
            data : {
                email : email
            }
        }).then(res => {
            console.log(res.data.id)
            navigation.navigate('HomeScreen' , {userId : res.data.id})
        }).catch(err => console.log(err))
    }

    return (
        <View style={styles.wrapper}> 
            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => {
                    
                }}
                validationSchema={LoginFormSchema}
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
                <Pressable style={styles.button(isValid)}
                            onPress={() => handleLogin(values.email, values.password)}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
                <View style={styles.signupcontainer}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{color: '#6BB0F5'}}> SignUp </Text>
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
        padding: 20,
    },
    inputField:{
        borderRadius: 16,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 30,
        borderWidth: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#668000' : '#539100',
        borderRadius: 20,
        padding:15,
        width: 200,
        marginTop:100,
        marginHorizontal: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 25,
    },
    signupcontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default LoginForm;