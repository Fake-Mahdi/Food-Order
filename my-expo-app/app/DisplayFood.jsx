import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import '../global.css';
import MainContainer from 'components/DisplayFood/MainContainer';
import { useState, useEffect } from 'react';
import { fetchMovies , popularMovies } from '../services/api';

export default function DisplayFood({route , navigation}){
    return(
        <View className='w-full h-full'>
            <MainContainer route = {route} navigation = {navigation}/>
        </View>
    );
}