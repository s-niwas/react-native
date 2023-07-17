import {Auth} from 'aws-amplify';
import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CourseList from './Course/courseList';
import course from './Course/course';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
 const navi = useNavigation();
  const signOuts = () => {
    Auth.signOut();
  };
  
  return (
    <View>
      {course.map(item => (
        <View key={item.id}>
          <CourseList
            img={item.image}
            title={item.title}
            bg="#fdddf3"
            description={item.description}
            percent={item.percent}
            links={item.links}
            navigation={navi}
          />
        </View>
      ))}
      <View style={styles.root}>
        <Text onPress={signOuts} style={styles.signouts}>
          Sign out
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
