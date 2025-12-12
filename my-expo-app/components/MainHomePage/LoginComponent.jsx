import { View, Text, TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
import SuccessLogin from '../../app/SuccessLogin';
import {setLoginStatus , GetLoginStatus} from "../../api/loginStatus"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginComponent({onStatusChange , navigation})
{
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")

    const nameHandleChange = (value) => {
        setName(value)
    }
    const passwordHandlePassword = (value) => {
        setPassword(value)
    }


    const LoginRequest = async () => {
    if (!name || !password) {
        console.log("Sorry, one input is empty");
        return;
    }

    try {
        const response = await fetch("http://192.168.1.6:6747/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, password })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }

        const result = await response.json(); // parse JSON
        console.log("Success:", result); // print token
        const token = result.token
        try {
            await AsyncStorage.setItem('jwtToken', result.token);
            console.log("Token saved successfully");
        } catch (e) {
            console.log('Failed to save token', e);
        }
        
        navigation.navigate("SuccessLogin");


    } catch (error) {
        console.error("Request failed:", error);
    }
};
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
            onChangeText={(value)=>{nameHandleChange(value)}}
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
            onChangeText={(value)=>{passwordHandlePassword(value)}}
            />
            </View>

            <View className='flex flex-row item items-center bg-black mt-[30px] mb-[30px] h-[50px] rounded-[24px]'>
                <TouchableOpacity
                className='flex-1 bg-buttonColor h-full items-center justify-center rounded-[24px]'
                activeOpacity={1}
                onPress={()=> {LoginRequest()}}
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