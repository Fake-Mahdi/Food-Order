import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import '../global.css';
import { useState, useEffect } from 'react';
import MainContainer from '../components/Search/MainContainer';


export default function SearchPage(){
    return(

        <View className='w-full h-full'>
            <MainContainer/>
        </View>
    )
}