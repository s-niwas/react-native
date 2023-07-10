import {React, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import ValueInput from '../valueInput/valueInput';
import CustButton from '../CustomButton/CustomButton';
import {Button} from 'react-native-paper';

const ConfirmEmail = () => {
  const route = useRoute();
  const navi = useNavigation();
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.email},
  });

  const usernames = watch('username');

  const onConfirmEmailClick = async data => {
    try {
      const response = await Auth.confirmSignUp(data.username, data.code);
      console.log(response);
      navi.navigate('HomeScreen');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    // navi.navigate('SignIn');
  };
  const oncoderesend = async () => {
    try {
      await Auth.resendSignUp(usernames);
      Alert.alert('Successful', 'Code Sended Successfully');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    //console.warn("Resend code clicked")
  };
  const onsigninclicking = () => {
    navi.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <View style={styles.confirmemail_top}>
        <View style={styles.confirmemail_top_content}>
          <Text style={styles.confirmemail_header}>Confirm your email</Text>
        </View>
      </View>
      <ValueInput
        placeholder="Email"
        name="username"
        control={control}
        texts={'Your Email'}
        secureTextEntry={false}
        editable={false}
        icons={false}
      />
      <ValueInput
        placeholder="Enter your confirmation Code"
        texts={'Confirmation Code'}
        name="code"
        control={control}
        secureTextEntry={true}
        rules={{
          required: 'Code is required',
          pattern: {
            value: /^\d+$/,
            message: 'Only numbers allowed',
          },
          minLength: {
            value: 6,
            message: 'Only 6 digits',
          },
          maxLength: {
            value: 6,
            message: 'Only 6 digits',
          },
        }}
        keyboards="numeric"
      />

      <CustButton
        text="Confirm"
        onPressing={handleSubmit(onConfirmEmailClick)}
      />
      {/* <CustButton text="Resend Code" onPressing={oncoderesend} type='TERTIARY'/> */}
      <Button
        mode="outlined"
        onPress={oncoderesend}
        style={{
          width: '89%',
          color: '#3D5CFF',
          backgroundColor: 'white',
          borderColor: '#3D5CFF',
          borderWidth: 1,
          borderRadius: 5,
        }}
        labelStyle={{color: '#3D5CFF'}}>
        Resend Code
      </Button>
      <View style={{margin: 10}}>
        <Text>
          Already have an account ?
          <Text
            style={{
              color: '#3D5CFF',
              fontWeight: '700',
              textDecorationLine: 'underline',
            }}
            onPress={onsigninclicking}>
            {' '}
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  checkbox: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    alignItems: 'flex-start',
    color: '#858597',
    justifyContent: 'flex-start',
    width: '80%',
  },
  confirmemail_top_content: {
    width: '100%',
    height: 63,
    paddingLeft: 9,
  },
  confirmemail_top: {
    width: '100%',
    backgroundColor: '#F0F0F2',
    height: '20%',
    textAlign: 'left',
    justifyContent: 'flex-end',
    padding: 10,
  },
  confirmemail_header: {
    fontFamily: 'Poppins',
    fontSize: 32,
    lineHeight: 48,
    color: '#1F1F39',
    fontWeight: '700',
  },
  button: {},
});
export default ConfirmEmail;
