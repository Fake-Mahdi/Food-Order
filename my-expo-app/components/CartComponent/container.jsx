import { View, Text, TouchableOpacity,TextInput,Image, ScrollView } from 'react-native';
import { useEffect , useState, useContext} from 'react';
import CardsComponent from './cardsComponent';
import { CartContext } from 'global/Context';
import EmptyComponent from './EmptyComponent';
export default function MainContainer(){
    const images = {
      wendyburger: require("../../assets/homemenu/wendyburger.png"),
      margheritamagic: require("../../assets/homemenu/margheritamagic.png"),
      chickenwrap: require("../../assets/homemenu/chickenwrap.png"),
      veggiedelight: require("../../assets/homemenu/veggiedelight.png"),
      bigbeefburrito: require("../../assets/homemenu/bigbeefburrito.png"),
      vegierBurger: require("../../assets/homemenu/vegierBurger.png"),
    };

    const { cartItems, removeFromCart } = useContext(CartContext);
    useEffect(()=>{console.log("Mahdi Check Here => ", cartItems)},[])
    const displayProductCart = () => {
        return(
            cartItems.map(({product , orderSizeNumber} , index) => (
                <CardsComponent key={index} indexkey = {index} name = {product.name} price = {product.price} image = {product.image.replace(".png", "")} ordernumber={orderSizeNumber} remove ={removeFromCart}/>
            ))
        );
    }

    const totalSum = cartItems.reduce((sum, { product, orderSizeNumber }) => {
    return sum + product.price * orderSizeNumber;
}, 0);

return (
    <View className='bg-white w-full h-full'>
        {cartItems.length ? (
            <ScrollView style={{ height: 300 }}>
                {displayProductCart()}
                <View className='border-[0.5px] border-gray-700 mx-[20px] mt-[20px] px-[15px] pb-[15px] rounded-[14px]'>
                    <Text className='font-quicksand-bold text-[26px]'>Payment Summary</Text>
                    <View className='flex-col justify-between mt-[10]'>
                        
                        <View className='flex-row justify-between mt-[10]'>
                        <View><Text className='text-gray-400 font-quicksand-semibold text-[18px]'>Total Item ({cartItems.length})</Text></View>
                        <View><Text className='font-quicksand-bold text-[18px]'>${totalSum}</Text></View>
                        </View>

                        <View className='flex-row justify-between mt-[10]'>
                        <View><Text className='text-gray-400 font-quicksand-semibold text-[18px]'>Delivery Free</Text></View>
                        <View><Text className='font-quicksand-bold text-[18px]'>Free</Text></View>
                        </View>

                    </View>
                </View>
                <TouchableOpacity
                className='mt-[15px] flex-1 bg-buttonColor h-full items-center justify-center rounded-[24px] mx-[15px] p-[10px]'
                activeOpacity={1}
                onPress={()=> {navigation.navigate("Main Page", { screen: "DisplayFoodPage" })}}
                >
                    <Text
                    style={{fontSize : 23}}
                    className='text-white font-quicksand-bold'
                    >Order Now</Text>
                </TouchableOpacity>
            </ScrollView>
        ) : (
        <EmptyComponent></EmptyComponent>
        )}
    </View>
);
}
