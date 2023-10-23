import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Settings from './Settings';
import DashboardScreen from './Dashboard';
import HomeScreen from './HomeScreen';
import DetailedScreen from './DetailedScreen';


import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen'; // Import the new SignupScreen

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="DDD">
      <Stack.Screen
          name="DDD"
          component={DashboardScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
          }}
        />
       
        {/* Add the SignupScreen to the navigation stack */}
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: true,
            title: 'Signup', // You can customize the header title here
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="DetailedScreen"
          component={DetailedScreen}
          options={{
            headerShown: true,
          }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
