import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useState , useEffect} from 'react';
import Data from '../../json/Data.json';
import EmptyComponent from './EmptyComponent';

export default function DisplayFood({input}) {
  const product = Data.basicProducts.filter(element =>
  element.name.toLowerCase().includes(input.toLowerCase()) ||
  element.category.toLowerCase().includes(input.toLowerCase())
);

  useEffect(() => {
    console.log(input)
    console.log(product)
}, [input])
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
          <TouchableOpacity key={name} className="m-2">
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
    <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
      { product.length > 0 
      ? <ProductCard product={product} />
      : <EmptyComponent/>}
    </ScrollView>
  </View>
);
}
