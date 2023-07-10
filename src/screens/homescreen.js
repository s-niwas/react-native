import {Auth} from 'aws-amplify';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {

  const signOuts = () => {
    Auth.signOut();
    
  };
  return (
    <View style={styles.root}>
      <Text onPress={signOuts} style={styles.signouts}>
        Sign out
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  signouts: {
    width: '100%',
    textAlign: 'center',
    color: '#f00',
    marginTop: 'auto',
    marginVertical: 20,
    fontSize: 20,
  },
});
export default HomeScreen;
