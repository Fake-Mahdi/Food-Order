import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useContext, useEffect , useState } from 'react';
import Data from '../../json/Data.json';
import { CartContext } from 'global/Context';

export default function MainContainer({ route, navigation }) {

  const {addToCart , cartItems} = useContext(CartContext)

  const addProduct = () => {
    const fooddata = {product: product , orderSizeNumber: byeNumber}
    addToCart(fooddata)
    console.log(addToCart)
  }
    const [byeNumber , setByNumber] = useState(1)
  useEffect(() => {
    console.log(route);
  }, [route]);

  const handlePlusClick = () => {
    const addedItem = byeNumber + 1
    setByNumber(addedItem)
  }

  const handleMinusClick = () => {
    if (byeNumber > 1 ) setByNumber(byeNumber - 1)
  }

    useEffect(()=>{console.log("Mahdicheck => , " , cartItems)}, [cartItems])
  useEffect(()=>{console.log(byeNumber)},[byeNumber])
  const images = {
    wendyburger: require("../../assets/display/wendyburger.png"),
    margheritamagic: require("../../assets/display/margheritamagic.png"),
    chickenwrap: require("../../assets/display/chickenwrap.png"),
    veggiedelight: require("../../assets/display/veggiedelight.png"),
    bigbeefburrito: require("../../assets/display/bigbeefburrito.png"),
    vegierBurger: require("../../assets/display/vegierBurger.png"),
  };

  const { name } = route.params;

  const product = Data.detailedProducts.filter(element => element.name === name)[0]; 

  return (
    <View className='flex-1'>
      <View className='w-full h-[400px] flex-row pt-[75px]'>
        <View className='pl-[10px] pr-[15px] mt-[50px]'>
          <Text style={{fontSize:24}} className='font-quicksand-bold'>{product.name}</Text>

          <View className="flex-row items-center mt-6 gap-2">
            <Image source={require('../../assets/icons/star.png')} className="w-4 h-4" />
            <Image source={require('../../assets/icons/star.png')} className="w-4 h-4" />
            <Image source={require('../../assets/icons/star.png')} className="w-4 h-4" />
            <Image source={require('../../assets/icons/star.png')} className="w-4 h-4" />
            <Text>4.9/5</Text>
          </View>

          <View className="flex-row items-center mt-[4] gap-0">
            <Image source={require('../../assets/icons/dollar.png')} />
            <Text style={{fontSize:18}} className='font-quicksand-bold'>{product.price}</Text>
          </View>

          <View className='flex-row items-center mt-8 mb-2 gap-4'>
            <Text className='font-quicksand-light'>Calories</Text>
            <Text className='font-quicksand-light'>Protein</Text>
          </View>

          <View className='flex-row items-center gap-4'>
            <Text className='font-quicksand-bold'>{product.calories} Cal</Text>
            <Text className='font-quicksand-bold'>{product.protein}g</Text>
          </View>
        </View>

        <View className='flex-1 pt-12'>
          <Image
            source={images[product.image.replace('.png','')]}
            className='w-full h-[75%]'
          />
        </View>
      </View>

      <View className='flex-row justify-center items-center mt-2 bg-constumOrange gap-4 mx-10 p-2 rounded-[14px]'>
        <View className='flex-row items-center'>
          <Image
            source={require('../../assets/icons/dollar.png')}
            className="w-9 h-9"
            resizeMode='contain'
          />
          <Text className='font-quicksand-semibold'>Free Delivery</Text>
        </View>

        <View className='flex-row items-center'>
          <Image
            source={require('../../assets/icons/clock.png')}
            className="w-6 h-6"
            resizeMode='contain'
          />
          <Text className='font-quicksand-semibold'> 20 - 30 mins</Text>
        </View>

        <View className='flex-row items-center'>
          <Image
            source={require('../../assets/icons/star.png')}
            className="w-6 h-6"
            resizeMode='contain'
          />
          <Text className='font-quicksand-semibold'>4.5</Text>
        </View>
      </View>

      <View className='flex-col justify-center items-center mx-4 mt-4'>
        <Text className='text-gray-700 font-quicksand-light leading-8'>
          {product.description}
        </Text>
      </View>

      <View className='flex-row justify-center items-center mt-12 gap-4'>
        <View className='flex-row items-center gap-3'>

            <TouchableOpacity
            onPress={()=>{handleMinusClick()}}
            activeOpacity={1}
            >
                <View className='bg-constumOrange rounded-full w-16 h-16 flex items-center justify-center'>
                <Text className='text-buttonColor text-6xl font-quicksand-semibold'>-</Text>
                </View>
            </TouchableOpacity>

            <View><Text>{byeNumber}</Text></View>

            <TouchableOpacity
            onPress={()=>{handlePlusClick()}}
            activeOpacity={1}
            >
                <View className='bg-constumOrange rounded-full w-16 h-16 flex items-center justify-center'>
                <Text className='text-buttonColor text-6xl font-quicksand-semibold'>+</Text>
            </View>
            </TouchableOpacity>

        </View>

        <View className='flex-row justify-center items-center gap-2 bg-buttonColor p-3 rounded-[24px]'>
            <Image
            source={require("../../assets/icons/bag.png")}
            resizeMode='contain'
            className='h-6 w-6'
            ></Image>
            <View>
            <TouchableOpacity
            onPress={()=>{addProduct()}}
            activeOpacity={1}
            >
              <Text className='text-white font-quicksand-semibold'>Add to cart (${product.price * byeNumber})</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  );
}
