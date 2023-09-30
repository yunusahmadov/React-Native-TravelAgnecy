import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from './WelcomeScreen';

const Stack=createNativeStackNavigator();

export default function Navigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRoutName='Welcome' screenOptions={{headerShown:false}}>
    <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}