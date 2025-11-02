import { View, Text, TouchableOpacity, Image , ScrollView } from 'react-native';
import { useState } from 'react';
import Data from '../../json/Data.json';

export default function DisplayAllFood() {
  const product = Data.basicProducts;

   const ProductCard = ({ product }) => {
    const rows = [];
    for (let i = 0; i < product.length; i += 2) {
      rows.push(product.slice(i, i + 2));
    }

    const images = {
      wendyburger: require("../../assets/homemenu/wendyburger.png"),
      margheritamagic: require("../../assets/homemenu/margheritamagic.png"),
      chickenwrap: require("../../assets/homemenu/chickenwrap.png"),
      veggiedelight: require("../../assets/homemenu/veggiedelight.png"),
      bigbeefburrito: require("../../assets/homemenu/bigbeefburrito.png"),
      vegierBurger: require("../../assets/homemenu/vegierBurger.png"),
    };

    return (
      <View className="mt-[30px]">
        {rows.map((row, index) => (
          <View
            key={index}
            className="flex flex-row justify-center items-center gap-5"
          >
            {row.map(({ name, image, price }) => (
              <TouchableOpacity 
              className='mb-[35px]' key={name}>
                <View className="bg-gray-100 rounded-[18px] ">
                  <Image
                    className="-mt-10"
                    source={images[image]} 
                    resizeMode="contain"
                  />
                  <View className="flex flex-col items-center">
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
        ))}
      </View>
    );
  };


  return (
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <ProductCard product={product} />
          <View className='mt-[50px]'></View>
        </ScrollView>
      </View>
  );
}
