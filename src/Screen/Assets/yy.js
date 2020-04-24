import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screen/Home'
import CountryList from './src/Screen/CountryList'
import Indonesia from './src/Screen/Indonesia'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const HomeScreen=()=>{
  return(
   
    <Stack.Navigator initialRouteName="Home"
    options={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home}
      options={{ headerShown: false }} />
      <Stack.Screen name="CountryList" component={CountryList}
      options={{ headerShown: false }} />
    </Stack.Navigator>
  
  )
}



const Tab = createMaterialBottomTabNavigator();
 function App() {
  return (
    <NavigationContainer
    >
       <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        color:'white'
      }}
      
     
    >
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Indonesia}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    
    </Tab.Navigator>

    </NavigationContainer>
  );
}
  
export default App;

