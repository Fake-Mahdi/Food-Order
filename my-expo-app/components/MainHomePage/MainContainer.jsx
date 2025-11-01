import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent'

export default function MainContainer({navigation}) {
  const [active, setActive] = useState('login'); 
  const handleStatusChange = (new_name) =>
  {
    setActive(new_name)
  }

  return (
    <View>
      <View className="flex flex-row justify-center items-center w-full px-10 h-[60px] bg-gray-200 mt-[15px] p-2 rounded-[8px]">
      
      <TouchableOpacity
        className={`flex-1 items-center justify-center h-full rounded-[8px] ${active === 'login' ? 'bg-white' : ''}`}
        onPress={() => setActive('login')}
        activeOpacity={1}
      >
        <Text className={`text-[18px] font-quicksand-bold ${active === 'login' ? 'text-yellow-400' : 'text-black'}`}>
          Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`flex-1 items-center justify-center h-full rounded-[8px] ${active === 'signup' ? 'bg-white' : ''}`}
        onPress={() => setActive('signup')}
        activeOpacity={1}
      >
        <Text className={`text-[18px] font-quicksand-bold ${active === 'signup' ? 'text-yellow-400' : 'text-black'}`}>
          Sign Up
        </Text>
      </TouchableOpacity>

    </View>

    <View className='mx-[10px] mt-[10px]'>
      {active == "login" 
      ? <LoginComponent onStatusChange ={handleStatusChange} navigation={navigation}/> 
      : <SignupComponent onStatusChange ={handleStatusChange}/>}
    </View>
    </View>
  );
}
