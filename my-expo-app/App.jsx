import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstPage from './app/FirstPage';
import SuccessLogin from './app/SuccessLogin';
import CategoriePage from './app/CategoriePage';
import SearchPage from './app/SearchPage';
import MainMenuPage from './app/MainMenuPage'
import DisplayFood from 'app/DisplayFood';
import { Image, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { setLoginStatus, GetLoginStatus } from "./api/loginStatus";
import "./global.css";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// 🔹 Reusable Stack Template
const StackTemplate = ({ routename, screens }) => {
  return (
    <Stack.Navigator initialRouteName={routename}>
      {screens.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options || { headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

// 🔹 Icon component: only color changes for active/inactive
const TabIcons = (source) => ({ color, size }) => (
  <Image
    source={source}
    style={{
      width:  20,
      height: 20,
      tintColor: color, // active/inactive color
    }}
  />
);

// 🔹 Define screens for each stack
const firstStackScreens = [
  { name: 'FirstPage', component: FirstPage, options: { headerShown: false } },
  { name: 'SearchPage', component: SearchPage, options: { headerShown: false } },
  { name: 'CategoriePage', component: CategoriePage, options: { headerShown: false } },
  { name: 'MainMenuPage', component: MainMenuPage, options: { headerShown: false } },
  { name: 'DisplayFoodPage', component: DisplayFood, options: { headerShown: false } }
];

const searchStackScreens = [
  { name: 'SearchPage', component: SearchPage, options: { headerShown: false } },
  { name: 'FirstPage', component: FirstPage, options: { headerShown: false } },
  { name: 'CategoriePage', component: CategoriePage, options: { headerShown: false } },
  { name: 'MainMenuPage', component: MainMenuPage, options: { headerShown: false } },
  { name: 'DisplayFoodPage', component: DisplayFood, options: { headerShown: false } }
];
const categoriePageScreens = [
  { name: 'CategoriePage', component: CategoriePage, options: { headerShown: false } },
  { name: 'SearchPage', component: SearchPage, options: { headerShown: false } },
  { name: 'FirstPage', component: FirstPage, options: { headerShown: false } },
  { name: 'MainMenuPage', component: MainMenuPage, options: { headerShown: false } },
  { name: 'DisplayFoodPage', component: DisplayFood, options: { headerShown: false } }
  
];
const MainMenuScreens = [
  { name: 'MainMenuPage', component: MainMenuPage, options: { headerShown: false } },
  { name: 'FirstPage', component: FirstPage, options: { headerShown: false } },
  { name: 'CategoriePage', component: CategoriePage, options: { headerShown: false } },
  { name: 'SearchPage', component: SearchPage, options: { headerShown: false } },
  { name: 'DisplayFoodPage', component: DisplayFood, options: { headerShown: false } }
  
];

const DisplayFoodScreens = [
  { name: 'MainMenuPage', component: MainMenuPage, options: { headerShown: false } },
  { name: 'FirstPage', component: FirstPage, options: { headerShown: false } },
  { name: 'CategoriePage', component: CategoriePage, options: { headerShown: false } },
  { name: 'SearchPage', component: SearchPage, options: { headerShown: false } },
  { name: 'DisplayFoodPage', component: DisplayFood, options: { headerShown: false } }
]

// 🔹 Create stacks using the template
const FirstPageStack = () => (
  <StackTemplate routename="FirstPage" screens={firstStackScreens} />
);

const SearchStack = () => (
  <StackTemplate routename="SearchPage" screens={searchStackScreens} />
);

const CategoriePageStack = () => (
  <StackTemplate routename="CategoriePage" screens={categoriePageScreens} />
);

const MainMenuStack = () => (
  <StackTemplate routename="MainMenuPage" screens={MainMenuScreens} />
);
const DisplayFoodStack = () => (
  <StackTemplate routename="DisplayFoodPage" screens={DisplayFoodScreens} />
);

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(GetLoginStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      const current = GetLoginStatus();
      setIsLoggedIn(current);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // wait for fonts

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'gray',  
            tabBarItemStyle: {
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle: {
              display: !isLoggedIn ? "none" : "flex",
              justifyContent: 'center',
              alignItems: 'center',
              height: 15,
              paddingTop: 25,
              borderRadius: 24,
              marginBottom: 40,
              paddingBottom: 27,
              paddingHorizontal: 20,
              width: 275,
              alignSelf: 'center',
              borderTopWidth: 0,
            },
          }}
        >
          <BottomTab.Screen
            name="Main Page"
            component={FirstPageStack}
            options={{
              tabBarIcon: TabIcons(require('./assets/icons/home.png')),
            }}
          />
          <BottomTab.Screen
            name="SearchPageTab"
            component={SearchStack}
            options={{
              tabBarIcon: TabIcons(require('./assets/icons/search.png')),
            }}
          />
          <BottomTab.Screen
            name="CategoriePageTab"
            component={CategoriePageStack}
            options={{
              tabBarIcon: TabIcons(require('./assets/icons/bag.png')),
            }}
          />
          <BottomTab.Screen
            name="MainMenuTab"
            component={MainMenuStack}
            options={{
              tabBarIcon: TabIcons(require('./assets/icons/person.png')),
            }}
          />
          
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
}
