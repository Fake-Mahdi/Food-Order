import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import MainContainer from '../components/MainHomePage/MainContainer';
import '../global.css';
import { useState, useEffect } from 'react';
import { fetchMovies , popularMovies } from '../services/api';

export default function FirstPage({ navigation }) {

  return (
    <View
    style={{backgroundColor:"white"}}
    >
      <ScrollView>
        <View className="relative w-full h-[350px]">
       <View className="absolute w-full h-full">
        <Image
        className="w-full h-full"
        source={require("../assets/images/burger2.png")}
        resizeMode="stretch"
        />
        <View className="absolute inset-0 bg-black/60 p-[30px]">
        <View>
        <Text
        style={{ fontSize: 45 }}
        className="font-quicksand-bold text-white mt-[75px]"
        >Get Started Now</Text>
        <Text
        style={{ fontSize: 20 }}
        className="font-quicksand-medium text-white mt-[15px]"
        >Create an account or log in to explore</Text>
        </View>
        </View>
      </View>
     </View>
      
      <View 
      className="-mt-12 flex justify-center items-center rounded-[24px]">
        <MainContainer navigation={navigation}/>
      </View>
      </ScrollView>
    </View>
  );
}
