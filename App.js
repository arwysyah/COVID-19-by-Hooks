import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screen/Home'
import CountryList from './src/Screen/CountryList'
import Indonesia from './src/Screen/Indonesia'
import Ionicons from 'react-native-vector-icons/Ionicons'

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


const Tab = createBottomTabNavigator();
 function App() {
  return (
    <NavigationContainer
    >
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Indonesia') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style:{
          height:80,
          marginVertical:-30
        },
        tabStyle:{height:40}
      }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Indonesia" component={Indonesia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
  
export default App;

