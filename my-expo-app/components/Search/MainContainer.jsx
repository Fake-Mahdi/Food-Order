import { View, Text, TouchableOpacity,TextInput , ScrollView , Image} from 'react-native';
import EmptyComponent from './EmptyComponent';
import { useEffect, useState } from 'react';

export default function MainContainer(){

    const [searchInput , setSearchInput] = useState("")
    const handlechange = (value) =>
    {

        setSearchInput(value)
    }
    useEffect(()=>{

    },[searchInput])
    return(
        <View className='mt-[80px]'>
            <View className='flex flex-row items-center h-[50px] mx-6 bg-gray-200 rounded-[24px] px-5'>

                    <TextInput
                    className='flex-1 ml-3 font-quicksand'
                    placeholderTextColor="black"
                    placeholder='Search What you desire Here'
                    onChangeText={(value) => {handlechange(value)}}
                    />
            
                <View>
                    <Image
                    className='size-6'
                    resizeMode='contain'
                    source={require("../../assets/icons/search.png")}
                    />
                </View>

            </View>

            <View className='mt-[35px]'>
                { searchInput.length > 0 ?
                <Text>Funcionality still not added yet</Text>
                : <EmptyComponent/>
                }
            </View>
        </View>
    )
}