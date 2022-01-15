import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const CheckOutForm = ({ navigation , userId }) => {
    const CheckOutFormSchema = Yup.object().shape({
        contact: Yup.string().email().required('Enter your Contact Number'),
        Address: Yup.string().required().min(2, 'Enter your billing address'), 
    })

    return (
        <View style={styles.wrapper}> 
            <Formik
                initialValues={{ name:'', contact: '', address: '', area: '', city: '', state: ''}}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={CheckOutFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                <View style= {[styles.NameField,
                {
                    borderColor: 
                        values.name.length < 1 || Validator.validate(values.name) ? 'black' : 'green'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Billing Name'
                        autoCapitalize='words'
                        // keyboardType='name'
                        // textContentType='name'
                        autoFocus={true}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                    />
                </View>
                <View style= {[styles.contactField,
                {
                    borderColor: 
                        values.contact.length < 1 || Validator.validate(values.contact) ? 'black' : 'green'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Contact'
                        autoCapitalize='words'
                        // keyboardType='contact'
                        // textContentType='contact'
                        autoFocus={true}
                        onChangeText={handleChange('contact')}
                        onBlur={handleBlur('contact')}
                        value={values.contact}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.address.length || values.address.length >= 2
                        ? 'grey'
                        : 'green',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Address (Line1)'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={false}
                        // textContentType='address'
                        onChangeText={handleChange('address')}
                        onBlur={handleBlur('address')}
                        value={values.address}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.area.length || values.area.length >= 2
                        ? 'grey'
                        : 'green',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Area'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={false}
                        // textContentType='area'
                        onChangeText={handleChange('area')}
                        onBlur={handleBlur('area')}
                        value={values.area}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.address.length || values.address.length >= 2
                        ? 'grey'
                        : 'green',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='City'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={false}
                        // textContentType='city'
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.address.length || values.address.length >= 2
                        ? 'grey'
                        : 'green',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='State'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={false}
                        // textContentType='state'
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        value={values.state}
                    />
                </View>
                <Pressable style={styles.button(isValid)}
                            onPress={() => navigation.navigate('ThankyouScreen' , {userId : userId})}>
                    <Text style={styles.buttonText}>Confirm Order</Text>
                </Pressable>
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
    contactField:{
        borderRadius: 5,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 20,
        marginBottom: 60,
        borderWidth: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    NameField:{
        borderRadius: 5,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 1,
        marginBottom: 10,
        borderWidth: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    inputField:{
        borderRadius: 5,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 0,
        borderWidth: 1,
        justifyContent: 'center',
        fontSize: 15,
    },
    button: isValid => ({
        backgroundColor: '#009a00',
        borderRadius: 8,
        padding:15,
        width: 200,
        marginTop:50,
        marginHorizontal: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
    },
    reviewcontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20,
    }
})

export default CheckOutForm;