import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { CartContext } from 'global/Context';
export default function CardsComponent({ indexkey , name, price, image, ordernumber , remove }) {

    // set initial order from props
    const [numberOfOrder, setNumberOfOrder] = useState(ordernumber);

    const handlePlus = () => {
        setNumberOfOrder(numberOfOrder + 1);
    };

    const handleMinus = () => {
        setNumberOfOrder(numberOfOrder - 1);
    };

    useEffect(() => {
        if (numberOfOrder <= 0) setNumberOfOrder(1);
    }, [numberOfOrder]);

    const images = {
        wendyburger: require("../../assets/homemenu/wendyburger.png"),
        margheritamagic: require("../../assets/homemenu/margheritamagic.png"),
        chickenwrap: require("../../assets/homemenu/chickenwrap.png"),
        veggiedelight: require("../../assets/homemenu/veggiedelight.png"),
        bigbeefburrito: require("../../assets/homemenu/bigbeefburrito.png"),
        vegierBurger: require("../../assets/homemenu/vegierBurger.png"),
    };

    return (
        <View className='mt-[20px] bg-white'>
            <View className='bg-gray-200 h-[150px] flex-row items-center mx-6 rounded-[14px] relative'>
                
                {/* product image from props */}
                <View key={indexkey}>
                    <Image 
                        source={images[image]} 
                        resizeMode='contain'
                        className='size-32'
                    />
                </View>

                <View>
                    {/* product name */}
                    <Text style={{fontSize:17}} className='font-quicksand-bold'>
                        {name}
                    </Text>

                    {/* price = base price * order number */}
                    <Text style={{fontSize:18}} className='text-buttonColor font-quicksand-bold'>
                        ${ (price * numberOfOrder).toFixed(2) }
                    </Text>

                    <View className='flex-row items-center gap-3'>

                        <View><Text className='font-quicksand-bold'>How Much PIECE : {numberOfOrder}</Text></View>

                    </View>
                </View>

                <TouchableOpacity
                className='absolute right-2 bottom-4'
                activeOpacity={1}
                onPress={()=>{remove(name)}}
                >
                    <View>
                        <Image
                            source={require("../../assets/icons/trash.png")}
                            resizeMode='contain'
                            className='size-6'
                        />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}
