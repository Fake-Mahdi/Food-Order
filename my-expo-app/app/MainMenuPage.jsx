import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import '../global.css';
import { useState, useEffect } from 'react';
import { fetchMovies , popularMovies } from '../services/api';
import MainContainer from 'components/MainMenu/MainContainer';

export default function MainMenuPage({navigation}){
    return(
        <View className='h-full bg-white'>
            <MainContainer navigation={navigation}/>
        </View>
    );
}