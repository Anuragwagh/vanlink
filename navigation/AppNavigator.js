// navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ChooseRoleScreen from '../screens/ChooseRoleScreen';
import DriverNavigator from './DriverNavigator'; // Handle Driver-specific screens
import ParentNavigator from './ParentNavigator'; // Handle Parent-specific screens

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ChooseRole" component={ChooseRoleScreen} />
      <Stack.Screen name="Driver" component={DriverNavigator} />
      <Stack.Screen name="Parent" component={ParentNavigator} />
    </Stack.Navigator>
  );
}
