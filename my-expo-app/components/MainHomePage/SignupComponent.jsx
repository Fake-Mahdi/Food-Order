import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { useState , useEffect } from 'react';
import {setLoginStatus , GetLoginStatus} from "../../api/loginStatus"

export default function SignupComponent({onStatusChange})
{

    const LoginStatushandle = ()=>
    {
        const status = GetLoginStatus()
        let new_sttaus = !status
        setLoginStatus(new_sttaus)
        console.log(new_sttaus)
        return !status
    }
    
    return(
        <View 
        className='h-[500px]'
        style={{backgroundColor:"white"}}
        >
            <View >
            <Text
            style={{fontSize : 18}}
            className='font-quicksand text-gray-600'
            >Full Name</Text>
            <TextInput
            style={{fontSize : 18,
            borderBottomWidth: 2,      
            borderBottomColor: '#CBCBCB', 
            
            }}
            placeholder='Enter Your Full Name...'
            className='font-quicksand-bold '
            placeholderTextColor={"#000000"}
            />
            </View>

            <View className='mt-[30px]'>
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

            <View className='flex flex-row item items-center bg-black mt-[30px] mb-[15px] h-[50px] rounded-[24px]'>
                <TouchableOpacity
                className='flex-1 bg-buttonColor h-full items-center justify-center rounded-[24px]'
                activeOpacity={1}
                onPress={() => {LoginStatushandle()}}
                >
                    <Text
                    style={{fontSize : 18}}
                    className='text-white font-quicksand-bold'
                    >Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View className='flex flex-row justify-center items-start'>
                <View>
                    <Text
                    style={{fontSize: 18}}
                    className='text-gray-400 font-quicksand'
                    >Already have an account?</Text>
                    </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {onStatusChange("login")}}
                    >
                        <Text
                        style={{fontSize: 18}}
                        className='text-yellow-500 font-quicksand'
                        >  Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}    