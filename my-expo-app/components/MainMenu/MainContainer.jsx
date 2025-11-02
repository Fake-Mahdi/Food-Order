import { View, Text, TouchableOpacity,TextInput,Image } from 'react-native';
import { useState , useEffect } from 'react';
import FoodCategorie from './FoodCategorie';

export default function MainContainer() {
    const [selectedCategorie, setSelectedCategorie] = useState('');
    const handleChange = ()=>{
        console.log(selectedCategorie)
    }
    useEffect(()=>{
        handleChange()
    },[selectedCategorie])
  return (
    <View className='h-full'>
      <View className='mt-[80px]'>
        <View className='flex flex-row items-center h-[50px] mx-6 bg-gray-200 rounded-[24px] px-5'>
          <TextInput
            className='flex-1 ml-3 font-quicksand'
            placeholderTextColor="black"
            placeholder='Search What you desire Here'
            onChangeText={(value) => { handlechange(value) }}
          />

          <View>
            <Image
              className='size-6'
              resizeMode='contain'
              source={require("../../assets/icons/search.png")}
            />
          </View>
        </View>
        <FoodCategorie onCategorieChange={setSelectedCategorie}/>

      </View>
    </View>
  );
}
