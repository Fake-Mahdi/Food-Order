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
                <CardsComponent indexkey = {index} name = {product.name} price = {product.price} image = {product.image.replace(".png", "")} ordernumber={orderSizeNumber} remove ={removeFromCart}/>
            ))
        );
    }
return (
    <View className='bg-white w-full h-full'>
        {cartItems.length ? (
            <ScrollView style={{ height: 300 }}>
                {displayProductCart()}
            </ScrollView>
        ) : (
        <EmptyComponent></EmptyComponent>
        )}
    </View>
);
}
