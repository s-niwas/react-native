import React,{cloneElement, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
import Onboarding from '../../layouts/Onboarding';
import ForgetPassword from '../components/ForgetPassword/ForgetPassword';
import NewPassword from '../components/NewPassword/NewPassword';
import HomeScreen from '../screens/homescreen';
import ConfirmEmail from '../components/ConfirmEmail/ConfirmEmail';
import { Auth,Hub } from 'aws-amplify';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import LinkScreen from '../screens/Course/LinkScreen';
import BottomNav from './bottom_navbar';
import Navigations from './navigation';
import Tabss from './bottom_navbar';

const Stack = createNativeStackNavigator();
const NavigationScreen = () => {

  const [user,setUser]=useState(undefined);
  const [alreadysignin,setalreadysignin]=useState(false);
  const checkuser=async()=>{
    try{
    const authuser=await Auth.currentAuthenticatedUser({ bypassCache:true});
     setUser(authuser);
    setalreadysignin(true); }
     catch(e){
      setUser(null);
     }
  }
  useEffect(()=>{
    checkuser();
  },[]);

  useEffect(()=>{
    const listener=(data)=>{
      if(data.payload.event ==='signIn'|| data.payload.event === 'signOut'){
        checkuser();
      };
    };
    Hub.listen('auth',listener);
  })

  if(user===undefined){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {user ? ( <>
          <Stack.Screen name='Navigation' component={Tabss}/>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='LinkScreen' component={LinkScreen}/>
        </>
        ):( 
          <>
          {alreadysignin ? null : <Stack.Screen name='Onboarding' component={Onboarding}/>} 
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
        <Stack.Screen name='NewPassword' component={NewPassword}/>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail}/>
          </>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
