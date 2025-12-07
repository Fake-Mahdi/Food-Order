import { TextInput, View, Text, Button, FlatList, Image, ScrollView } from 'react-native';
import MainContainer from '../components/Categorie/MainContainer';
import '../global.css';


export default function CategoriePage({navigation}){
    return(
        <View className='bg-white w-full h-full flex  p-3'>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <MainContainer navigation = {navigation}/>
            </ScrollView>
        </View>
    )
}