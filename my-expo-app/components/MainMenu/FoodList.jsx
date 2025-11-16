import { View, Text, TouchableOpacity, Image , ScrollView } from 'react-native';
import { useState } from 'react';
import Data from '../../json/Data.json';

export default function FoodList({navigation ,categorie , textInput}) {
const product = Data.basicProducts.filter(item => {
  let CategorieMatch = true;
  if (categorie && categorie.toLowerCase() !== "all") {
    CategorieMatch = item.category.toLowerCase().includes(categorie.toLowerCase());
  }

  let TextMatch = true;
  if (textInput && textInput.toLowerCase() !== "") {
    TextMatch = item.name.toLowerCase().includes(textInput.toLowerCase());
  }

  return CategorieMatch && TextMatch;
});


   const ProductCard = ({ product }) => {
  const images = {
      wendyburger: require("../../assets/homemenu/wendyburger.png"),
      margheritamagic: require("../../assets/homemenu/margheritamagic.png"),
      chickenwrap: require("../../assets/homemenu/chickenwrap.png"),
      veggiedelight: require("../../assets/homemenu/veggiedelight.png"),
      bigbeefburrito: require("../../assets/homemenu/bigbeefburrito.png"),
      vegierBurger: require("../../assets/homemenu/vegierBurger.png"),
    };
    return (
      <View className="flex flex-row flex-wrap justify-center mt-10">
        {product.map(({ name, image, price }) => (
          <TouchableOpacity 
          onPress={() => {navigation.navigate('SearchPageTab' , {screen : "DisplayFoodPage" , params : {name}})}}
          key={name} className="m-2">
            <View className="bg-gray-100 rounded-[18px] mb-4">
              <Image
                className="-mt-10"
                source={images[image]}
                resizeMode="contain"
              />
              <View className="mt-0 flex flex-col items-center">
                <Text className="font-quicksand-bold">{name}</Text>
                <Text className="font-quicksand-medium mt-0 text-gray-500">
                  From ${price}
                </Text>
                <Text className="font-quicksand-bold text-xl mt-2 text-yellow-400 pb-4">
                  + Add to cart
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
      <View className='flex-1'>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
          <ProductCard product={product} />
        </ScrollView>
      </View>
  );
}
