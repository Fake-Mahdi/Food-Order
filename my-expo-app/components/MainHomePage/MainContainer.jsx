import { 
  View, 
  Text, 
  TouchableOpacity, 
  KeyboardAvoidingView,
  ScrollView,
  Platform
} from 'react-native';
import { useState } from 'react';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';

export default function MainContainer({ navigation }) {
  const [active, setActive] = useState('login');

  const handleStatusChange = (new_name) => {
    setActive(new_name);
  };

  return (
    <View style={{ flex: 1}}>

      {/* Top tab - fixed */}
      <View className="flex flex-row justify-center items-center w-full px-4 py-2 bg-gray-200 rounded-[8px] mt-4">
        <TouchableOpacity
          className={`flex-1 items-center justify-center py-3 rounded-[8px] ${active === 'login' ? 'bg-white' : ''}`}
          onPress={() => setActive('login')}
          activeOpacity={1}
        >
          <Text className={`text-[18px] font-quicksand-bold ${active === 'login' ? 'text-buttonColor' : 'text-black'}`}>
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 items-center justify-center py-3 rounded-[8px] ${active === 'signup' ? 'bg-white' : ''}`}
          onPress={() => setActive('signup')}
          activeOpacity={1}
        >
          <Text className={`text-[18px] font-quicksand-bold ${active === 'signup' ? 'text-buttonColor' : 'text-black'}`}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable form area */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {active === "login"
            ? <LoginComponent onStatusChange={handleStatusChange} navigation={navigation} />
            : <SignupComponent onStatusChange={handleStatusChange} />
          }
        </ScrollView>
      </KeyboardAvoidingView>

    </View>
  );
}
