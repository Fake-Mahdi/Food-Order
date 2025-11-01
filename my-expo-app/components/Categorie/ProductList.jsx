import { View, Text, TouchableOpacity,TextInput , ScrollView , Image} from 'react-native';
import { useState } from 'react';


export default function ProductList(){  
    return(
        
        <View className='flex-col'>
            <View className='bg-customRed w-full h-[190px] rounded-[24px] flex flex-row overflow-hidden mb-6'>
                <View className='flex-1 relative rounded-[24px]'>
                    <Image
                    style={{width:"100%", height:"100%"}}
                    source ={require("../../assets/images/burger-one.png")}
                    resizeMode='contain'
                    className='ml-[45px]'
                    />
                </View>
                <View className='absolute top-6 left-5'>
                    <Text
                    style={{fontSize:32 , fontWeight: '900'}}
                    className='text-white font-quicksand-bold'
                    >
                        SUMMER {"\n"} COMBO
                    </Text>
                </View>
            </View>

            <View className='flex flex-row bg-customYellow w-full h-[190px] overflow-hidden rounded-[24px] mb-6'>
                <View className='flex-1 p-5 '>
                <Image
                style={{width:"100%" , height:"100%"}}
                source = {require("../../assets/images/burger-two.png")}
                resizeMode='cover'
                className='mx-4'
                />
                </View>

                <View className='flex-1 mt-[50px] ml-[15px]'>
                    <Text
                    style={{fontSize:29 , fontWeight: '900'}}
                    className='text-white font-quicksand-bold'                    
                    >
                        BURGERS
                    </Text>
                    <View className='w-full'>
                        <Image
                        className='w-12 h-12'
                        source = {require("../../assets/icons/arrow-right.png")}
                        resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <View className='flex flex-row bg-customGreen w-full h-[190px] overflow-hidden rounded-[24px] mb-6'>
                

                <View className='flex-1 mt-[50px] ml-[15px]'>
                    <Text
                    style={{fontSize:32 , fontWeight: '900'}}
                    className='text-white font-quicksand-bold'                    
                    >
                        PIZZA
                    </Text>
                    <View className='w-full'>
                        <Image
                        className='w-12 h-12'
                        source = {require("../../assets/icons/arrow-right.png")}
                        resizeMode='contain'
                        />
                    </View>
                </View>

                <View className='flex-1 p-2 '>
                    <Image
                    style={{width:"100%" , height:"100%"}}
                    source = {require("../../assets/images/pizza-one.png")}
                    resizeMode='cover'
                    className='mx-2'
                    />
                </View>
            </View>
            
            <View className='flex flex-row bg-customSecondRed w-full h-[190px] overflow-hidden rounded-[24px] mb-6'>
                <View className='flex-1 p-5 '>
                <Image
                style={{width:"100%" , height:"100%"}}
                source = {require("../../assets/images/burger-two.png")}
                resizeMode='cover'
                className='mx-4'
                />
                </View>

                <View className='flex-1 mt-[50px] ml-[15px]'>
                    <Text
                    style={{fontSize:29 , fontWeight: '900'}}
                    className='text-white font-quicksand-bold'                    
                    >
                        BURRITO
                    </Text>
                    <View className='w-full'>
                        <Image
                        className='w-12 h-12'
                        source = {require("../../assets/icons/arrow-right.png")}
                        resizeMode='contain'
                        />
                    </View>
                </View>
            </View>
            
        </View>
    )
}