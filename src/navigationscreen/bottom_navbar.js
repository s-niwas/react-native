import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from '../screens/message';
import Account from '../screens/account';
import Search from '../screens/search';
import HomeScreen from '../screens/homescreen';
// import { Image } from 'react-native-elements';
import {View, Text, Image} from 'react-native';

const BottomTab = createBottomTabNavigator();

const Tabss = () => {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style:{
            backgroundColor:"#f0f",
        borderradius:15,
        height:90
        }
        
      }}
      >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center',borderTopWidth:1,borderColor:focused ? '#3D5CFF' : '#fff'}}>
              <Image
                source={require('../../photos/home.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ?  '#3D5CFF':'#808080',
                  top:6
                }}
              />
              <Text
                style={{color: focused ? '#3D5CFF' : '#808080', fontSize: 12,padding:4}}>
                Home
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Course"
        component={Message}
        options={{
            tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center',borderTopWidth:1,borderColor:focused ? '#3D5CFF' : '#fff'}}>
              <Image
                source={require('../../photos/book.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ?  '#3D5CFF':'#808080',
                  top:6
                }}
              />
              <Text
                style={{color: focused ? '#3D5CFF' : '#808080', fontSize: 12,padding:4}}>
                Course
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
            tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center',borderTopWidth:1,borderColor:focused ? '#3D5CFF' : '#fff'}}>
              <Image
                source={require('../../photos/search.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ?  '#3D5CFF':'#808080',
                  top:6
                }}
              />
              <Text
                style={{color: focused ? '#3D5CFF' : '#808080', fontSize: 12,padding:4}}>
                Search
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={Message}
        options={{
            tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center',borderTopWidth:1,borderColor:focused ? '#3D5CFF' : '#fff'}}>
              <Image
                source={require('../../photos/message.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ?  '#3D5CFF':'#808080',
                  top:6
                }}
              />
              <Text
                style={{color: focused ? '#3D5CFF' : '#808080', fontSize: 12,padding:4}}>
                Message
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
            tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center',borderTopWidth:1,borderColor:focused ? '#3D5CFF' : '#fff'}}>
              <Image
                source={require('../../photos/user.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ?  '#3D5CFF':'#808080',
                  top:6
                }}
              />
              <Text
                style={{color: focused ? '#3D5CFF' : '#808080', fontSize: 12,padding:4}}>
                Account
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabss;
