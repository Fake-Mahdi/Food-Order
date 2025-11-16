import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
import SuccessLogin from '../../app/SuccessLogin';

export default function LoginComponent({onStatusChange , navigation})
{
    return(
        <View 
        className='h-[500px]'
        style={{backgroundColor:"white"}}
        >
            <View>
            <Text
            style={{fontSize : 18}}
            className='font-quicksand text-gray-600'
            >Email address</Text>
            <TextInput
            style={{fontSize : 18,
            borderBottomWidth: 2,      
            borderBottomColor: '#CBCBCB', 
            
            }}
            placeholder='Enter Your Email Address'
            className='font-quicksand-bold '
            placeholderTextColor={"#000000"}
            />
            </View>

            <View className='mt-[30px]'>
            <Text
            style={{fontSize : 18}}
            className='font-quicksand text-gray-600'
            >Password</Text>
            <TextInput
            style={{fontSize : 18,
            borderBottomWidth: 2,      
            borderBottomColor: '#CBCBCB', 
            
            }}
            placeholder='Enter You Password'
            className='font-quicksand-bold '
            placeholderTextColor={"#000000"}
            />
            </View>

            <View className='flex flex-row item items-center bg-black mt-[30px] mb-[30px] h-[50px] rounded-[24px]'>
                <TouchableOpacity
                className='flex-1 bg-buttonColor h-full items-center justify-center rounded-[24px]'
                activeOpacity={1}
                onPress={()=> {navigation.navigate("Main Page", { screen: "DisplayFoodPage" })}}
                >
                    <Text
                    style={{fontSize : 23}}
                    className='text-white font-quicksand-bold'
                    >Login</Text>
                </TouchableOpacity>
            </View>

            <View className='flex flex-row justify-center items-start'>
                <View>
                    <Text
                    style={{fontSize: 18}}
                    className='text-gray-400 font-quicksand'
                    >Don’t have an account?</Text>
                    </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {onStatusChange("signup")}}
                    >
                        <Text
                        style={{fontSize: 18}}
                        className='text-buttonColor font-quicksand'
                        > Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}