import { TextInput, View, Text, Button, FlatList, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import { useState, useEffect } from 'react';
import { fetchMovies , popularMovies } from '../services/api';
import MainContainer from 'components/CartComponent/container';
export default function Cart(){
    return(
         
    <SafeAreaView className='w-full h-full bg-white'>
      <MainContainer/>
    </SafeAreaView>

    );
}