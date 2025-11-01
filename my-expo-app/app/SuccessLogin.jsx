// app/SecondPage.jsx
import { View, Text, Button , Image, TouchableOpacity } from 'react-native';

export default function SuccessLogin({ navigation }) {
  return (
    <View className='h-full w-full bg-white'>
      <View className="relative w-full h-[450px] ">
      <View className='absolute w-full h-full'>
        <Image
        className='w-full h-full'
        source={require("../assets/images/handburger.png")}
        resizeMode='cover'
        blurRadius={20}
        />
        <View className='absolute inset-0 bg-black/15'/>
      </View>
    </View>

    <View className='-mt-12 flex justify-center items-center h-[350px] rounded-[24px] bg-white' >
      <View className='flex-1 items-center justify-center rounded-[24px]'>
        <Image
        source={require("../assets/images/Icon_Success.png")}
        />
        <Text 
        style={{fontSize : 43}}
        className="text-black font-quicksand-bold">Login Successful
        </Text>
        <Text
        style={{fontSize: 18}}
        className='font-quicksand-light mt-6'
        >You’re all set to continue where you left off.
        </Text>
        <View className='flex flex-row justify-center items-center w-full'>
          <TouchableOpacity
        className=' flex-1 items-center justify-center mt-[16px] bg-yellow-400 p-5 rounded-full mx-6'
        onPress={()=> {navigation.navigate("FirstPage")}}
        >
          <Text
          style={{fontSize:24}}
          className='font-quicksand-semibold text-white'
          >Go to Homepage</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );
}
