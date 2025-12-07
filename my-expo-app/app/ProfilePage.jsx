import { TextInput, View, Text, Button, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const ProfilePage = ()=> {
    return(
       <SafeAreaView className='w-full h-full bg-white'>
            
            <View className='w-full flex justify-center items-center'>
                <Image
                source={require("../assets/icons/logo.png")}
                />
            </View>
             <View className='flex-col justify-start items-center mx-[50px]'>
                <View className='mt-[100px] w-full flex-row '>
                <View><Image 
                style={{ width: 70, height: 70, marginRight: 10 }}
                source={require("../assets/icons/info.png")}/></View>
                <View><Text style={{fontSize:16}} className='font-quicksand'>Full Name</Text>
                <Text className='font-quicksand-bold text-[18px]'>Mahdi Boukhouima</Text>
                </View>
             </View>

             <View className='mt-[15px] w-full flex-row '>
                <View><Image 
                style={{ width: 70, height: 70, marginRight: 10 }}
                source={require("../assets/icons/email.png")}/></View>
                <View><Text style={{fontSize:16}} className='font-quicksand'>Full Name</Text>
                <Text className='font-quicksand-bold text-[18px]'>MahdiBoukhouima@gmail.com</Text>
                </View>
             </View>
             </View>
             <TouchableOpacity
                             className='mt-[15px] bg-buttonColor h-[60px] items-center justify-center rounded-[24px] mx-[15px] p-[10px]'
                             activeOpacity={1}
                             >
                                 <Text
                                 style={{fontSize : 23}}
                                 className='text-white font-quicksand-bold'
                                 >Edit Profile</Text>
                             </TouchableOpacity>

                             <TouchableOpacity
                             className='mt-[15px] bg-red-600 h-[60px] items-center justify-center rounded-[24px] mx-[15px] p-[10px]'
                             activeOpacity={1}
                             >
                                 <Text
                                 style={{fontSize : 23}}
                                 className='text-white font-quicksand-bold'
                                 >Logout</Text>
                             </TouchableOpacity>
        </SafeAreaView>
    );
}
export default ProfilePage