import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
import Onboarding from '../../layouts/Onboarding';
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';
import NewPassword from '../components/NewPassword/NewPassword';
import HomeScreen from '../screens/homescreen';
import ConfirmEmail from '../components/ConfirmEmail/ConfirmEmail';

const Stack = createNativeStackNavigator();
const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
