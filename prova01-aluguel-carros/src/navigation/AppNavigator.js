import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ListScreen from '../screens/ListScreen';
import FormScreen from '../screens/FormScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>

);

export default StackNavigator;
