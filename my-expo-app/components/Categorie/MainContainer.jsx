import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ProductList from './ProductList';
 

export default function MainContainer({navigation}){
    return(
        <View className='bg-white mt-[100px] w-[90%] mx-5'>
            <ProductList navigation = {navigation}/>
        </View>
    )
}