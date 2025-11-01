import { View, Text, TouchableOpacity,TextInput , ScrollView , Image} from 'react-native';
import { useState } from 'react';

export default function EmptyComponent(){
    return(
        <View className='flex flex-col justify-center items-center mt-16'>
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
                className='font-quicksand-bold ml-6'
                >
                    Nothing matched your search
                </Text>

                <Text
                
                className='font-quicksand-light'
                >
                    Try a different search term or check for typos.
                </Text>
            </View>
        </View>
    )
}