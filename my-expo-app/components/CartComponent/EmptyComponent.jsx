import { View, Text, TouchableOpacity,TextInput , ScrollView , Image} from 'react-native';
import { useState } from 'react';

export default function EmptyComponent(){
    return(
        <View className='w-full h-full flex flex-col justify-center items-center bg-white'>
            <View >
                <Image
                source={require("../../assets/images/empty-state.png")}
                resizeMode='contain'
                className='size-80'
                />
            </View>
            <View>
                <Text
                style={{fontWeight:400 , fontSize:18}}
                className='font-quicksand-bold text-center'
                >
                    Your Panel Is Empty 
                </Text>

                <Text
                
                className='font-quicksand-light'
                >
                    Try a Searching In our Product
                </Text>
            </View>
        </View>
    )
}