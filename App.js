import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView,screenOptions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screens/Home';
import Login from './Screens/Login';
import StartupPage from './Screens/StartupPage';
import SignUpPage from './Screens/SignUpPage';
import OrderCustomerDetails from './Screens/OrderCustomerDetails';
import OrderPlacement from './Screens/OrderPlacement';


const Stack=createStackNavigator();

function App(){
  return(<NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false,headerBackTitle:''}}>
  <Stack.Screen name="StartupPage" component={StartupPage} />
  <Stack.Screen name="Sign-up Page" component={SignUpPage} />
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Order Customer Details" component={OrderCustomerDetails} />
  <Stack.Screen name="Order Placement" component={OrderPlacement} />

 
   <Stack.Screen name="Start-Up Page" component={StartupPage} />
  

   
  </Stack.Navigator>
  </NavigationContainer>);
}
export default App;