import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Screen/Home';
import CountryList from './src/Screen/CountryList';
import Indonesia from './src/Screen/Indonesia';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import color from './src/Screen/Components/Color';

import CallCenter from './src/Screen/CallCenter';
import Donation from './src/Screen/Donation';
import About from './src/Screen/About'


const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" options={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CountryList"
        component={CountryList}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Indonesia"
        component={Indonesia}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Donation') {
              iconName = focused ? 'donate' : 'donate';
            } else if (route.name === 'CallCenter') {
              iconName = focused ? 'phone-volume' : 'phone-volume';
            }
            else if (route.name === 'About') {
              iconName = focused ? 'info-circle' : 'info';
            }
            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            height: 80,
            marginVertical: -30,
            backgroundColor: color,
          },
          tabStyle: {height: 40},
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Donation" component={Donation} />
        <Tab.Screen name="CallCenter" component={CallCenter} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
