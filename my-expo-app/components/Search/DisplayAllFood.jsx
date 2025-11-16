import { View, Text, TouchableOpacity, Image , ScrollView } from 'react-native';
import { useState } from 'react';
import Data from '../../json/Data.json';

export default function DisplayAllFood({navigation}) {
  const product = Data.basicProducts;

   const ProductCard = ({product }) => {
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
          <TouchableOpacity key={name} className="m-2"
          onPress={() => {navigation.navigate('SearchPageTab' , {screen : "DisplayFoodPage" , params : {name}})}}
          >
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
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <ProductCard product={product} />
          <View className='mt-[50px] mb[40px]'></View>
        </ScrollView>
      </View>
  );
}
