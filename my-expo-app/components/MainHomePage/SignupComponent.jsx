import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform 
} from 'react-native';
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

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const nameHandleChange = (value) => {
        setName(value)
    }
    const emailHandleChange = (value) => {
        setEmail(value)
    }
    const passwordHandlePassword = (value) => {
        setPassword(value)
    }
   const PostRequest = async () => {
    try {
        const response = await fetch("http://192.168.1.6:6747/Signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        });

        console.log("HTTP Status:", response.status); // e.g., 201
        console.log("Status Text:", response.statusText); // e.g., "Created"
        console.log("Headers:", response.headers);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${errorText}`);
        }

        const result = await response.text(); 
        console.log("Success:", result);
        setName("")
        setEmail("")
        setPassword("")

    } catch (error) {
        console.error("Request failed:", error);
    }
};

    
  return(
        <View 
        
        style={{backgroundColor:"white" , minHeight:800}}
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
            onChangeText={(value) => {nameHandleChange(value)}}
            placeholder='Enter Your Full Name...'
            className='font-quicksand-bold '
            placeholderTextColor={"#000000"}
            value={name}
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
            onChangeText={(value) => {emailHandleChange(value)}}
            value={email}
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
            onChangeText={(value) => {passwordHandlePassword(value)}}
            placeholder='Enter You Password'
            className='font-quicksand-bold '
            placeholderTextColor={"#000000"}
            value={password}
            />
            </View>

            <View className='flex flex-row item items-center bg-black mt-[30px] mb-[15px] h-[50px] rounded-[24px]'>
                <TouchableOpacity
                className='flex-1 bg-buttonColor h-full items-center justify-center rounded-[24px]'
                activeOpacity={1}
                onPress={() => {PostRequest()}}
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