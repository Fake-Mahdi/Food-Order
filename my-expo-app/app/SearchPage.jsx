import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import '../global.css';
import { useState, useEffect } from 'react';
import MainContainer from '../components/Search/MainContainer';


export default function SearchPage({navigation}){
    return(

        <View className='w-full h-full bg-white'>
            <MainContainer navigation={navigation}/>
        </View>
    )
}