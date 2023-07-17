import React from 'react';
import NavigationScreen from './src/navigationscreen';
import {Amplify,Auth} from 'aws-amplify';
import awsconfig from './aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { View ,Text} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';
import Tabss from './src/navigationscreen/bottom_navbar';

Amplify.configure(awsconfig);


const App = () => {
  Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <NavigationScreen />
    </SafeAreaView>
  );
};


const styles=StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#F9FBFC'
  }
});

export default App;

