import { View, Text, TouchableOpacity } from 'react-native';
import { useState , useEffect } from 'react';

export default function FoodCategorie({onCategorieChange}) {
  const [selectCategorie, setSelectedCategorie] = useState("");
  const handleCategorieClick = (name) => {
    setSelectedCategorie(name);
  };
  const handleCategorieChange = (value) => {
        onCategorieChange(value)
    }
    useEffect(() =>{
        handleCategorieChange(selectCategorie)
    } , [selectCategorie])
  return (
    <View>
      <View className='mt-6 flex flex-row justify-center items-center h-16'>
        <TouchableOpacity
          onPress={() => handleCategorieClick("all")}
          activeOpacity={1}
        >
          <View className={`${selectCategorie == "all" ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[14px] w-20 h-10 flex items-center justify-center mr-2`}>
            <Text className={`${selectCategorie == "all" ? 'text-white' : 'text-black'}`}>All</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleCategorieClick("burger")}
          activeOpacity={1}
        >
          <View className={`${selectCategorie == "burger" ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[14px] w-20 h-10 flex items-center justify-center mr-2`}>
            <Text className={`${selectCategorie == "burger" ? 'text-white' : 'text-black'}`}>Burgers</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleCategorieClick("pizza")}
          activeOpacity={1}
        >
          <View className={`${selectCategorie == "pizza" ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[14px] w-20 h-10 flex items-center justify-center mr-2`}>
            <Text className={`${selectCategorie == "pizza" ? 'text-white' : 'text-black'}`}>Pizza</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleCategorieClick("burrito")}
          activeOpacity={1}
        >
          <View className={`${selectCategorie == "burrito" ? 'bg-yellow-400' : 'bg-gray-200'} rounded-[14px] w-20 h-10 flex items-center justify-center mr-2`}>
            <Text className={`${selectCategorie == "burrito" ? 'text-white' : 'text-black'}`}>Burrito</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
